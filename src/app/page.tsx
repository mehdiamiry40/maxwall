import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  BrandStrip,
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
import { areas, phoneHref, services, site, steps } from "@/lib/site";

export const metadata = pageMetadata(
  "Cladding & Insulation Adelaide: Supply & Install",
  "Max Wall supplies and installs James Hardie cladding and CSR Bradford insulation across Adelaide. Free on-site measure and fixed written quote.",
  "/",
);

const hero = images.homeHero;
const promises = [
  { icon: "cladding" as const, title: "Supply & install" },
  { icon: "quote" as const, title: "Fixed written quotes" },
  { icon: "location" as const, title: "Adelaide & the Hills" },
];
const processIcons = ["quote", "measure", "finish"] as const;
const inlineLink = "font-semibold underline underline-offset-4";

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
            fetchPriority="high"
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
                Cladding and insulation for Adelaide homes and new builds
              </span>{" "}
              <span className="hero-title block">
                <span className="text-ochre">Great walls.</span> Better homes.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
              Max Wall supplies and installs James Hardie cladding, CSR
              Bradford insulation and Dulux AcraStone microcement across
              Adelaide and the Hills. One team, a free on-site measure and a
              fixed written quote.
            </p>

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
        <BrandStrip />
        <section
          id="one-team"
          aria-labelledby="one-team-heading"
          className={`bg-white ${section}`}
        >
          <div
            className={`${container} grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16`}
          >
            <Reveal>
              <h2 id="one-team-heading" className="section-title text-bluestone">
                <span className="text-ochre">One team</span> for the cladding
                and the insulation behind it.
              </h2>
              <p className="mt-4 max-w-md text-lg text-bluestone">
                For homeowners and builders, from Gawler to Seaford and up into
                the Hills.
              </p>
            </Reveal>
            <div className="space-y-5 leading-relaxed text-bluestone">
              <p>
                A wall is a system. The wrap, the insulation inside the frame
                and the cladding over the top all decide how a home looks, how
                it handles the weather and how comfortable it is inside. Max
                Wall supplies and installs all three, so the layers are planned
                together and you&apos;re not juggling trades.
              </p>
              <p>
                On a new home or extension, that means{" "}
                <Link
                  href="/services/james-hardie-cladding"
                  className={inlineLink}
                >
                  James Hardie weatherboards, grooved boards and panels
                </Link>{" "}
                fixed over the specified wall wrap, with{" "}
                <Link href="/services/insulation" className={inlineLink}>
                  CSR Bradford insulation for ceilings, walls and floors
                </Link>{" "}
                fitted to the R-values in your plans. On an older home,{" "}
                <Link href="/services/re-cladding" className={inlineLink}>
                  re-cladding a tired facade
                </Link>{" "}
                opens up the frame, which is the easiest time to insulate the
                walls.
              </p>
              <p>
                Inside,{" "}
                <Link href="/services/microcement" className={inlineLink}>
                  Dulux AcraStone microcement
                </Link>{" "}
                gives bathrooms, walls and floors a seamless, grout-free
                finish, often straight over the existing tiles.
              </p>
              <p>
                Every job starts with a free on-site measure and a fixed
                written quote. See{" "}
                <Link href="/how-we-work" className={inlineLink}>
                  how we measure, quote and install
                </Link>
                , or read{" "}
                <Link
                  href="/guides/cladding-cost-adelaide"
                  className={inlineLink}
                >
                  what affects the cost of cladding
                </Link>{" "}
                before you compare prices.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className={`bg-white ${section}`}>
          <div className={container}>
            <SectionHead
              title="Cladding, insulation and finishing services"
              intro="Each service page covers the products we install, what's included and the questions we're asked most."
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
                    <span className="mt-2 block text-sm text-bluestone">
                      {idea.body}
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
        <section aria-labelledby="process-heading" className="bg-ochre text-white">
          <div className={`${container} py-10 sm:py-12`}>
            <h2 id="process-heading" className="sr-only">
              How a job runs
            </h2>
            <ol className="grid gap-8 sm:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="flex items-center gap-4">
                  <WallIcon
                    name={processIcons[index] ?? "finish"}
                    className="h-10 w-10 shrink-0 text-white"
                  />
                  <div>
                    <span className="text-xl font-bold">0{index + 1}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href="/how-we-work" variant="light">
                How we measure, quote and install <Arrow />
              </Button>
            </div>
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
                <span className="text-ochre">Let’s talk</span> about your home.
              </h2>
              <p className="mb-6 mt-3 text-bluestone">
                Tell us your suburb and what you have in mind. We&apos;ll come
                out for a free on-site measure and send a fixed written quote.
                No obligation.
              </p>
              <QuoteForm compact />
            </div>
          </div>
        </section>
        <AdviceSection />
        <HomeFaqSection />
        <section aria-labelledby="areas-heading" className="bg-white">
          <div className={`${container} pb-12`}>
            <div className="flex flex-wrap items-center justify-between gap-5">
              <h2
                id="areas-heading"
                className="text-xl font-semibold text-bluestone"
              >
                Across Adelaide &amp; the Hills
              </h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {areas.map((area) => (
                  <li key={area.id}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-bluestone underline underline-offset-4"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-bluestone">
              We work across the northern, western, eastern and southern
              suburbs and the Adelaide Hills.{" "}
              <Link
                href="/areas"
                className={`inline-flex min-h-11 items-center ${inlineLink}`}
              >
                See the suburbs we cover
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
