import { execFileSync } from "node:child_process";
import { areaPages, guides, projects } from "@/lib/content";
import { images } from "@/lib/images";
import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

const absolute = (path: string) => new URL(path, site.url).href;

const pageFiles: Record<string, string[]> = {
  "/": ["src/app/page.tsx", "src/lib/home.ts"],
  "/services": ["src/app/services/page.tsx"],
  "/projects": ["src/app/projects/page.tsx"],
  "/guides": ["src/app/guides/page.tsx"],
  "/about": ["src/app/about/page.tsx"],
  "/how-we-work": ["src/app/how-we-work/page.tsx"],
  "/areas": ["src/app/areas/page.tsx"],
  "/faq": ["src/app/faq/page.tsx"],
  "/contact": ["src/app/contact/page.tsx"],
  "/privacy": ["src/app/privacy/page.tsx"],
};

const gitDates = new Map<string, string | undefined>();

/** Commit time of a source file, when this checkout still has that history. */
function gitDate(file: string): string | undefined {
  if (gitDates.has(file)) return gitDates.get(file);
  let value: string | undefined;
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", file],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    value = out || undefined;
  } catch {
    value = undefined;
  }
  gitDates.set(file, value);
  return value;
}

function latestGitDate(files: string[]): string | undefined {
  let best: string | undefined;
  let bestTime = Number.NEGATIVE_INFINITY;
  for (const file of files) {
    const iso = gitDate(file);
    if (!iso) continue;
    const time = Date.parse(iso);
    if (!Number.isNaN(time) && time > bestTime) {
      bestTime = time;
      best = iso;
    }
  }
  return best;
}

function filesFor(path: string): string[] {
  if (pageFiles[path]) return pageFiles[path];
  if (path.startsWith("/services/")) {
    return ["src/lib/site.ts", "src/app/services/[slug]/page.tsx"];
  }
  if (path.startsWith("/projects/")) {
    return ["src/lib/content.ts", "src/app/projects/[slug]/page.tsx"];
  }
  if (path.startsWith("/areas/")) {
    return ["src/lib/content.ts", "src/app/areas/[region]/page.tsx"];
  }
  return [];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestGuideUpdate = guides.reduce<string | undefined>(
    (latest, guide) =>
      guide.updated && (!latest || guide.updated > latest)
        ? guide.updated
        : latest,
    undefined,
  );
  const pages: {
    path: string;
    priority: number;
    image?: string;
    /** Real content date (frontmatter). Git is the fallback. */
    updated?: string;
  }[] = [
    { path: "/", priority: 1, image: images.homeHero.src },
    { path: "/services", priority: 0.9, image: images.servicesBanner.src },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.9,
      image: images.services[s.slug]?.src,
    })),
    { path: "/projects", priority: 0.7, image: images.areasBanner.src },
    ...projects.map((p) => ({
      path: `/projects/${p.slug}`,
      priority: 0.7,
      image: p.image.src,
    })),
    { path: "/guides", priority: 0.6, updated: latestGuideUpdate },
    ...guides.map((g) => ({
      path: `/guides/${g.slug}`,
      priority: 0.6,
      image: g.image.src,
      updated: g.updated,
    })),
    { path: "/about", priority: 0.6 },
    { path: "/how-we-work", priority: 0.5 },
    { path: "/areas", priority: 0.7 },
    ...areaPages.map((a) => ({
      path: `/areas/${a.slug}`,
      priority: 0.7,
      image: a.image.src,
    })),
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
  ];
  return pages.map(({ path, priority, image, updated }) => {
    const lastModified = updated ?? latestGitDate(filesFor(path));
    return {
      url: absolute(path),
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "monthly" as const,
      priority,
      ...(image ? { images: [absolute(image)] } : {}),
    };
  });
}
