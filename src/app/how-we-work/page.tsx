import type { Metadata } from "next";
import { container, CtaSection, Footer, Header, PageHero, Pill } from "@/components/ui";
import { images } from "@/lib/images";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "From first call to final clean-up: how Max Wall quotes, prepares and completes render and cladding jobs across Adelaide.",
  alternates: { canonical: "/how-we-work" },
};

const promises = [
  { title: "Written quote", body: "Scope, price and timing in writing before we start." },
  { title: "Site protection", body: "Windows, paths and gardens covered and protected." },
  { title: "Clean site", body: "Tidy work areas every day and a full clean-up at the end." },
  { title: "Final walk-through", body: "We check the finish together before we call it done." },
];

export default function HowWeWorkPage() {
  return (
    <>
      <Header overlay />
      <main className="flex-1">
        <PageHero
          eyebrow="How we work"
          title="Simple from first call to final coat"
          intro="Three clear steps, a fixed price and no surprises along the way."
          image={images.scaffold}
        >
          <Pill href="/contact">Start with a free quote</Pill>
        </PageHero>

        <section className="py-24">
          <div className={container}>
            <ol className="space-y-20">
              {steps.map((s, i) => (
                <li key={s.title} className="grid gap-6 md:grid-cols-[0.8fr_2fr] md:gap-12">
                  <div>
                    <p className="font-display text-7xl leading-none text-ochre/80">{i + 1}</p>
                  </div>
                  <div>
                    <div className="mb-6 h-px bg-ink/30" />
                    <h2 className="font-display text-3xl sm:text-4xl">{s.title}</h2>
                    <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-sandstone pb-24 pt-4">
          <div className="texture mx-auto max-w-6xl bg-bluestone px-5 py-16 text-white sm:px-16 sm:py-20">
            <h2 className="font-display text-3xl sm:text-4xl">On every job</h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {promises.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <div className="my-5 h-px bg-ochre" />
                  <p className="leading-relaxed opacity-90">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection title="Let's get your job started" />
      </main>
      <Footer />
    </>
  );
}
