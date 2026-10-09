import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  Button,
  container,
  Footer,
  Header,
  PhoneIcon,
  Reveal,
  section,
  SectionHead,
} from "@/components/ui";
import { WallIcon } from "@/components/brand";
import {
  CraftsmanshipSection,
  HomeFaqSection,
  ProjectTypesSection,
  FinishSelectionSection,
  AdviceSection,
  PaintingSection,
} from "@/components/HomeSections";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { blurProps, images } from "@/lib/images";
import { projectIdeas } from "@/lib/home";
import { areas, phoneHref, services, site } from "@/lib/site";

export const metadata = pageMetadata(
  "Rendering, Cladding & Painting Adelaide",
  "Render, cladding and interior or exterior painting for Adelaide homes, renovations and new builds. Free on-site measures and fixed written quotes from Max Wall.",
  "/",
);

const hero = images.homeHero;
const promises = [
  { icon: "wall" as const, title: "Render, clad & paint" },
  { icon: "quote" as const, title: "Fixed written quotes" },
  { icon: "location" as const, title: "Adelaide & the Hills" },
];
const process = [
  { icon: "quote" as const, title: "Tell us about your walls" },
  { icon: "measure" as const, title: "Get a fixed quote" },
  { icon: "finish" as const, title: "Enjoy the finish" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-white sm:aspect-[16/7] lg:aspect-[16/7]">
          <Image
            src={hero.src}
            {...blurProps(hero)}
            alt={hero.alt}
            fill
            preload
            sizes="100vw"
            className="object-cover object-[50%_25%]"
          />
          <a
            href={hero.source}
            className="absolute bottom-3 right-4 bg-white px-2 py-1 text-xs text-bluestone underline underline-offset-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            Stock photo · {hero.credit}
          </a>
        </div>
        <section className="bg-white text-center text-bluestone">
          <div className={`${container} py-10 sm:py-12`}>
            <h1>
              <span className="mb-3 block text-base font-semibold">
                Render, cladding &amp; painting in Adelaide
              </span>
              <span className="hero-title block">
                <span className="text-ochre">Great walls.</span> Better homes.
              </span>
            </h1>

            <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
              {promises.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col items-center gap-2 sm:gap-3"
                >
                  <WallIcon
                    name={item.icon}
                    className="h-7 w-7 text-ochre sm:h-9 sm:w-9"
                  />
                  <span className="text-sm font-semibold">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="#quote">
                Get a free quote <Arrow />
              </Button>
              <Button href={phoneHref} variant="outline">
                <PhoneIcon /> {site.phone}
              </Button>
            </div>
          </div>
        </section>
        <section id="services" className={`bg-white ${section}`}>
          <div className={container}>
            <SectionHead
              title="Our services"
              accent
              action={{ href: "/services", label: "Explore all services" }}
            />
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((service) => service.slug !== "painting")
                .map((service, index) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </section>
        <PaintingSection />
        <FinishSelectionSection />
        <ProjectTypesSection />
        <section id="inspiration" className={`bg-white ${section}`}>
          <div className={container}>
            <SectionHead
              title="A finish for every home"
              accent
              action={{ href: "/about", label: "About Max Wall" }}
            />
            <div className="grid gap-5 md:grid-cols-3">
              {projectIdeas.map((idea, index) => (
                <Reveal key={idea.label} delay={index * 70}>
                  <Link href={idea.href} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-white">
                      <Image
                        src={idea.image.src}
                        {...blurProps(idea.image)}
                        alt={idea.image.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="mt-4 flex items-center justify-between text-lg font-semibold text-bluestone">
                      {idea.label}
                      <Arrow />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-xs text-bluestone">
              Inspiration photography, not completed Max Wall projects.
            </p>
          </div>
        </section>
        <CraftsmanshipSection />
        <section className="bg-ochre text-white">
          <div
            className={`${container} grid gap-8 py-10 sm:grid-cols-3 sm:py-12`}
          >
            {process.map((item, index) => (
              <div key={item.title} className="flex items-center gap-4">
                <WallIcon name={item.icon} className="h-10 w-10 text-white" />
                <div>
                  <span className="text-xl font-bold">0{index + 1}</span>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={`bg-white ${section}`}>
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:gap-14`}>
            <div className="relative min-h-72 lg:min-h-[460px]">
              <Image
                src={images.about.src}
                {...blurProps(images.about)}
                alt={images.about.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-[28%_50%]"
              />
            </div>
            <div id="quote" className="scroll-mt-32">
              <h2 className="section-title text-bluestone">
                <span className="text-ochre">Let’s talk</span> about your walls.
              </h2>
              <p className="mb-6 mt-3 text-bluestone">
                Free measure. Fixed written price. No obligation.
              </p>
              <QuoteForm compact />
            </div>
          </div>
        </section>
        <AdviceSection />
        <HomeFaqSection />
        <section className="bg-white">
          <div
            className={`${container} flex flex-wrap items-center justify-between gap-5 pb-12`}
          >
            <h2 className="text-xl font-semibold text-bluestone">
              All of Adelaide &amp; the Hills
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {areas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/areas#${area.id}`}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-bluestone underline underline-offset-4"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
