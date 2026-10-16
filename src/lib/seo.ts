import type { Metadata } from "next";
import { areas, phoneIntl, services, site } from "@/lib/site";

export const businessId = `${site.url}/#business`;
export const websiteId = `${site.url}/#website`;

const ogImage = {
  url: `${site.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Max Wall: cladding, insulation and microcement in Adelaide",
};

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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": businessId,
  name: site.name,
  legalName: site.legalName,
  description:
    "Adelaide contractor installing James Hardie cladding, Hardie Gravis AAC panels, eaves and linings, CSR Bradford insulation and Dulux AcraStone microcement, plus interior and exterior painting.",
  url: `${site.url}/`,
  telephone: phoneIntl,
  email: site.email,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/opengraph-image`,
  taxID: site.abn,
  currenciesAccepted: "AUD",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "SA",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Adelaide" },
    { "@type": "AdministrativeArea", name: "Adelaide Hills" },
    ...areas.flatMap((area) =>
      area.suburbs.map((suburb) => ({
        "@type": "Place",
        name: `${suburb}, SA`,
      })),
    ),
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: phoneIntl,
    email: site.email,
    contactType: "sales",
    areaServed: "AU",
    availableLanguage: "en-AU",
  },
  knowsAbout: [
    "James Hardie fibre cement cladding",
    "Re-cladding",
    "AAC panel walls",
    "Eaves and soffit lining",
    "Home insulation",
    "Acoustic insulation",
    "Microcement",
    "Dulux AcraStone",
    "Interior and exterior painting",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cladding, insulation and microcement services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${site.url}/services/${service.slug}`,
      },
    })),
  },
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

/** Breadcrumb trail after "Home". The last item may omit its href (the current page). */
export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: new URL(item.href, site.url).href } : {}),
      }),
    ),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
