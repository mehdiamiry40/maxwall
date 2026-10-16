import { faqSchema, pageMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import {
  container,
  CtaSection,
  FaqList,
  Footer,
  Header,
  PageHero,
} from "@/components/ui";
import { images } from "@/lib/images";
import { faqs, services } from "@/lib/site";

export const metadata = pageMetadata(
  "Cladding, Insulation & Microcement FAQs Adelaide",
  "Answers about James Hardie cladding, CSR Bradford insulation, Dulux AcraStone microcement and painting: costs, products, timing and quotes in Adelaide.",
  "/faq",
);

const allFaqs = [...faqs, ...services.flatMap((s) => s.faqs)];

const jsonLd = faqSchema(allFaqs);

const groups = [
  { id: "general", title: "General", items: faqs },
  ...services.map((s) => ({ id: s.slug, title: s.title, items: s.faqs })),
];

export default function FaqPage() {
  return (
    <>
      <StructuredData value={jsonLd} />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "FAQ" }]}
          title="Questions, answered"
          intro="Can't find what you're after? Give us a call and we'll talk it through."
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Still have questions?"
          body="Call us or send a message. We're happy to talk through your project, with no obligation."
        />
      </main>
      <Footer />
    </>
  );
}
