import { guides, projects } from "@/lib/content";
import { images } from "@/lib/images";
import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

const absolute = (path: string) => new URL(path, site.url).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: {
    path: string;
    priority: number;
    image?: string;
    updated?: string;
  }[] = [
    { path: "/", priority: 1, image: images.homeHero.src },
    { path: "/services", priority: 0.9, image: images.servicesBanner.src },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.9,
      image: images.services[s.slug]?.src,
    })),
    ...projects.map((p) => ({
      path: `/projects/${p.slug}`,
      priority: 0.7,
      image: p.image.src,
    })),
    { path: "/guides", priority: 0.6 },
    ...guides.map((g) => ({
      path: `/guides/${g.slug}`,
      priority: 0.6,
      image: g.image.src,
      updated: g.updated,
    })),
    { path: "/about", priority: 0.6 },
    { path: "/how-we-work", priority: 0.5 },
    { path: "/areas", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
  ];
  return pages.map(({ path, priority, image, updated }) => ({
    url: absolute(path),
    lastModified: updated ? new Date(updated) : lastModified,
    changeFrequency: "monthly" as const,
    priority,
    ...(image ? { images: [absolute(image)] } : {}),
  }));
}
