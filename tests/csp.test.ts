import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import {
  inlineScripts,
  requiredScriptHashes,
  sha256Source,
  stripPreviewToolbar,
  uncoveredInlineScripts,
} from "../src/lib/csp-inline";
import {
  CSP_HASH_PLACEHOLDER,
  assertProductionScriptSrc,
  buildContentSecurityPolicy,
  buildDevContentSecurityPolicy,
  directiveValue,
} from "../src/lib/csp-policy";
import { assertDeploymentOutput, publishInlineScriptHashes, retargetUnconditionalToolbarChunks } from "../src/lib/csp-publish";

const GTAG = "window.dataLayer = window.dataLayer || [];";

function page(extra = ""): string {
  const payload = JSON.stringify([0, { children: GTAG, id: "google-ads-tag" }]);
  return `<!doctype html><script src="/_next/static/chunks/app.js"></script>
<script type="application/ld+json">{"@type":"WebSite"}</script>
<script>(self.__next_s=self.__next_s||[]).push(${payload})</script>
<script>(self.__next_f=self.__next_f||[]).push([0])</script>
${extra}`;
}

describe("content security policy", () => {
  it("hashes the script source the browser hashes", () => {
    assert.equal(sha256Source("window.__ok = 1"), "'sha256-jHIk/15hbltKLWfuHJjRVWpRTvmtGvByNu5yNRfH7oc='");
  });

  it("ignores JSON-LD and external scripts, and hashes next/script payloads", () => {
    const scripts = inlineScripts(page());
    assert.equal(scripts.length, 2);
    assert.deepEqual(scripts[0]?.dynamic, [GTAG]);
    const hashes = requiredScriptHashes(page());
    assert.ok(hashes.includes(sha256Source(scripts[0]!.text)));
    assert.ok(hashes.includes(sha256Source(GTAG)));
    assert.ok(hashes.includes(sha256Source("(self.__next_f=self.__next_f||[]).push([0])")));
  });

  it("keeps unsafe-eval out of the production script-src", () => {
    const policy = buildContentSecurityPolicy([sha256Source("var ready = true;")]);
    assert.equal(directiveValue(policy, "script-src").includes("'unsafe-inline'"), false);
    assert.equal(directiveValue(policy, "script-src").includes("'unsafe-eval'"), false);
    assert.equal(directiveValue(policy, "frame-ancestors"), "'none'");
    assert.match(directiveValue(policy, "script-src"), /https:\/\/va\.vercel-scripts\.com/);
    assert.match(directiveValue(policy, "connect-src"), /https:\/\/vitals\.vercel-insights\.com/);
    assert.equal(directiveValue(policy, "form-action"), "'self'");
    assert.equal(policy.includes("vercel.live"), false);
    assert.doesNotThrow(() => assertProductionScriptSrc(policy));
    assert.equal(uncoveredInlineScripts("<script>var ready = true;</script>", policy).length, 0);
  });

  it("ships a placeholder until the post-build step fills hashes", () => {
    const policy = buildContentSecurityPolicy([]);
    assert.ok(policy.includes(CSP_HASH_PLACEHOLDER));
    assert.throws(() => assertProductionScriptSrc(policy), /placeholder/);
  });

  it("allows eval only in the development policy", () => {
    const dev = buildDevContentSecurityPolicy();
    assert.match(directiveValue(dev, "script-src"), /'unsafe-eval'/);
    assert.match(directiveValue(dev, "script-src"), /'unsafe-inline'/);
    assert.equal(dev.includes("upgrade-insecure-requests"), false);
  });

  it("strips the unconditional preview toolbar and keeps the production cookie gate", () => {
    const injected =
      'before;var r=document.createElement("script");r.src="https://vercel.live/_next-live/feedback/feedback.js",r.setAttribute("data-deployment-id",globalThis.NEXT_DEPLOYMENT_ID),(document.head||document.documentElement).appendChild(r);after';
    assert.equal(stripPreviewToolbar(injected), "before;void 0;after");
    assert.equal(stripPreviewToolbar("var ready = true;"), "var ready = true;");
    const production =
      'if(e.i(47167),/(?:^|;\\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)){var r=document.createElement("script");r.src="https://vercel.live/_next-live/feedback/feedback.js",r.setAttribute("data-explicit-opt-in","true"),r.setAttribute("data-cookie-opt-in","true"),r.setAttribute("data-deployment-id",globalThis.NEXT_DEPLOYMENT_ID),(document.head||document.documentElement).appendChild(r)}';
    assert.equal(stripPreviewToolbar(production), production);
    assert.throws(
      () => stripPreviewToolbar('const src = "https://vercel.live/_next-live/feedback/feedback.js";'),
      /unrecognized/,
    );
  });

  it("rewrites a deployment config that the adapter wrote with the placeholder", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "csp-"));
    const dist = path.join(root, ".next");
    const html = "<!doctype html><script>var ready = true;</script>";
    const placeholder = buildContentSecurityPolicy([]);
    await mkdir(path.join(dist, "server", "app"), { recursive: true });
    await mkdir(path.join(dist, "output"), { recursive: true });
    await writeFile(path.join(dist, "server", "app", "index.html"), html);
    await writeFile(
      path.join(dist, "routes-manifest.json"),
      JSON.stringify({
        headers: [{ source: "/:path*", headers: [{ key: "Content-Security-Policy", value: placeholder }] }],
      }),
    );
    const routing = { beforeMiddleware: [{ headers: { "content-security-policy": placeholder } }] };
    const published = await publishInlineScriptHashes({ distDir: dist, routing });
    assert.equal(JSON.stringify(routing).includes(CSP_HASH_PLACEHOLDER), false);
    assert.ok(published.hashList.length >= 1);

    const dropped = published.policy.replace(published.hashList[0]!, "");
    await writeFile(
      path.join(dist, "output", "config.json"),
      JSON.stringify({ routes: [{ headers: { "Content-Security-Policy": dropped } }] }),
    );
    await assertDeploymentOutput({ projectRoot: root, distDir: dist, routing, requireDeploymentOutput: true });
    const config = await readFile(path.join(dist, "output", "config.json"), "utf8");
    assert.equal(config.includes(CSP_HASH_PLACEHOLDER), false);
    assert.equal(config.includes(published.hashList[0]!), true);
    assert.equal(config.includes(published.policy), true);
    await rm(root, { recursive: true, force: true });
  });

  it("renames a preview toolbar chunk so the immutable URL cannot keep the injected script", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "csp-toolbar-"));
    const chunkDir = path.join(root, "static", "immutable", "chunks");
    const htmlDir = path.join(root, "server", "app");
    await mkdir(chunkDir, { recursive: true });
    await mkdir(htmlDir, { recursive: true });
    const injected =
      'before;var r=document.createElement("script");r.src="https://vercel.live/_next-live/feedback/feedback.js",r.setAttribute("data-deployment-id",globalThis.NEXT_DEPLOYMENT_ID),(document.head||document.documentElement).appendChild(r);after';
    const chunkName = "0c6saa3i-zv6m.js";
    await writeFile(path.join(chunkDir, chunkName), injected);
    await writeFile(path.join(chunkDir, "other.js"), "window.other = true;");
    const gated =
      'if(/(?:^|;\\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)){var r=document.createElement("script");r.src="https://vercel.live/_next-live/feedback/feedback.js",r.setAttribute("data-explicit-opt-in","true"),r.setAttribute("data-cookie-opt-in","true"),r.setAttribute("data-deployment-id",globalThis.NEXT_DEPLOYMENT_ID),(document.head||document.documentElement).appendChild(r)}';
    await writeFile(path.join(chunkDir, "gated.js"), gated);
    await writeFile(
      path.join(htmlDir, "index.html"),
      `<!doctype html><script src="/_next/static/immutable/chunks/${chunkName}"></script><script>var ready = true;</script>`,
    );
    await writeFile(
      path.join(root, "immutable-static-hashes.json"),
      JSON.stringify({ [`static/immutable/chunks/${chunkName}`]: "0c6saa3i-zv6m-full-hash" }),
    );
    const staticFiles = [
      {
        id: `static/immutable/chunks/${chunkName}`,
        filePath: path.join(chunkDir, chunkName),
        pathname: `/_next/static/immutable/chunks/${chunkName}`,
        immutableHash: "0c6saa3i-zv6m-full-hash",
      },
    ];
    const renamed = await retargetUnconditionalToolbarChunks(root, staticFiles);
    assert.equal(renamed.length, 1);
    const nextName = renamed[0]!;
    assert.equal(nextName.endsWith(".js"), true);
    assert.equal(nextName.includes(chunkName.slice(0, -3)), false);
    const nextChunk = await readFile(path.join(chunkDir, nextName), "utf8");
    assert.equal(nextChunk.includes("vercel.live"), false);
    assert.match(nextChunk, /void 0/);
    await assert.rejects(readFile(path.join(chunkDir, chunkName), "utf8"));
    const html = await readFile(path.join(htmlDir, "index.html"), "utf8");
    assert.equal(html.includes(chunkName), false);
    assert.match(html, new RegExp(nextName));
    assert.equal(await readFile(path.join(chunkDir, "other.js"), "utf8"), "window.other = true;");
    assert.equal(await readFile(path.join(chunkDir, "gated.js"), "utf8"), gated);
    assert.equal(staticFiles[0]!.pathname, `/_next/static/immutable/chunks/${nextName}`);
    assert.equal(staticFiles[0]!.immutableHash?.startsWith("csp"), true);
    assert.equal(staticFiles[0]!.immutableHash === "0c6saa3i-zv6m-full-hash", false);
    assert.equal(staticFiles[0]!.pathname.includes(staticFiles[0]!.immutableHash!.slice(0, 13)), true);
    const manifest = JSON.parse(await readFile(path.join(root, "immutable-static-hashes.json"), "utf8")) as Record<string, string>;
    assert.equal(manifest[`static/immutable/chunks/${nextName}`], staticFiles[0]!.immutableHash);
    assert.equal(Object.hasOwn(manifest, `static/immutable/chunks/${chunkName}`), false);
    await rm(root, { recursive: true, force: true });
  });

  it("fails closed when a prerendered inline script has no hash", () => {
    const policy = buildContentSecurityPolicy([sha256Source("var ready = true;")]);
    const missing = uncoveredInlineScripts("<script>var other = true;</script>", policy);
    assert.deepEqual(missing, [sha256Source("var other = true;")]);
  });
});
