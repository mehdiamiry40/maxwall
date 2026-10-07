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
import { images } from "@/lib/images";
import { serviceBySlug, services, site, steps } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} Adelaide`,
    description: `${service.body} Free fixed-price quotes across Adelaide from Max Wall.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const photo = images.services[service.slug];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const quoteHref = `/contact?service=${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    areaServed: { "@type": "City", name: "Adelaide" },
    provider: { "@type": "HomeAndConstructionBusiness", name: site.legalName, telephone: site.phone, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Services", href: "/services" }, { label: service.title }]}
          title={`${service.title} in Adelaide`}
          intro={service.body}
          image={photo}
        >
          <Button href={quoteHref}>Get a free quote</Button>
          <CallButton variant="outline-light" />
        </PageHero>

        {/* Overview */}
        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16`}>
            <div>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] sm:text-[2.6rem] text-bluestone">What to expect</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{service.intro}</p>

              <h3 className="mt-12 text-xl font-bold">What&apos;s included</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="self-start border border-line bg-white p-7 sm:p-8 lg:sticky lg:top-28">
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

        {/* Process */}
        <SplitSection image={photo}>
          <Eyebrow>How it works</Eyebrow>
          <ol className="mt-6 space-y-7">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-2">
                <span className="text-lg font-bold text-ochre">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </SplitSection>

        {/* FAQs */}
        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_2fr]`}>
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.1] text-bluestone">Common questions</h2>
            </div>
            <FaqList items={service.faqs} />
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-line bg-white py-20 sm:py-24">
          <div className={container}>
            <SectionHead title="Other services" action={{ href: "/services", label: "All services" }} />
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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
