import { pageMetadata } from "@/lib/seo";
import {
  BrandStrip,
  Button,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
  SectionHead,
} from "@/components/ui";
import Link from "next/link";
import { ServiceCatalogue } from "@/components/ServiceCatalogue";
import { FinishGuide } from "@/components/FinishGuide";
import { images } from "@/lib/images";

export const metadata = pageMetadata(
  "Cladding, Insulation & Microcement Adelaide",
  "One Adelaide team for James Hardie cladding, facade recladding, AAC panels, eaves, insulation, microcement and painting. Free measure, fixed written quote.",
  "/services",
);

const textLink = "font-semibold text-bluestone underline underline-offset-4";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Services" }]}
          title="Cladding, insulation and microcement services in Adelaide"
          intro="Seven services from one Adelaide team, for new builds, tired facades, hot or cold houses and dated bathrooms. Every job starts with a free on-site measure and a fixed written quote."
          image={images.servicesBanner}
        />

        <section id="services" className="py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="From wall wrap to the final coat"
              title="Seven services, one team"
              intro="Each page sets out the products we install, what is included, who it suits and answers to common questions. Filter by cladding, insulation or interiors."
            />
            <ServiceCatalogue />
          </div>
        </section>

        <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="Where to start"
              title="Find the right service for your project"
              intro="Most jobs combine two or three of these. Start with the situation that sounds most like yours."
            />
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              <div className="border-t border-line pt-6">
                <h3 className="text-xl font-bold">Building new or extending</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  On new homes, extensions and upper storeys we install{" "}
                  <Link
                    href="/services/james-hardie-cladding"
                    className={textLink}
                  >
                    James Hardie cladding
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/aac-panels" className={textLink}>
                    Hardie Gravis AAC panel walls
                  </Link>
                  , and line the{" "}
                  <Link href="/services/eaves-linings" className={textLink}>
                    eaves, soffits and alfresco ceilings
                  </Link>
                  . Wall wrap and insulation go in before the walls are
                  closed. Still choosing boards? Our guide{" "}
                  <Link
                    href="/guides/choosing-james-hardie-cladding"
                    className={textLink}
                  >
                    compares Linea, Axon and Stria
                  </Link>
                  .
                </p>
              </div>
              <div className="border-t border-line pt-6">
                <h3 className="text-xl font-bold">
                  Updating an existing house
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  <Link href="/services/re-cladding" className={textLink}>
                    Facade recladding
                  </Link>{" "}
                  replaces tired or damaged cladding with a new James Hardie
                  facade, and is the easiest time to insulate the walls.{" "}
                  <Link href="/services/painting" className={textLink}>
                    Exterior and interior painting
                  </Link>{" "}
                  finishes the job, or refreshes a home on its own. For
                  budgeting, read{" "}
                  <Link
                    href="/guides/cladding-cost-adelaide"
                    className={textLink}
                  >
                    what affects the cost of cladding in Adelaide
                  </Link>
                  .
                </p>
              </div>
              <div className="border-t border-line pt-6">
                <h3 className="text-xl font-bold">
                  A hot, cold or noisy home
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  <Link href="/services/insulation" className={textLink}>
                    CSR Bradford insulation
                  </Link>{" "}
                  in the ceiling, walls and under the floor helps rooms stay
                  cooler in summer, warmer in winter and quieter all year. Our
                  guide explains{" "}
                  <Link
                    href="/guides/insulation-for-adelaide-homes"
                    className={textLink}
                  >
                    where to start when insulating an Adelaide home
                  </Link>
                  .
                </p>
              </div>
              <div className="border-t border-line pt-6">
                <h3 className="text-xl font-bold">
                  Bathrooms, floors and feature walls
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  <Link href="/services/microcement" className={textLink}>
                    Dulux AcraStone microcement
                  </Link>{" "}
                  gives walls and floors a seamless, grout-free finish and can
                  often go over sound existing tiles. See our guide to{" "}
                  <Link
                    href="/guides/microcement-bathroom-renovation"
                    className={textLink}
                  >
                    renovating a bathroom with microcement over tiles
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <BrandStrip />

        <FinishGuide />

        <section className="border-t border-line bg-white py-16">
          <div
            className={`${container} grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center`}
          >
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                Not sure which service suits your home?
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                We&apos;ll look at your home and the result you&apos;re after,
                then recommend the right system. Often it&apos;s a mix, like
                new cladding with wall insulation behind it. See{" "}
                <Link href="/how-we-work" className={textLink}>
                  how we measure, quote and install
                </Link>
                , or check{" "}
                <Link href="/areas" className={textLink}>
                  the Adelaide suburbs we cover
                </Link>
                .
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button href="/contact" variant="dark">
                Ask for advice
              </Button>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
