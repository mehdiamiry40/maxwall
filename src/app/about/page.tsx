import { pageMetadata } from "@/lib/seo";
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
} from "@/components/ui";
import { images } from "@/lib/images";
import { pillars, site } from "@/lib/site";

export const metadata = pageMetadata(
  "About Our Adelaide Cladding & Insulation Team",
  "Meet Max Wall Building Solutions, the Adelaide team installing James Hardie cladding, CSR Bradford insulation and Dulux AcraStone microcement.",
  "/about",
);

const values = [
  {
    title: "Straight talking",
    body: "We tell you what your home needs, not what's most expensive. If a simpler option will do, we'll say so.",
  },
  {
    title: "Respect for your home",
    body: "Paths, windows and gardens get covered before we start, and the site is left clean every day.",
  },
  {
    title: "Detail in the finish",
    body: "Straight lines, neat trims and flashings, and clearances done right. The small things are what make a job last.",
  },
  {
    title: "Easy to deal with",
    body: "We turn up when we say, keep you in the loop and answer the phone.",
  },
];

const clients = [
  {
    title: "Homeowners",
    body: "Facade makeovers, insulation upgrades, extensions and microcement bathrooms on the family home.",
  },
  {
    title: "Builders",
    body: "Reliable cladding, AAC and insulation crews who fit your schedule on new homes and units.",
  },
  {
    title: "Investors & strata",
    body: "Pre-sale facade updates, bathroom refreshes and insulation that lift value, comfort and street appeal.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "About" }]}
          title="Local tradespeople who care how your walls turn out"
          intro={`${site.legalName} clads, insulates and finishes homes right across Adelaide.`}
          image={images.about}
        />

        <SplitSection image={images.services.install} side="right">
          <Eyebrow>Our story</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] sm:text-[2.6rem] text-bluestone">
            The whole building envelope, done properly
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Max Wall started with a simple idea: homes finished properly, by
              people who actually pick up the phone.
            </p>
            <p>
              Based in Adelaide&apos;s northern suburbs, we work with
              homeowners, builders and investors from Gawler to Seaford and up
              into the Hills.
            </p>
            <p>
              We handle the whole wall: wrap and insulation, James Hardie
              cladding or AAC panels, eaves and linings, and paint. Inside, we
              transform bathrooms and floors with Dulux AcraStone microcement.
              One team means you&apos;re not juggling trades.
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
            <SectionHead eyebrow="Values" title="How we work with you" />
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
              title="Homes, builders and investors"
            />
            <div className="grid gap-10 md:grid-cols-3">
              {clients.map((c) => (
                <div key={c.title}>
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
