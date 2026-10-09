import { pageMetadata } from "@/lib/seo";
import {
  Button,
  Check,
  container,
  CtaSection,
  Eyebrow,
  Footer,
  Header,
  PageHero,
} from "@/components/ui";
import { images } from "@/lib/images";
import { steps } from "@/lib/site";

export const metadata = pageMetadata(
  "Our Rendering & Cladding Process",
  "See how Max Wall plans, measures, quotes, prepares and finishes Adelaide render and cladding projects.",
  "/how-we-work",
);

const promises = [
  "Scope, price and timing in writing before we start",
  "Windows, paths and gardens covered and protected",
  "Tidy work areas every day and a full clean-up at the end",
  "A final walk-through together before we call it done",
];

export default function HowWeWorkPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "How we work" }]}
          title="Simple from first call to final coat"
          intro="Three clear steps, a fixed price and no surprises along the way."
          image={images.scaffold}
        >
          <Button href="/contact">Start with a free quote</Button>
        </PageHero>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <ol className="grid gap-5 lg:grid-cols-3">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="surface-card flex flex-col gap-6 p-6 sm:p-8"
                >
                  <p className="font-display flex h-16 w-16 items-center justify-center  bg-sky-soft text-4xl font-bold text-sky-ink">
                    0{i + 1}
                  </p>
                  <div>
                    <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                      {s.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-sandstone py-16 sm:py-20 lg:py-24">
          <div className={`${container} grid gap-10 md:grid-cols-[1fr_1.4fr]`}>
            <div>
              <Eyebrow>Our promise</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] text-bluestone">
                On every job
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {promises.map((p) => (
                <li
                  key={p}
                  className="surface-card flex gap-3 p-5 leading-relaxed"
                >
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
