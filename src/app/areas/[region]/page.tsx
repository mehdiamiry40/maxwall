import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Button,
  CallButton,
  container,
  CtaSection,
  Eyebrow,
  FaqList,
  Footer,
  Header,
  PageHero,
  section,
  SectionHead,
  ServiceCard,
} from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { areaPageBySlug, areaPages } from "@/lib/content";
import { businessId, faqSchema, pageMetadata } from "@/lib/seo";
import { areaBySlug, areas, serviceBySlug, services, site } from "@/lib/site";

// Only the four regions exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.map((page) => ({ region: page.slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas/[region]">,
): Promise<Metadata> {
  const { region } = await props.params;
  const page = areaPageBySlug(region);
  return page
    ? pageMetadata(page.seoTitle, page.metaDescription, `/areas/${page.slug}`)
    : {};
}

export default async function RegionPage(props: PageProps<"/areas/[region]">) {
  const { region } = await props.params;
  const page = areaPageBySlug(region);
  const area = areaBySlug(region);
  if (!page || !area) notFound();

  // "Eastern suburbs & Hills" → "eastern suburbs & Hills" for use mid-sentence
  const regionName = area.name.charAt(0).toLowerCase() + area.name.slice(1);
  const url = `${site.url}/areas/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    serviceType: "Cladding, insulation, microcement and painting",
    description: page.intro,
    url,
    image: `${site.url}${page.image.src}`,
    provider: { "@id": businessId },
    areaServed: area.suburbs.map((suburb) => ({
      "@type": "Place",
      name: `${suburb}, SA`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services in Adelaide's ${regionName}`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${site.url}/services/${service.slug}`,
        },
      })),
    },
  };
  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <StructuredData value={jsonLd} />
      <StructuredData value={faqSchema(page.faqs)} />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Areas", href: "/areas" }, { label: area.name }]}
          title={page.title}
          intro={page.intro}
          image={page.image}
        >
          <Button href="/contact">Get a free quote</Button>
          <CallButton variant="outline-light" />
        </PageHero>

        <article className={`bg-white ${section}`}>
          <div className={`${container} grid gap-10 lg:grid-cols-[2fr_1fr]`}>
            <div className="max-w-3xl space-y-10">
              {page.sections.map((item) => (
                <section key={item.title}>
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
            <aside className="surface-card self-start p-7 sm:p-8 lg:sticky lg:top-28">
              <h2 className="text-lg font-bold">Suburbs we cover</h2>
              <ul className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-x-6 gap-y-2 text-ink-soft">
                {area.suburbs.map((suburb) => (
                  <li key={suburb}>{suburb}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                And the suburbs in between. Not sure if we reach you? Call or
                send your suburb and we&apos;ll let you know.
              </p>
            </aside>
          </div>
        </article>

        <section className={`border-t border-line bg-white ${section}`}>
          <div className={container}>
            <SectionHead
              title={`Popular in the ${regionName}`}
              action={{ href: "/services", label: "All services" }}
              accent
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.services.map((slug, index) => (
                <ServiceCard
                  key={slug}
                  service={serviceBySlug(slug)!}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_2fr]`}>
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] text-bluestone">
                Questions from the {regionName}
              </h2>
            </div>
            <FaqList items={page.faqs} />
          </div>
        </section>

        <section className="border-t border-line bg-white py-12 sm:py-16">
          <div className={container}>
            <h2 className="text-xl font-semibold text-bluestone">
              Other areas we cover
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {otherAreas.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/areas/${other.slug}`}
                    className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                  >
                    {other.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                >
                  All service areas
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
