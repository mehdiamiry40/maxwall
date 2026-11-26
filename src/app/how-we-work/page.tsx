import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  Button,
  CallButton,
  Check,
  container,
  CtaSection,
  Eyebrow,
  Footer,
  Header,
  PageHero,
  SectionHead,
  TextLink,
} from "@/components/ui";
import { images } from "@/lib/images";
import { steps } from "@/lib/site";

export const metadata = pageMetadata(
  "How We Work: Measure, Fixed Quote & Install",
  "How Max Wall works in Adelaide: tell us about the job, get a free on-site measure and a fixed written quote, then we install to the manufacturer's guide.",
  "/how-we-work",
);

const quoteItems = [
  {
    title: "Scope",
    body: "The walls, rooms, roof space or subfloor the work covers, and the preparation needed before it starts.",
  },
  {
    title: "Products",
    body: "The cladding profile, the insulation type and R-value, or the microcement colour and texture we agreed on site.",
  },
  {
    title: "Price",
    body: "A fixed figure for the scope, with optional items such as wall insulation during a re-clad or painting priced separately.",
  },
  {
    title: "Timing",
    body: "How long the work should take and what can move it, such as weather on exterior work or drying time between microcement coats.",
  },
];

const promises = [
  "Scope, products, price and timing in writing before we start",
  "Products installed to the manufacturer's published specifications",
  "Windows, paths and gardens covered and protected",
  "Tidy work areas every day and a full clean-up at the end",
  "A final walk-through together before we call it done",
];

const jobTypes = [
  {
    title: "Cladding and re-cladding",
    body: "At the measure we check the frame and the existing walls, then confirm the profile, wall wrap, trims and flashings. Upper storeys may need scaffolding, and on a re-clad the old cladding often comes off first so the frame can be checked and insulated.",
    links: [
      {
        href: "/services/james-hardie-cladding",
        label: "James Hardie cladding installation",
      },
      {
        href: "/services/re-cladding",
        label: "Re-cladding an existing home",
      },
    ],
  },
  {
    title: "Insulation",
    body: "We inspect the roof space, walls or subfloor and recommend an R-value for each area. During the install we keep the required clearances around downlights, flues and vents, and leave you a record of what went in.",
    links: [
      {
        href: "/services/insulation",
        label: "Ceiling, wall and underfloor insulation",
      },
    ],
  },
  {
    title: "Microcement",
    body: "We check the tiles or surface beneath and the waterproofing, and agree the colour and texture from samples. Each coat needs time to dry, so a bathroom typically takes several days and is out of use until the sealer has cured.",
    links: [
      {
        href: "/services/microcement",
        label: "Dulux AcraStone microcement",
      },
    ],
  },
];

const inlineLink = "font-semibold underline underline-offset-4";

export default function HowWeWorkPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "How we work" }]}
          title="How we measure, quote and install"
          intro="Three steps from your first call to the final walk-through, with the scope, products and price agreed in writing before any work starts."
          image={images.scaffold}
        >
          <Button href="/contact">Book a free measure</Button>
          <CallButton variant="outline-light" />
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

        <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="The quote"
              title="What a fixed written quote sets out"
              intro="The quote is written after the measure, when we've seen the walls, roof space or tiles for ourselves."
            />
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {quoteItems.map((item) => (
                <div key={item.title} className="border-t-4 border-ochre pt-5">
                  <h3 className="text-xl font-semibold text-bluestone">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-3xl leading-relaxed text-ink-soft">
              Getting more than one price? Our{" "}
              <Link href="/guides/planning-your-project" className={inlineLink}>
                checklist for planning a cladding or renovation project
              </Link>{" "}
              covers what to send us and how to compare quotes, and{" "}
              <Link href="/guides/cladding-cost-adelaide" className={inlineLink}>
                what affects the cost of cladding
              </Link>{" "}
              explains what moves the number up or down.
            </p>
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

        <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="By type of job"
              title="What we check before we quote"
              intro="The three steps are the same on every job. What we look at during the measure depends on the work."
            />
            <div className="grid gap-10 md:grid-cols-3">
              {jobTypes.map((job) => (
                <div key={job.title}>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {job.body}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.links.map((link) => (
                      <li key={link.href}>
                        <TextLink href={link.href}>{link.label}</TextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
          <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                If you&apos;re renovating
              </h2>
              <p className="mb-4 mt-3 leading-relaxed text-ink-soft">
                Most people stay at home while we work. Before the start date
                we talk through access, scaffolding and any rooms that need to
                be kept clear, so the job can be planned around you, your kids
                and pets.
              </p>
              <TextLink href="/projects/renovations">
                Cladding and insulation for renovations
              </TextLink>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                If you&apos;re a builder
              </h2>
              <p className="mb-4 mt-3 leading-relaxed text-ink-soft">
                Send the drawings, energy report and wall specifications. We
                price to them, then plan the wrap, insulation and cladding
                around your frame inspections and other trades.
              </p>
              <TextLink href="/projects/new-builds">
                Cladding and insulation for new builds
              </TextLink>
            </div>
          </div>
        </section>

        <CtaSection
          title="Start with a free on-site measure"
          body="Tell us your suburb and a little about the job. We'll come out, measure up and give you a fixed written quote, with no obligation."
        />
      </main>
      <Footer />
    </>
  );
}
