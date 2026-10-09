import { contentPaths } from "@/lib/content";
import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/about",
    "/how-we-work",
    "/areas",
    "/faq",
    "/contact",
    "/privacy",
    ...contentPaths,
  ];
  return [
    ...pages.map((p) => ({
      url: new URL(p || "/", site.url).href,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p === "/privacy" ? 0.2 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
