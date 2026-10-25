import { pageMetadata, businessId } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Button,
  CallButton,
  Check,
  container,
  CtaSection,
  Eyebrow,
  FaqList,
  Footer,
  Header,
  PageHero,
  SectionHead,
  ServiceCard,
  SplitSection,
} from "@/components/ui";
import Link from "next/link";
import { guides, projects } from "@/lib/content";
import { images } from "@/lib/images";
import { serviceBySlug, services, site, steps } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMetadata(
    service.seoTitle,
    service.metaDescription,
    `/services/${service.slug}`,
  );
}

export default async function ServicePage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const photo = images.services[service.slug];
  // Related services: same category first, then the rest
  const others = services
    .filter((s) => s.slug !== service.slug)
    .sort(
      (a, b) =>
        Number(b.category === service.category) -
        Number(a.category === service.category),
    )
    .slice(0, 3);
  const quoteHref = `/contact?service=${service.slug}`;
  const relatedGuides = guides.filter((g) => g.services.includes(service.slug));
  const relatedProjects = projects.filter((p) =>
    p.services.includes(service.slug),
  );
  const reading = [
    ...relatedGuides.map((g) => ({
      href: `/guides/${g.slug}`,
      label: g.title,
      kind: "Guide",
    })),
    ...relatedProjects.map((p) => ({
      href: `/projects/${p.slug}`,
      label: p.shortTitle,
      kind: "Project type",
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.intro,
    areaServed: { "@type": "City", name: "Adelaide" },
    url: `${site.url}/services/${service.slug}`,
    image: `${site.url}${photo.src}`,
    provider: { "@id": businessId },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: product.name,
          description: product.body,
        },
      })),
    },
  };

  return (
    <>
      <StructuredData value={jsonLd} />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
          title={`${service.title} in Adelaide`}
          intro={service.body}
          image={photo}
        >
          <Button href={quoteHref}>Get a free quote</Button>
          <CallButton variant="outline-light" />
        </PageHero>

        {/* Overview */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div
            className={`${container} grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16`}
          >
            <div>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] sm:text-[2.6rem] text-bluestone">
                What to expect
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                {service.intro}
              </p>

              <h3 className="mt-12 text-xl font-bold">What&apos;s included</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="surface-card self-start p-7 sm:p-8 lg:sticky lg:top-28">
              <h3 className="text-lg font-bold">Ideal for</h3>
              <ul className="mt-4 space-y-3 text-ink-soft">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid gap-3">
                <Button href={quoteHref}>Get a free quote</Button>
                <CallButton />
              </div>
            </aside>
          </div>
        </section>

        {/* Products */}
        <section
          className="border-t border-line bg-white py-16 sm:py-20 lg:py-24"
        >
          <div className={container}>
            <SectionHead
              eyebrow="Options"
              title="Products & finishes"
              intro="We'll recommend the right option for your home during the on-site measure."
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.products.map((product) => (
                <li
                  key={product.name}
                  className="border-t-4 border-ochre bg-sandstone p-6"
                >
                  <h3 className="text-xl font-semibold text-bluestone">
                    {product.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {product.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <SplitSection image={photo}>
          <Eyebrow>How it works</Eyebrow>
          <ol className="mt-6 space-y-7">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-2">
                <span className="text-lg font-bold text-sky-ink">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </SplitSection>

        {/* FAQs */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_2fr]`}>
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] text-bluestone">
                {service.title}: common questions
              </h2>
            </div>
            <div>
              <FaqList items={service.faqs} />
              {reading.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-bold">Helpful reading</h3>
                  <ul className="mt-3 divide-y divide-line border-y border-line">
                    {reading.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex min-h-12 items-center justify-between gap-4 py-3 font-semibold text-bluestone hover:underline"
                        >
                          <span>
                            <span className="mr-2 text-xs font-bold tracking-[0.12em] text-ochre-dark uppercase">
                              {item.kind}
                            </span>
                            {item.label}
                          </span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              title="Other services"
              action={{ href: "/services", label: "All services" }}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
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
