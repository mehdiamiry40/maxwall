import type { Metadata } from "next";
import { container, CtaSection, Footer, Header, PageHero, Pill, ServiceCard } from "@/components/ui";
import { images } from "@/lib/images";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Render & Cladding Services Adelaide",
  description:
    "Cement render, acrylic render, Hebel and AAC panels, foam cladding, fibre cement cladding and render repairs across Adelaide.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header overlay />
      <main className="flex-1">
        <PageHero
          eyebrow="Services"
          title="Render, cladding and everything in between"
          intro="New builds, extensions or a tired old facade. If it's a wall, we can finish it."
          image={images.servicesBanner}
        >
          <Pill href="/contact">Get a Free Quote</Pill>
        </PageHero>

        <section className="py-24">
          <div className={`${container} grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3`}>
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </section>

        <section className="texture bg-bluestone py-20 text-white">
          <div className={`${container} grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center`}>
            <h2 className="font-display text-4xl leading-tight">Not sure which finish suits your home?</h2>
            <div>
              <p className="leading-relaxed opacity-90">
                Every wall is different. We&apos;ll look at the substrate, how much the
                structure moves and the look you&apos;re after, then recommend the right
                system. Often it&apos;s a mix, like a rendered base with cladding above.
              </p>
              <Pill href="/contact" variant="white" className="mt-8">
                Ask for advice
              </Pill>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
