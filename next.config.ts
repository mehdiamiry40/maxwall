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
};

export default nextConfig;
