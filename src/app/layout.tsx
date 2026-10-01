import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MobileCallBar } from "@/components/MobileCallBar";
import { phoneHref, services, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "render Adelaide",
    "rendering Adelaide",
    "cement render Adelaide",
    "acrylic render Adelaide",
    "cladding Adelaide",
    "Hebel Adelaide",
    "foam cladding Adelaide",
    "weatherboard cladding Adelaide",
    "render repairs Adelaide",
    "Max Wall",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  category: "business",
};

/** LocalBusiness structured data — helps Google show Max Wall in local search. */
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: phoneHref.replace("tel:", ""),
    email: site.email,
    logo: `${site.url}/icon.svg`,
    taxID: site.abn,
    areaServed: { "@type": "City", name: "Adelaide" },
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: "SA", addressCountry: "AU" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Max Wall services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, url: `${site.url}/services/${service.slug}` },
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-hidden bg-white text-ink">
        {/* Without JS, reveal-on-scroll elements should still be visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;animation:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <MobileCallBar />
        <StructuredData />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
