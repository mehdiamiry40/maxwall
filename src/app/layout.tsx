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
    default: "James Hardie Cladding & Insulation Adelaide | Max Wall",
    template: "%s | Max Wall",
  },
  description:
    "Adelaide installers of James Hardie cladding, CSR Bradford insulation and Dulux AcraStone microcement. Free on-site measure and fixed written quotes.",
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Set these in Vercel to verify the site in Google Search Console and Bing Webmaster Tools
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "AU-SA",
    "geo.placename": "Adelaide",
  },
  openGraph: {
    title: "James Hardie Cladding & Insulation Adelaide | Max Wall",
    description:
      "Adelaide installers of James Hardie cladding, CSR Bradford insulation and Dulux AcraStone microcement. Free fixed-price quotes.",
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
