import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  BrandStrip,
  container,
  CtaSection,
  Eyebrow,
  Footer,
  Header,
  PageHero,
  SectionHead,
  SplitSection,
  TextLink,
} from "@/components/ui";
import { images } from "@/lib/images";
import { areas, phoneHref, pillars, site } from "@/lib/site";

export const metadata = pageMetadata(
  "About Max Wall Building Solutions, Adelaide",
  "Max Wall Building Solutions is an Adelaide contractor that supplies and installs James Hardie cladding, CSR Bradford insulation and AcraStone microcement.",
  "/about",
);

const values = [
  {
    title: "Straight talking",
    body: "We tell you what the house needs, not what costs the most. If a simpler option will do the job, we'll say so.",
  },
  {
    title: "Respect for your home",
    body: "Windows, paths and gardens are covered before we start, and work areas are left tidy at the end of every day.",
  },
  {
    title: "Detail in the finish",
    body: "Straight lines, neat trims and flashings, and clearances kept where they're required. The small things are what make a wall last.",
  },
  {
    title: "Easy to deal with",
    body: "We turn up when we say we will, keep you in the loop and answer the phone.",
  },
];

const clients = [
  {
    title: "Homeowners",
    body: "Re-cladding, insulation upgrades, extensions and microcement bathrooms on the home you live in.",
    href: "/projects/renovations",
    link: "How we handle renovations",
  },
  {
    title: "Builders",
    body: "Wall wrap, insulation, cladding, AAC panels and eaves on new homes and multi-unit sites, priced from your plans and scheduled around your build.",
    href: "/projects/new-builds",
    link: "How we work on new builds",
  },
  {
    title: "Investors & strata",
    body: "Pre-sale facade updates, bathroom refreshes and insulation for rental and strata properties, with insurance certificates available for strata managers.",
    href: "/faq",
    link: "Quotes, timing and insurance questions",
  },
];

const details = [
  { label: "Company", value: site.legalName },
  { label: "ABN", value: site.abn },
  { label: "Location", value: `${site.city}, ${site.region}` },
  { label: "Hours", value: site.hours },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "About" }]}
          title="About Max Wall Building Solutions"
          intro="An independent Adelaide contractor that clads, insulates and finishes homes, working for homeowners and builders from Gawler to Seaford and up into the Hills."
          image={images.about}
        />

        <SplitSection image={images.services.install} side="right">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] sm:text-[2.6rem] text-bluestone">
            One Adelaide team for the whole wall
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Max Wall is {site.legalName} (ABN {site.abn}), based in
              Adelaide&apos;s northern suburbs. We started with a simple idea:
              homes finished properly, by people who actually pick up the
              phone.
            </p>
            <p>
              We supply and install the layers that make up a wall: wall wrap
              and CSR Bradford insulation, James Hardie cladding or Hardie
              Gravis AAC panels, eaves and linings, and paint. Inside, we finish
              bathrooms, walls and floors in Dulux AcraStone microcement.
            </p>
            <p>
              Because one team handles those layers, they&apos;re planned
              together and you&apos;re not juggling trades. Every product is
              installed to its manufacturer&apos;s published specifications,
              and every job is quoted in writing before it starts.
            </p>
          </div>
        </SplitSection>

        <section className="border-b border-line bg-white">
          <div className={`${container} grid md:grid-cols-3`}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`py-10 md:px-8 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : "md:pl-0"} ${i === 2 ? "md:pr-0" : ""}`}
              >
                <p className="text-sm font-bold text-sky-ink">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <BrandStrip />

        <section className="py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="Values"
              title="What it's like to work with us"
              action={{
                href: "/how-we-work",
                label: "How a job runs, step by step",
              }}
            />
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="border-t border-line pt-6">
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="Who we work for"
              title="Homeowners, builders and investors"
            />
            <div className="grid gap-10 md:grid-cols-3">
              {clients.map((c) => (
                <div key={c.title}>
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mb-4 mt-2 leading-relaxed text-ink-soft">
                    {c.body}
                  </p>
                  <TextLink href={c.href}>{c.link}</TextLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
          <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
            <div>
              <Eyebrow>Where we work</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] text-bluestone">
                Based in the north, working across Adelaide
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                We work across metropolitan Adelaide and the Adelaide Hills.
                Each region has its own page covering the homes we see there
                and the local conditions we plan for.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
                {areas.map((area) => (
                  <li key={area.id}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <TextLink href="/areas">All service areas</TextLink>
              </div>
            </div>
            <div>
              <Eyebrow>Business details</Eyebrow>
              <dl className="mt-3 divide-y divide-line border-y border-line">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]"
                  >
                    <dt className="font-bold">{d.label}</dt>
                    <dd className="text-ink-soft">{d.value}</dd>
                  </div>
                ))}
                <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-bold">Phone</dt>
                  <dd>
                    <a
                      href={phoneHref}
                      className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-bold">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
