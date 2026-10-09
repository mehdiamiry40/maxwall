import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
const origin = "https://maxwall.com.au";
const routes = [
  "/",
  "/services",
  "/about",
  "/areas",
  "/faq",
  "/how-we-work",
  "/privacy",
  "/projects/renovations",
  "/projects/new-builds",
  "/guides",
  "/guides/cement-vs-acrylic-render",
  "/guides/planning-your-project",
  "/services/cement-render",
  "/services/acrylic-render",
  "/services/hebel-aac-panels",
  "/services/foam-cladding",
  "/services/fibre-cement-cladding",
  "/services/render-repairs",
  "/services/painting",
];
const titles = new Set();
for (const route of routes) {
  const html = await readFile(
    `.next/server/app/${route === "/" ? "index" : route.slice(1)}.html`,
    "utf8",
  );
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(
    title && title.includes("Max Wall"),
    `${route}: branded title is missing`,
  );
  assert.ok(!titles.has(title), `${route}: title duplicates another page`);
  titles.add(title);
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) ?? []).length,
    1,
    `${route}: expected one visible h1`,
  );
  const canonical = html.match(
    /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/,
  )?.[1];
  assert.equal(
    canonical ? new URL(canonical).href : undefined,
    new URL(route, origin).href,
    `${route}: canonical URL is missing or incorrect`,
  );
  const ogUrl = html.match(
    /<meta[^>]+property="og:url"[^>]+content="([^"]+)"/,
  )?.[1];
  assert.equal(
    ogUrl ? new URL(ogUrl).href : undefined,
    new URL(route, origin).href,
    `${route}: sharing URL must identify this page`,
  );
  assert.ok(
    html.includes("tel:0401300331"),
    `${route}: correct contact link is missing`,
  );
  const blocks = [
    ...html.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ].map((match) => JSON.parse(match[1]));
  assert.ok(blocks.length > 0, `${route}: structured data is missing`);
}
const sitemap = await readFile(".next/server/app/sitemap.xml.body", "utf8");
for (const route of [...routes, "/contact"])
  assert.ok(
    sitemap.includes(new URL(route, origin).href),
    `${route}: missing from sitemap`,
  );
console.log(
  `Verified ${routes.length} static pages: unique titles, canonical/sharing URLs, h1s, contact links, JSON-LD and sitemap.`,
);
