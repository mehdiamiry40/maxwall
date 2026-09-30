import type { Metadata } from "next";
import { Button, container, CtaSection, Footer, Header, PageHero, ServiceCard } from "@/components/ui";
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
          crumb={[{ label: "Services" }]}
          title="Render, cladding and everything in between"
          intro="New builds, extensions or a tired facade. If it's a wall, we can finish it."
          image={images.servicesBanner}
        />

        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3`}>
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </section>

        <section className="border-t border-line bg-white py-16">
          <div className={`${container} grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center`}>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Not sure which finish suits your home?</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                We&apos;ll look at your walls and the look you&apos;re after, then recommend the right
                system. Often it&apos;s a mix, like a rendered base with cladding above.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button href="/contact" variant="dark">Ask for advice</Button>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
