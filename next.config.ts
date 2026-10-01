import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home folder confuses root detection
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
  // The site is now a one-page home with service pages; keep the old URLs working.
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/how-we-work", destination: "/#about", permanent: true },
      { source: "/areas", destination: "/#contact", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
