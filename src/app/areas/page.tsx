import { pageMetadata } from "@/lib/seo";
import {
  Button,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
} from "@/components/ui";
import { areaPages } from "@/lib/content";
import { images } from "@/lib/images";
import Link from "next/link";
import { areas, services } from "@/lib/site";

export const metadata = pageMetadata(
  "Cladding & Insulation Service Areas Adelaide",
  "Max Wall installs James Hardie cladding, Bradford insulation and AcraStone microcement across Adelaide's north, west, east, south and the Adelaide Hills.",
  "/areas",
);

const localFactors = [
  {
    title: "Coastal homes",
    body: "From Semaphore and Henley Beach down to Glenelg, Hallett Cove and Seaford, salt air and wind-driven rain are part of the brief. James Hardie sets requirements for fixings and accessories near the coast, and flashings and joints need extra care to keep water out of the frame.",
  },
  {
    title: "The Adelaide Hills",
    body: "Stirling, Aldgate, Mount Barker and the foothills are cooler and often bushfire-prone. That shifts the focus to ceiling and underfloor insulation, and to cladding and AAC systems that James Hardie lists for the Bushfire Attack Level assessed for the site.",
  },
  {
    title: "Older and character homes",
    body: "Villas, bungalows and cottages in the inner east and west, and Housing Trust-era homes across the north and west, often need roof-space insulation, careful re-cladding of rear additions and an eye for asbestos in pre-1990 materials. Some sit in heritage or character areas where street-facing changes need approval.",
  },
  {
    title: "New estates and infill",
    body: "Growth areas in the north and south, and subdivided blocks across the middle-ring suburbs, mean new homes and townhouses with mixed facades and boundary walls. We work to the builder's plans, energy report and any estate design guidelines.",
  },
];

export default function AreasPage() {
  const summaries = Object.fromEntries(
    areaPages.map((page) => [page.slug, page.summary]),
  );
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

        <section className="bg-white py-16 sm:py-20">
          <div className={`${container} max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft`}>
            <h2 className="section-title text-bluestone">
              One team across greater Adelaide
            </h2>
            <p>
              Max Wall is based in Adelaide&apos;s northern suburbs and works
              right across the metropolitan area, from Gawler in the north to
              Seaford in the south, west to the beaches and east into the
              Adelaide Hills. We install James Hardie cladding, Hardie Gravis AAC
              panels, eaves and linings, CSR Bradford insulation and Dulux
              AcraStone microcement, and we paint inside and out.
            </p>
            <p>
              Wherever you are, the process is the same. Send us a few photos
              and your suburb, we come out to measure and check the walls, roof
              space or tiles, and you get a fixed written quote before any work
              starts. Homeowners use us for re-clads, insulation upgrades and
              bathroom renovations, and builders use us for the building
              envelope on new homes, extensions and townhouses.
            </p>
            <p>
              Adelaide&apos;s housing changes a lot from one side of the city to
              the other, so each region below has its own page covering the
              homes we see there, the work they usually need and the local
              conditions we plan for.
            </p>
          </div>
        </section>

        <section className="bg-render py-16 sm:py-20 lg:py-24">
          <div className={`${container} grid gap-5 sm:grid-cols-2`}>
            {areas.map((a) => (
              <div
                key={a.name}
                id={a.id}
                className="surface-card flex scroll-mt-24 flex-col p-6 sm:p-8"
              >
                <h2 className="text-2xl font-bold">
                  <Link
                    href={`/areas/${a.slug}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {a.name}
                  </Link>
                </h2>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  {summaries[a.slug]}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-ink-soft">
                  {a.suburbs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <Link
                  href={`/areas/${a.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                >
                  Cladding &amp; insulation in the{" "}
                  {a.name.charAt(0).toLowerCase() + a.name.slice(1)}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className={container}>
            <h2 className="section-title max-w-2xl text-bluestone">
              What changes from one part of Adelaide to another
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              The products are the same everywhere, but the house, the site and
              the rules aren&apos;t. These are the local differences we plan
              for at the measure.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {localFactors.map((factor) => (
                <div key={factor.title} className="border-t-4 border-ochre pt-5">
                  <h3 className="text-xl font-semibold text-bluestone">
                    {factor.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {factor.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white py-16 sm:py-20">
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
                Adelaide, get in touch with your suburb and a short description
                of the job, and we&apos;ll let you know when we can come out to
                measure.
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
