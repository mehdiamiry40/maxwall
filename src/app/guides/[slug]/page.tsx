import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
  section,
  SectionHead,
  ServiceCard,
} from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { guides } from "@/lib/content";
import { breadcrumbSchema, businessId, pageMetadata } from "@/lib/seo";
import { services, site } from "@/lib/site";
export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}
export async function generateMetadata(
  props: PageProps<"/guides/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = guides.find((item) => item.slug === slug);
  return guide
    ? pageMetadata(guide.seoTitle, guide.description, `/guides/${slug}`)
    : {};
}
export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <StructuredData
          value={breadcrumbSchema([
            { label: "Guides", href: "/guides" },
            { label: guide.title, href: `/guides/${slug}` },
          ])}
        />
        <StructuredData
          value={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            image: `${site.url}${guide.image.src}`,
            mainEntityOfPage: `${site.url}/guides/${slug}`,
            inLanguage: "en-AU",
            author: { "@id": businessId },
            publisher: { "@id": businessId },
          }}
        />
        <PageHero
          crumb={[{ label: "Guides", href: "/guides" }, { label: guide.title }]}
          title={guide.title}
          intro={guide.intro}
          image={guide.image}
        />
        <article className={`bg-white ${section}`}>
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_2fr]`}>
            <nav
              aria-label="In this guide"
              className="self-start border-l-4 border-ochre pl-5 lg:sticky lg:top-36"
            >
              <h2 className="mb-3 text-xl font-semibold">In this guide</h2>
              <ol className="space-y-2">
                {guide.sections.map((item, index) => (
                  <li key={item.title}>
                    <a
                      href={`#section-${index + 1}`}
                      className="inline-flex min-h-11 items-center text-base underline underline-offset-4"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-11 items-center font-bold underline"
              >
                Ask about your walls
              </Link>
            </nav>
            <div className="max-w-3xl space-y-10">
              {guide.sections.map((item, index) => (
                <section
                  key={item.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-36"
                >
                  <h2 className="text-2xl font-semibold text-bluestone">
                    {item.title}
                  </h2>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </article>
        <section className={`bg-white ${section}`}>
          <div className={container}>
            <SectionHead title="Explore the relevant services" accent />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guide.services.map((slug) => (
                <ServiceCard
                  key={slug}
                  service={services.find((service) => service.slug === slug)!}
                />
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
