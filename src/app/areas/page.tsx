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
  "Service Areas in Adelaide & the Adelaide Hills",
  "Where Max Wall works: the northern, western, eastern and southern suburbs of Adelaide and the Adelaide Hills. Find your region and its suburbs.",
  "/areas",
);

const localFactors = [
  {
    title: "Salt air on the coast",
    body: "From Semaphore and Henley Beach down to Glenelg, Hallett Cove and Seaford, exterior work has to allow for salt air and wind-driven rain. James Hardie sets requirements for fixings and accessories near the coast, and flashings and joints need extra care to keep water out of the frame.",
    links: [
      { href: "/areas/west", label: "Coastal homes in the western suburbs" },
      { href: "/areas/south", label: "The southern coastline" },
    ],
  },
  {
    title: "Cold winters and bushfire ratings in the Hills",
    body: "Stirling, Aldgate, Mount Barker and the foothills are cooler and often bushfire-prone. That puts ceiling and underfloor insulation first, and it limits walls to the cladding and AAC systems James Hardie lists for the Bushfire Attack Level assessed for the site.",
    links: [
      { href: "/areas/east-hills", label: "Stirling, Aldgate and Mount Barker" },
      { href: "/areas/south", label: "Foothills around Happy Valley" },
    ],
  },
  {
    title: "Older and character homes",
    body: "Villas, bungalows and cottages in the inner east and west, and Housing Trust-era homes across the north and west, often need roof-space insulation, careful re-cladding of rear additions and a check for asbestos in pre-1990 materials. Some sit in heritage or character areas where street-facing changes need approval.",
    links: [
      { href: "/areas/east-hills", label: "Character homes in Norwood and Burnside" },
      { href: "/areas/west", label: "Cottages in Semaphore and Port Adelaide" },
      { href: "/areas/north", label: "Housing Trust-era homes in the north" },
    ],
  },
  {
    title: "New estates and infill",
    body: "Growth areas in the north and south, and subdivided blocks across the middle-ring suburbs, mean new homes and townhouses with mixed facades and boundary walls. We work to the builder's plans, energy report and any estate design guidelines.",
    links: [
      { href: "/areas/north", label: "Estates around Mawson Lakes and Gawler" },
      { href: "/areas/west", label: "Townhouses in Woodville and Seaton" },
      { href: "/areas/south", label: "Newer estates around Seaford" },
    ],
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
          title="Max Wall service areas across Adelaide and the Hills"
          intro="Four regions, from Gawler in the north to Seaford in the south and up to Mount Barker. Choose yours for the suburbs we cover and what we plan for there."
          image={images.skyline}
        />

        <section className="bg-white py-16 sm:py-20">
          <div className={`${container} max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft`}>
            <h2 className="section-title text-bluestone">
              Find your part of Adelaide
            </h2>
            <p>
              Max Wall is based in Adelaide&apos;s northern suburbs and works
              across the metropolitan area: north to Gawler, west to the
              beaches, south to Seaford and east into the Adelaide Hills. We
              group that into four regions, and each has its own page.
            </p>
            <p>
              A region page covers what is particular to working there: the
              homes we see, the conditions that change how a wall is built or
              insulated, such as salt air, bushfire ratings, heritage streets
              and estate guidelines, and the questions locals ask us most. For
              products, inclusions and what each job involves, go to the{" "}
              <Link
                href="/services"
                className="font-semibold text-bluestone underline underline-offset-4"
              >
                cladding, insulation and microcement service pages
              </Link>
              .
            </p>
            <p>
              Wherever you are, the steps are the same. Send a few photos and
              your suburb, we come out to measure and check the walls, roof
              space or tiles, and you get a fixed written quote before any work
              starts. More on{" "}
              <Link
                href="/how-we-work"
                className="font-semibold text-bluestone underline underline-offset-4"
              >
                how we measure, quote and install
              </Link>
              .
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
              The products are the same everywhere. The house, the site and
              the rules are not. These are the four local differences we plan
              for at the measure, with the region pages that cover each one.
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
                  <ul className="mt-2 flex flex-wrap gap-x-6">
                    {factor.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white py-16 sm:py-20">
          <div className={container}>
            <h2 className="section-title text-bluestone">
              The same services in every region
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              What we install doesn&apos;t change with the postcode. Each
              service has one Adelaide-wide page with the products, what is
              included and common questions.
            </p>
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
                The suburb lists above are examples, not a boundary. If you
                are anywhere in greater Adelaide or the Hills, send your suburb
                and a short description of the job, and we&apos;ll let you know
                when we can come out to measure.
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
