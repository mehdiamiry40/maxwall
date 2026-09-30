import type { Metadata } from "next";
import { Button, Check, container, CtaSection, Eyebrow, Footer, Header, PageHero } from "@/components/ui";
import { images } from "@/lib/images";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "From first call to final clean-up: how Max Wall quotes, prepares and completes render and cladding jobs across Adelaide.",
  alternates: { canonical: "/how-we-work" },
};

const promises = [
  "Scope, price and timing in writing before we start",
  "Windows, paths and gardens covered and protected",
  "Tidy work areas every day and a full clean-up at the end",
  "A final walk-through together before we call it done",
];

export default function HowWeWorkPage() {
  return (
    <>
      <Header overlay />
      <main className="flex-1">
        <PageHero
          crumb={[{ label: "How we work" }]}
          title="Simple from first call to final coat"
          intro="Three clear steps, a fixed price and no surprises along the way."
          image={images.scaffold}
        >
          <Button href="/contact">Start with a free quote</Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <div className={container}>
            <ol className="divide-y divide-line border-y border-line">
              {steps.map((s, i) => (
                <li key={s.title} className="grid gap-4 py-10 md:grid-cols-[10rem_1fr] md:gap-12">
                  <p className="text-5xl font-bold tracking-tight text-ochre">0{i + 1}</p>
                  <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">{s.title}</h2>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-sandstone py-20">
          <div className={`${container} grid gap-10 md:grid-cols-[1fr_1.4fr]`}>
            <div>
              <Eyebrow>Our promise</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold leading-[1.1]">On every job</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex gap-3 border border-line bg-white p-5 leading-relaxed">
                  <Check /> {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaSection title="Let's get your job started" />
      </main>
      <Footer />
    </>
  );
}
