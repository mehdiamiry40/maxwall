import { faqSchema, pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import {
  container,
  CtaSection,
  FaqList,
  Footer,
  Header,
  PageHero,
  TextLink,
} from "@/components/ui";
import { guides } from "@/lib/content";
import { images } from "@/lib/images";
import { faqs, services } from "@/lib/site";

export const metadata = pageMetadata(
  "FAQs: Quotes, Products, Timing & Insurance",
  "Straight answers from Max Wall about quotes, products, timing, insurance and staying at home during the work, plus questions on each service we install.",
  "/faq",
);

// A question shown in the general group is not repeated under a service,
// so every question appears once on the page and once in the FAQ markup.
const seen = new Set(faqs.map((f) => f.q));
const serviceGroups = services.map((s) => ({
  id: s.slug,
  title: s.title,
  href: `/services/${s.slug}`,
  items: s.faqs.filter((f) => {
    if (seen.has(f.q)) return false;
    seen.add(f.q);
    return true;
  }),
}));

const groups = [
  {
    id: "general",
    title: "Quotes, timing and working with us",
    href: "",
    items: faqs,
  },
  ...serviceGroups.filter((g) => g.items.length > 0),
];

const jsonLd = faqSchema(groups.flatMap((g) => g.items));

export default function FaqPage() {
  return (
    <>
      <StructuredData value={jsonLd} />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "FAQ" }]}
          title="Frequently asked questions"
          intro="Straight answers about quotes, timing, insurance and having us work at your place, followed by the questions we're asked about each service."
          image={images.faqBanner}
        />

        <section className="py-16 sm:py-20 lg:py-24">
          <div className={`${container} grid gap-12 lg:grid-cols-[14rem_1fr]`}>
            <nav
              aria-label="FAQ topics"
              className="self-start  border border-line bg-render p-4 lg:sticky lg:top-24"
            >
              <ul className="flex flex-wrap gap-2 text-sm lg:block lg:space-y-1">
                {groups.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="flex min-h-11 items-center  border border-line bg-white px-3 py-2 text-ink-soft transition-colors hover:border-sky-deep hover:bg-sky-soft hover:text-sky-ink lg:border-transparent lg:bg-transparent"
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-16">
              {groups.map((g) => (
                <div key={g.id} id={g.id} className="scroll-mt-24">
                  <h2 className="mb-4 text-2xl font-bold">{g.title}</h2>
                  <FaqList items={g.items} />
                  {g.href && (
                    <div className="mt-5">
                      <TextLink href={g.href}>
                        {g.title}: products and what&apos;s included
                      </TextLink>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white py-16 sm:py-20">
          <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-bluestone">
                Want the longer answer?
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                Our guides go further than a short answer can, and{" "}
                <Link
                  href="/how-we-work"
                  className="font-semibold underline underline-offset-4"
                >
                  how we measure, quote and install
                </Link>{" "}
                walks through a job from first call to handover.
              </p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="flex min-h-12 items-center justify-between gap-4 py-3 font-semibold text-bluestone hover:underline"
                  >
                    <span>{guide.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaSection
          title="Still have a question?"
          body="Call us or send a message. We're happy to talk through your project, with no obligation."
        />
      </main>
      <Footer />
    </>
  );
}
