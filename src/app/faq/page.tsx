import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Rendering & Cladding FAQs",
  description:
    "Answers to common questions about render and cladding costs, finishes, timing and more from Max Wall in Adelaide.",
  alternates: { canonical: "/faq" },
};

const allFaqs = [...faqs, ...services.flatMap((s) => s.faqs)];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const groups = [
  { id: "general", title: "General", items: faqs },
  ...services.map((s) => ({ id: s.slug, title: s.title, items: s.faqs })),
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "FAQ" }]}
          title="Questions, answered"
          intro="Can't find what you're after? Give us a call and we'll talk it through."
          image={images.faqBanner}
        />

        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-12 lg:grid-cols-[14rem_1fr]`}>
            <nav
              aria-label="FAQ topics"
              className="self-start lg:sticky lg:top-36"
            >
              <ul className="flex flex-wrap gap-2 text-sm lg:block lg:space-y-2 lg:border-l lg:border-line">
                {groups.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="flex min-h-11 items-center rounded-sm border border-line px-3 py-2 text-ink-soft hover:border-ochre hover:text-ink lg:-ml-px lg:border-0 lg:border-l-2 lg:border-transparent lg:pl-4"
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-16">
              {groups.map((g) => (
                <div key={g.id} id={g.id}>
                  <h2 className="mb-4 text-2xl font-bold">{g.title}</h2>
                  <FaqList items={g.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Still have questions?"
          body="Call us or send a message. We're happy to talk through your walls, with no obligation."
        />
      </main>
      <Footer />
    </>
  );
}
