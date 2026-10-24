import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
  section,
} from "@/components/ui";
import { projects } from "@/lib/content";
import { blurProps, images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

const exploreLabel: Record<string, string> = {
  renovations: "Explore renovations",
  "new-builds": "Explore new builds",
};

export const metadata = pageMetadata(
  "Renovation & New Build Projects Adelaide",
  "Cladding, insulation and microcement for Adelaide renovations, and cladding, AAC panels and insulation for new builds.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Projects" }]}
          title="Renovations and new builds"
          intro="Facade upgrades, insulation and microcement for homes you already have, and cladding, AAC and insulation for new builds."
          image={images.areasBanner}
        />
        <section className={`bg-white ${section}`}>
          <div className={`${container} grid gap-9 md:grid-cols-2`}>
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image.src}
                    {...blurProps(project.image)}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width:768px)45vw,90vw"
                    className="object-cover transition-transform group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-5 flex items-start justify-between gap-4 text-2xl font-semibold text-bluestone">
                  {project.shortTitle}
                  <Arrow className="mt-2 h-5 w-5 shrink-0" />
                </h2>
                <p className="mt-3">{project.intro}</p>
                <span className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
                  {exploreLabel[project.slug] ?? project.shortTitle}
                </span>
              </Link>
            ))}
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
