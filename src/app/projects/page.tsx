import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  Check,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
  section,
  TextLink,
} from "@/components/ui";
import { projects } from "@/lib/content";
import { blurProps, images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

const exploreLabel: Record<string, string> = {
  renovations: "Cladding and insulation for renovations",
  "new-builds": "Cladding and insulation for new builds",
};

export const metadata = pageMetadata(
  "Renovation & New Build Projects Adelaide",
  "How Max Wall approaches the two kinds of job we do in Adelaide: renovating a home you live in, and cladding and insulating a new build from the plans.",
  "/projects",
);

const inlineLink = "font-semibold underline underline-offset-4";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Projects" }]}
          title="Renovation and new build projects in Adelaide"
          intro="The same team and the same systems, set up differently for a home you already live in and a home that is still a frame."
          image={images.areasBanner}
        />
        <section className={`bg-white ${section}`}>
          <div
            className={`${container} max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft`}
          >
            <h2 className="section-title text-bluestone">
              Two kinds of job, two ways of working
            </h2>
            <p>
              On a renovation, the house comes first. We start by checking
              what&apos;s already there, work around the people living in it
              and price the preparation an older home needs. On a new build,
              the plans come first. We price from the drawings and energy
              report, then fit in with the builder&apos;s schedule.
            </p>
            <p>
              The systems are the same on both:{" "}
              <Link
                href="/services/james-hardie-cladding"
                className={inlineLink}
              >
                James Hardie fibre cement cladding
              </Link>
              ,{" "}
              <Link href="/services/insulation" className={inlineLink}>
                CSR Bradford insulation
              </Link>
              , Hardie Gravis AAC panels, eaves and linings, and Dulux
              AcraStone microcement. Each page below explains how we scope,
              quote and sequence that kind of work.
            </p>
          </div>
        </section>
        <section className={`bg-white ${section}`}>
          <div className={`${container} grid gap-9 md:grid-cols-2`}>
            {projects.map((project) => (
              <div key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
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
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="border-t border-line bg-white py-16">
          <div
            className={`${container} grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center`}
          >
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                Somewhere in between?
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                An extension on an existing home, a granny flat or a
                knock-down rebuild can sit across both. The steps are the same
                either way: tell us about the job, we measure on site, and you
                get a fixed written quote before any work starts.
              </p>
            </div>
            <div className="md:justify-self-end">
              <TextLink href="/how-we-work">
                How we measure, quote and install
              </TextLink>
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
