import { pageMetadata } from "@/lib/seo";
import {
  Button,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
} from "@/components/ui";
import { images } from "@/lib/images";
import { areas } from "@/lib/site";

export const metadata = pageMetadata(
  "Adelaide Rendering, Cladding & Painting Areas",
  "Max Wall provides rendering, cladding and wall painting across Adelaide's northern, western, eastern and southern suburbs and the Hills.",
  "/areas",
);

export default function AreasPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Areas" }]}
          title="Render, cladding and painting across Adelaide"
          intro="Based in the north, working from Gawler to Seaford and up into the Hills."
          image={images.skyline}
        />

        <section className="bg-render py-16 sm:py-20 lg:py-24">
          <div className={`${container} grid gap-5 sm:grid-cols-2`}>
            {areas.map((a) => (
              <div
                key={a.name}
                id={a.id}
                className="surface-card scroll-mt-24 p-6 sm:p-8"
              >
                <h2 className="text-2xl font-bold">{a.name}</h2>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-ink-soft">
                  {a.suburbs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line bg-white py-16">
          <div
            className={`${container} grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center`}
          >
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                Don&apos;t see your suburb?
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                These are just some of the areas we cover. Anywhere in greater
                Adelaide, get in touch and we&apos;ll let you know.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button href="/contact" variant="dark">
                Ask us
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
