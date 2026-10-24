import type { NextConfig } from "next";
import { join } from "node:path";
import { buildContentSecurityPolicy, buildDevContentSecurityPolicy } from "./src/lib/csp-policy";

// Old service and guide URLs from the render-focused site, kept so links and rankings carry over
const legacyRedirects: [string, string][] = [
  ["/services/cement-render", "/services/aac-panels"],
  ["/services/acrylic-render", "/services/aac-panels"],
  ["/services/hebel-aac-panels", "/services/aac-panels"],
  ["/services/foam-cladding", "/services/james-hardie-cladding"],
  ["/services/fibre-cement-cladding", "/services/james-hardie-cladding"],
  ["/services/render-repairs", "/services/re-cladding"],
  ["/guides/cement-vs-acrylic-render", "/guides/choosing-james-hardie-cladding"],
];

// Production script hashes are unknown until prerender finishes. The placeholder is
// replaced in the build output by scripts/csp-hashes.ts. On Vercel that is too late
// for the header the CDN serves: the Next adapter copies it into
// `.next/output/config.json` during onBuildComplete, while `next build` is still
// running. scripts/csp-adapter.mjs wraps that adapter and writes the hashes first.
// Development cannot use those hashes. style-src stays 'unsafe-inline' for the
// noscript reveal fallback, next/image layout, and the reveal delay attribute.
const contentSecurityPolicy =
  process.env.NODE_ENV === "development" ? buildDevContentSecurityPolicy() : buildContentSecurityPolicy([]);

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home folder confuses root detection
  turbopack: { root: __dirname },
  // Vercel sets NEXT_ADAPTER_PATH to its own adapter. Wrap it so the routing
  // object it serialises already contains the real script hashes.
  ...(process.env.NEXT_ADAPTER_PATH ? { adapterPath: join(process.cwd(), "scripts/csp-adapter.mjs") } : {}),
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
