import type { NextConfig } from "next";

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

/**
 * Browser origins this site actually loads. Resend (api.resend.com) is server-side only.
 * - scripts: Next.js chunks and inline bootstrap/JSON-LD, plus Vercel Analytics
 *   (`/_vercel/insights/script.js`) and Speed Insights (`/_vercel/speed-insights/script.js`).
 *   Development, and Speed Insights with a DSN, also load https://va.vercel-scripts.com.
 * - styles: the compiled stylesheet, next/image fill styles, the reveal animation delay,
 *   and the noscript reveal fallback.
 * - images: local /images and /_next/image, plus data: blur placeholders.
 * - fonts: self-hosted Barlow from next/font.
 * - connect: same-origin RSC, the quote form, and /_vercel/insights and speed-insights.
 *   Speed Insights posts to https://vitals.vercel-insights.com when a DSN is set.
 * - frames: none. frame-ancestors 'none' matches X-Frame-Options: DENY.
 * upgrade-insecure-requests is omitted so local http://localhost still loads.
 */
function contentSecurityPolicy() {
  const isDev = process.env.NODE_ENV === "development";
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    "https://va.vercel-scripts.com",
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");
  const connectSrc = [
    "'self'",
    "https://vitals.vercel-insights.com",
    ...(isDev ? ["ws:", "wss:"] : []),
  ].join(" ");
  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src ${connectSrc}`,
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "worker-src 'self'",
    "manifest-src 'self'",
  ].join("; ");
}

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
          { key: "Content-Security-Policy", value: contentSecurityPolicy() },
        ],
      },
    ];
  },
};

export default nextConfig;
