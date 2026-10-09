import { pageMetadata } from "@/lib/seo";
import {
  Button,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
  SectionHead,
} from "@/components/ui";
import { ServiceCatalogue } from "@/components/ServiceCatalogue";
import { FinishGuide } from "@/components/FinishGuide";
import { images } from "@/lib/images";

export const metadata = pageMetadata(
  "Render & Wall Cladding Services Adelaide",
  "Explore Max Wall's cement render, acrylic render, Hebel, foam cladding, fibre cement and repair services across Adelaide.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Services" }]}
          title="Render, cladding and everything in between"
          intro="New builds, extensions or a tired facade. If it's a wall, we can finish it."
          image={images.servicesBanner}
        />

        <section id="services" className="py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="From preparation to the final coat"
              title="The right system for every wall."
              intro="Explore our render, cladding and repair services. Each service includes the details, suitable wall types and answers to common questions."
            />
            <ServiceCatalogue />
          </div>
        </section>

        <FinishGuide />

        <section className="border-t border-line bg-white py-16">
          <div
            className={`${container} grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center`}
          >
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                Not sure which finish suits your home?
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                We&apos;ll look at your walls and the look you&apos;re after,
                then recommend the right system. Often it&apos;s a mix, like a
                rendered base with cladding above.
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
