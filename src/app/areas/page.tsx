import type { Metadata } from "next";
import { container, CtaSection, Footer, Header, PageHero, Pill } from "@/components/ui";
import { images } from "@/lib/images";
import { areas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Service in Adelaide",
  description:
    "Max Wall provides render and cladding across Adelaide's northern, western, eastern and southern suburbs and the Adelaide Hills.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <Header overlay />
      <main className="flex-1">
        <PageHero
          eyebrow="Areas"
          title="Rendering and cladding right across Adelaide"
          intro="Based in the north, working from Gawler to Seaford and up into the Hills."
          image={images.skyline}
        />

        <section className="py-24">
          <div className={`${container} grid gap-x-12 gap-y-16 md:grid-cols-2`}>
            {areas.map((a) => (
              <div key={a.name}>
                <h2 className="font-display text-3xl">{a.name}</h2>
                <div className="my-6 h-px bg-ochre" />
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-ink-soft">
                  {a.suburbs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="texture bg-bluestone py-20 text-white">
          <div className={`${container} grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center`}>
            <div>
              <h2 className="font-display text-4xl leading-tight">Don&apos;t see your suburb?</h2>
              <p className="mt-4 max-w-lg leading-relaxed opacity-90">
                These are just some of the areas we cover. If you&apos;re anywhere in greater
                Adelaide, get in touch and we&apos;ll let you know.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Pill href="/contact" variant="white">
                Ask us
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
