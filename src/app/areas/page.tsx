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
import Link from "next/link";
import { areas, services } from "@/lib/site";

export const metadata = pageMetadata(
  "Service Areas: Cladding & Insulation Across Adelaide",
  "Max Wall installs James Hardie cladding, Bradford insulation and AcraStone microcement across Adelaide's north, west, east, south and the Adelaide Hills.",
  "/areas",
);

export default function AreasPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Areas" }]}
          title="Cladding, insulation and microcement across Adelaide"
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
                <p className="mt-2 text-sm text-ink-soft">
                  Cladding, insulation, microcement and painting in{" "}
                  {a.suburbs.slice(0, 3).join(", ")} and nearby suburbs.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-ink-soft">
                  {a.suburbs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className={container}>
            <h2 className="section-title text-bluestone">
              Services available in every area
            </h2>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                  >
                    {s.title} in Adelaide
                  </Link>
                </li>
              ))}
            </ul>
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
