import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { images, type Photo } from "@/lib/images";

type Project = {
  title: string;
  tag: string;
  description: string;
  image: Photo;
};

const projects: Project[] = [
  {
    title: "Render and Cladding Facade",
    tag: "New Build",
    description: "Smooth white render paired with grey cladding for a crisp, modern two-storey street front.",
    image: images.hero,
  },
  {
    title: "Weatherboard Cladding Refresh",
    tag: "Fibre Cement Cladding",
    description: "Fibre cement weatherboards with clean trims for a classic Hamptons-style finish.",
    image: images.services["fibre-cement-cladding"],
  },
  {
    title: "Contemporary Acrylic Render",
    tag: "Acrylic Render",
    description: "Flexible acrylic render over lightweight panels, finished square and crack-resistant.",
    image: images.services["acrylic-render"],
  },
  {
    title: "Rendered Extension",
    tag: "Foam Cladding & Render",
    description: "Foam cladding and texture coat to blend a new extension with the existing home.",
    image: images.services["foam-cladding"],
  },
];

export function Gallery() {
  return (
    <section id="projects" className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Render and Cladding Projects"
          description="Representative project-style photos to help plan your quote. Max Wall project photos will be added as the portfolio grows."
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 70}>
              <article className="group">
                <div className="relative aspect-[1.45] overflow-hidden bg-linen">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-sm font-medium text-ochre">{project.tag}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-bluestone">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink">{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex border border-ochre px-7 py-4 text-base font-semibold text-ochre transition hover:bg-ochre hover:text-white"
          >
            Request a free quote
          </Link>
        </div>
      </div>
    </section>
  );
}
