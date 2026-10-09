import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { businessSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

// Barlow is self-hosted for readable type without browser font-provider requests.
const body = Barlow({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rendering, Cladding & Painting Adelaide | Max Wall",
    template: "%s | Max Wall",
  },
  description:
    "Render, wall cladding and interior or exterior painting across Adelaide. Free fixed-price quotes from Max Wall.",
  openGraph: {
    title: "Rendering, Cladding & Painting Adelaide | Max Wall",
    description:
      "Render, wall cladding and interior or exterior painting across Adelaide. Free fixed-price quotes.",
    url: site.url,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e25a4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]  focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {/* Without JavaScript, reveal-on-scroll content must still show */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;animation:none !important}`}</style>
        </noscript>
        <StructuredData value={businessSchema} />
        <StructuredData value={websiteSchema} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
