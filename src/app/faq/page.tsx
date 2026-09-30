import type { Metadata } from "next";
import { container, CtaSection, FaqList, Footer, Header, PageHero } from "@/components/ui";
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

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header overlay />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Questions, answered"
          intro="Can't find what you're after? Give us a call and we'll talk it through."
          image={images.faqBanner}
        />

        <section className="py-24">
          <div className={`${container} grid gap-12 md:grid-cols-[0.8fr_2fr]`}>
            <h2 className="font-display text-4xl leading-tight">General</h2>
            <FaqList items={faqs} />
          </div>
        </section>

        {services.map((s) => (
          <section key={s.slug} className="border-t border-ink/10 py-20">
            <div className={`${container} grid gap-12 md:grid-cols-[0.8fr_2fr]`}>
              <h2 className="font-display text-3xl leading-tight">{s.title}</h2>
              <FaqList items={s.faqs} />
            </div>
          </section>
        ))}

        <CtaSection title="Still have questions?" body="Call us or send a message. We're happy to talk through your walls, with no obligation." />
      </main>
      <Footer />
    </>
  );
}
