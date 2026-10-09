import type { Metadata } from "next";
import { site } from "@/lib/site";

export const businessId = `${site.url}/#business`;
export const websiteId = `${site.url}/#website`;
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, site.url).href;
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Max Wall — Rendering, cladding and painting Adelaide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": businessId,
  name: site.name,
  legalName: site.legalName,
  url: `${site.url}/`,
  telephone: `+61${site.phone.replace(/\D/g, "").slice(1)}`,
  email: site.email,
  logo: `${site.url}/icon.svg`,
  taxID: site.abn,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "SA",
    addressCountry: "AU",
  },
  areaServed: { "@type": "City", name: "Adelaide" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
  ],
};
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: site.name,
  url: `${site.url}/`,
  inLanguage: "en-AU",
  publisher: { "@id": businessId },
};
export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: new URL(item.href, site.url).href,
      }),
    ),
  };
}
