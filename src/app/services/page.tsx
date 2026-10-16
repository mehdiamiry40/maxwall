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
import { ServiceCatalogue } from "@/components/ServiceCatalogue";
import { FinishGuide } from "@/components/FinishGuide";
import { images } from "@/lib/images";

export const metadata = pageMetadata(
  "Cladding, Insulation & Microcement Services Adelaide",
  "James Hardie cladding, re-cladding, AAC panels, eaves, CSR Bradford insulation, Dulux AcraStone microcement and painting across Adelaide. Free quotes.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Services" }]}
          title="Cladding, insulation and microcement services"
          intro="New builds, re-clads, cold houses or a tired bathroom. One Adelaide team, using proven Australian systems."
          image={images.servicesBanner}
        />

        <section id="services" className="py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="From wall wrap to the final coat"
              title="The right system for every home."
              intro="Explore our cladding, insulation and interior finishing services. Each page covers the products, what's included and answers to common questions."
            />
            <ServiceCatalogue />
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
                Not sure which system suits your home?
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                We&apos;ll look at your home and the result you&apos;re after,
                then recommend the right system. Often it&apos;s a mix, like
                new cladding with wall insulation behind it.
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
