import { createHash } from "node:crypto";
import { readdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  CSP_HASH_PLACEHOLDER,
  assertProductionScriptSrc,
  buildContentSecurityPolicy,
  missingScriptHashes,
} from "./csp-policy";
import { hasUnconditionalPreviewToolbar, requiredScriptHashes, stripPreviewToolbar } from "./csp-inline";

const SKIP_DIRS = new Set(["cache", "dev", "node_modules"]);

export type HashCollection = {
  files: { file: string; hashes: string[] }[];
  hashList: string[];
  policy: string;
};

async function walk(dir: string, visit: (file: string) => Promise<void>): Promise<void> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return;
    throw err;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, visit);
    else if (entry.isFile()) await visit(full);
  }
}

export async function collectInlineHashes(distDir: string): Promise<HashCollection> {
  const serverDir = path.join(distDir, "server");
  const html: string[] = [];
  await walk(serverDir, async (file) => {
    if (file.endsWith(".html")) html.push(file);
  });
  html.sort();
  if (html.length === 0) {
    throw new Error(`no prerendered HTML under ${serverDir}`);
  }

  const required = new Set<string>();
  const files: { file: string; hashes: string[] }[] = [];
  for (const file of html) {
    const body = await readFile(file, "utf8");
    const hashes = requiredScriptHashes(body);
    if (hashes.length === 0) throw new Error(`${file} has no executable inline script to hash`);
    files.push({ file, hashes });
    for (const hash of hashes) required.add(hash);
  }

  const hashList = [...required].sort();
  const policy = buildContentSecurityPolicy(hashList);
  assertProductionScriptSrc(policy);
  if (policy.includes(CSP_HASH_PLACEHOLDER)) {
    throw new Error("built policy still contains the placeholder");
  }
  return { files, hashList, policy };
}

/** Replace the placeholder in place. Returns true when a string changed. */
export function replacePlaceholder(value: unknown, hashList: string): boolean {
  const replacement = hashList;
  let changed = false;
  const visit = (current: unknown): unknown => {
    if (typeof current === "string") {
      if (!current.includes(CSP_HASH_PLACEHOLDER)) return current;
      changed = true;
      return current.split(CSP_HASH_PLACEHOLDER).join(replacement);
    }
    if (Array.isArray(current)) {
      for (let index = 0; index < current.length; index += 1) current[index] = visit(current[index]);
      return current;
    }
    if (current && typeof current === "object") {
      const record = current as Record<string, unknown>;
      for (const key of Object.keys(record)) record[key] = visit(record[key]);
    }
    return current;
  };
  visit(value);
  return changed;
}

export function policiesIn(value: unknown, found: string[] = []): string[] {
  if (typeof value === "string") {
    if (value.includes("script-src ") && value.includes("default-src ")) found.push(value);
    return found;
  }
  if (Array.isArray(value)) {
    for (const item of value) policiesIn(item, found);
    return found;
  }
  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (key.toLowerCase() === "content-security-policy" && typeof item === "string") found.push(item);
      else policiesIn(item, found);
    }
  }
  return found;
}

function isSitePolicy(value: string): boolean {
  return value.includes("default-src 'self'") && value.includes("script-src ") && value.includes("frame-ancestors ");
}

/** Overwrite every copy of this site's CSP. Returns how many strings changed. */
export function rewriteSitePolicies(value: unknown, policy: string): number {
  let rewritten = 0;
  const visit = (current: unknown): unknown => {
    if (typeof current === "string") {
      if (!isSitePolicy(current) || current === policy) return current;
      rewritten += 1;
      return policy;
    }
    if (Array.isArray(current)) {
      for (let index = 0; index < current.length; index += 1) current[index] = visit(current[index]);
      return current;
    }
    if (current && typeof current === "object") {
      const record = current as Record<string, unknown>;
      for (const key of Object.keys(record)) record[key] = visit(record[key]);
    }
    return current;
  };
  visit(value);
  return rewritten;
}

export function deploymentConfigPaths(projectRoot: string, distDir: string): string[] {
  return [
    path.join(distDir, "output", "config.json"),
    path.join(projectRoot, ".vercel", "output", "config.json"),
    "/vercel/output/config.json",
  ];
}

async function patchFiles(distDir: string, hashList: string): Promise<string[]> {
  const placeholder = Buffer.from(CSP_HASH_PLACEHOLDER);
  const patched: string[] = [];
  await walk(distDir, async (file) => {
    const body = await readFile(file);
    if (!body.includes(placeholder)) return;
    const next = Buffer.from(body.toString("utf8").split(CSP_HASH_PLACEHOLDER).join(hashList));
    if (next.includes(placeholder)) throw new Error(`placeholder survived replacement in ${file}`);
    await writeFile(file, next);
    patched.push(file);
  });
  return patched;
}

const REFERENCE_EXTENSIONS = new Set([".js", ".html", ".json", ".css", ".txt", ".rsc"]);

export type StaticFileOutput = {
  id: string;
  filePath: string;
  pathname: string;
  immutableHash?: string;
};

function clientAsset(file: string): boolean {
  return file.includes(`${path.sep}static${path.sep}`);
}

function chunkIdentity(seed: string, content: string): { filename: string; immutableHash: string } {
  const immutableHash = `csp${createHash("sha256").update(seed).update("\0").update(content).digest("hex")}`;
  return { immutableHash, filename: `${immutableHash.slice(0, 16)}.js` };
}

/**
 * Preview builds inject a script that loads vercel.live on every page. Turbopack
 * content-hashes that chunk, and Vercel stores immutable assets in a namespace
 * shared by every deployment. Rewriting the bytes in place leaves the first
 * (unstripped) upload at that URL. Rename the chunk, point the pages at the new
 * name, and give the adapter a hash it has never uploaded.
 *
 * Cookie-gated toolbar code is left as-is. Server files are stripped in place:
 * the browser never requests them.
 */
export async function retargetUnconditionalToolbarChunks(
  root: string,
  staticFiles?: StaticFileOutput[],
): Promise<string[]> {
  const renamed: { file: string; content: string; from: string; to: string; immutableHash: string }[] = [];
  const seen = new Set<string>();

  const claim = (file: string, content: string) => {
    if (seen.has(file)) return;
    seen.add(file);
    const identity = chunkIdentity(path.basename(file), content);
    renamed.push({
      file,
      content,
      from: path.basename(file),
      to: identity.filename,
      immutableHash: identity.immutableHash,
    });
  };

  await walk(root, async (file) => {
    if (!file.endsWith(".js") && !file.endsWith(".html")) return;
    const body = await readFile(file, "utf8");
    if (!hasUnconditionalPreviewToolbar(body)) return;
    const stripped = stripPreviewToolbar(body);
    if (stripped === body) return;
    if (clientAsset(file) && file.endsWith(".js")) claim(file, stripped);
    else await writeFile(file, stripped);
  });

  // A client chunk that names a renamed file has to move too. Otherwise the
  // shared immutable URL keeps serving the copy that still points at vercel.live.
  for (let pass = 0; pass < 5 && renamed.length > 0; pass += 1) {
    const found: { file: string; content: string }[] = [];
    await walk(root, async (file) => {
      if (!file.endsWith(".js") || !clientAsset(file) || seen.has(file)) return;
      const body = await readFile(file, "utf8");
      if (!renamed.some((item) => body.includes(item.from))) return;
      let content = body;
      for (const item of renamed) content = content.split(item.from).join(item.to);
      found.push({ file, content });
    });
    if (found.length === 0) break;
    for (const item of found) claim(item.file, item.content);
  }

  if (renamed.length === 0) return [];

  for (const item of renamed) {
    if (item.content.includes(item.from)) {
      throw new Error(`${item.file} still names ${item.from} after the toolbar rewrite`);
    }
    const nextPath = path.join(path.dirname(item.file), item.to);
    await writeFile(nextPath, item.content);
    await unlink(item.file);
  }

  await walk(root, async (file) => {
    if (path.basename(file) === "immutable-static-hashes.json") return;
    if (renamed.some((item) => file.endsWith(item.to))) return;
    if (!REFERENCE_EXTENSIONS.has(path.extname(file))) return;
    const body = await readFile(file, "utf8");
    let next = body;
    for (const item of renamed) next = next.split(item.from).join(item.to);
    if (next === body) return;
    if (file.endsWith(".js") && clientAsset(file)) {
      throw new Error(`${file} references a retargeted toolbar chunk but was not renamed`);
    }
    await writeFile(file, next);
  });

  if (staticFiles) {
    for (const output of staticFiles) {
      for (const item of renamed) {
        if (!output.pathname.includes(item.from) && !output.filePath.endsWith(item.from) && !output.id.endsWith(item.from)) {
          continue;
        }
        output.pathname = output.pathname.split(item.from).join(item.to);
        output.filePath = output.filePath.split(item.from).join(item.to);
        output.id = output.id.split(item.from).join(item.to);
        output.immutableHash = item.immutableHash;
      }
    }
  }

  const manifestPath = path.join(root, "immutable-static-hashes.json");
  try {
    const manifest = JSON.parse(await readFile(manifestPath, "utf8")) as Record<string, string>;
    let changed = false;
    const nextManifest: Record<string, string> = {};
    for (const [key, value] of Object.entries(manifest)) {
      let nextKey = key;
      let nextValue = value;
      for (const item of renamed) {
        if (!nextKey.endsWith(item.from)) continue;
        nextKey = nextKey.split(item.from).join(item.to);
        nextValue = item.immutableHash;
        changed = true;
      }
      nextManifest[nextKey] = nextValue;
    }
    if (changed) await writeFile(manifestPath, JSON.stringify(nextManifest));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
  }

  return renamed.map((item) => item.to);
}

/** Remove the unconditional preview injector. Cookie-gated toolbar code is left in place. */
export async function stripUnconditionalPreviewToolbar(root: string): Promise<string[]> {
  return retargetUnconditionalToolbarChunks(root);
}

export async function publishInlineScriptHashes(options: {
  distDir: string;
  routing?: unknown;
}): Promise<HashCollection & { patchedFiles: string[] }> {
  const collected = await collectInlineHashes(options.distDir);
  const hashList = collected.hashList.join(" ");

  if (options.routing) {
    const before = JSON.stringify(options.routing);
    if (!before.includes("script-src ")) throw new Error("Deployment routing has no script-src policy to publish");
    if (before.includes(CSP_HASH_PLACEHOLDER)) replacePlaceholder(options.routing, hashList);
    if (JSON.stringify(options.routing).includes(CSP_HASH_PLACEHOLDER)) {
      throw new Error("CSP placeholder is still in the deployment routing");
    }
  }

  const patchedFiles = await patchFiles(options.distDir, hashList);
  const manifestPath = path.join(options.distDir, "routes-manifest.json");
  const manifest = await readFile(manifestPath, "utf8");
  if (manifest.includes(CSP_HASH_PLACEHOLDER)) {
    throw new Error(`CSP placeholder is still in ${manifestPath}`);
  }
  const policies = policiesIn(JSON.parse(manifest));
  if (policies.length === 0) throw new Error(`${manifestPath} does not contain a Content-Security-Policy`);
  for (const policy of policies) assertHashes(policy, collected.hashList, manifestPath);

  if (options.routing) {
    const policiesInRouting = policiesIn(options.routing);
    if (policiesInRouting.length === 0) throw new Error("Deployment routing lost its script-src policy");
    for (const policy of policiesInRouting) assertHashes(policy, collected.hashList, "deployment routing");
  }

  return { ...collected, patchedFiles };
}

function assertHashes(policy: string, hashList: string[], label: string): void {
  try {
    assertProductionScriptSrc(policy);
  } catch (err) {
    throw new Error(`${label}: ${err instanceof Error ? err.message : String(err)}`);
  }
  const missing = missingScriptHashes(policy, hashList);
  if (missing.length) throw new Error(`${label} is missing ${missing.length} inline-script hash(es), first ${missing[0]}`);
}

/**
 * Vercel serialises the routing object into `.next/output/config.json` during
 * onBuildComplete. Rewrite that policy from the routes manifest and refuse to
 * finish when the placeholder or a missing hash would be what production serves.
 */
export async function assertDeploymentOutput(options: {
  projectRoot: string;
  distDir: string;
  routing?: unknown;
  requireDeploymentOutput: boolean;
}): Promise<{ configs: string[] }> {
  const collected = await collectInlineHashes(options.distDir);
  const manifestPath = path.join(options.distDir, "routes-manifest.json");
  const manifestText = await readFile(manifestPath, "utf8");
  if (manifestText.includes(CSP_HASH_PLACEHOLDER)) {
    throw new Error(`CSP placeholder is still in ${manifestPath}`);
  }
  const manifestPolicies = policiesIn(JSON.parse(manifestText)).filter((policy) => policy.includes("frame-ancestors "));
  if (manifestPolicies.length === 0) throw new Error(`Content-Security-Policy is missing from ${manifestPath}`);
  const policy = manifestPolicies[0]!;
  for (const published of manifestPolicies) assertHashes(published, collected.hashList, manifestPath);

  if (options.routing) {
    if (JSON.stringify(options.routing).includes(CSP_HASH_PLACEHOLDER)) {
      throw new Error("CSP placeholder is still in the deployment routing");
    }
    for (const published of policiesIn(options.routing)) assertHashes(published, collected.hashList, "deployment routing");
  }

  const configs: string[] = [];
  for (const file of deploymentConfigPaths(options.projectRoot, options.distDir)) {
    try {
      await readFile(file, "utf8");
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") continue;
      throw err;
    }
    configs.push(file);
  }

  if (options.requireDeploymentOutput && configs.length === 0) {
    throw new Error(
      `Vercel adapter did not write a deployment config. Looked for ${deploymentConfigPaths(options.projectRoot, options.distDir).join(", ")}.`,
    );
  }

  for (const file of configs) {
    const data = JSON.parse(await readFile(file, "utf8")) as unknown;
    rewriteSitePolicies(data, policy);
    const serialised = JSON.stringify(data);
    if (serialised.includes(CSP_HASH_PLACEHOLDER)) {
      throw new Error(`CSP placeholder is still in ${file}`);
    }
    await writeFile(file, serialised);
    const policies = policiesIn(JSON.parse(serialised)).filter((published) => published.includes("frame-ancestors "));
    if (policies.length === 0) throw new Error(`Content-Security-Policy is missing from ${file}`);
    for (const published of policies) assertHashes(published, collected.hashList, file);
  }

  for (const { file, hashes } of collected.files) {
    for (const published of manifestPolicies) {
      const missing = missingScriptHashes(published, hashes);
      if (missing.length) throw new Error(`${file} hash ${missing[0]} is not in ${manifestPath}`);
    }
  }

  return { configs };
}
