import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  container,
  CtaSection,
  FaqList,
  Footer,
  Header,
  PageHero,
  PhoneIcon,
  Pill,
  ServiceCard,
} from "@/components/ui";
import { images } from "@/lib/images";
import { phoneHref, serviceBySlug, services, site, steps } from "@/lib/site";

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

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 h-4 w-4 shrink-0 text-ochre" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const photo = images.services[service.slug];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
      <Header overlay />
      <main className="flex-1">
        <PageHero eyebrow="Services" title={`${service.title} in Adelaide`} intro={service.body} image={photo}>
          <Pill href={`/contact?service=${service.slug}`}>Get a Free Quote</Pill>
          <Pill href={phoneHref} variant="outline">
            <PhoneIcon /> {site.phone}
          </Pill>
        </PageHero>

        {/* Intro + includes */}
        <section className="bg-sandstone py-24">
          <div className={`${container} grid gap-14 md:grid-cols-[1.2fr_1fr]`}>
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">What to expect</h2>
              <p className="mt-8 text-[1.05rem] leading-relaxed text-ink-soft">{service.intro}</p>
              <h3 className="mt-12 font-display text-2xl">What&apos;s included</h3>
              <div className="my-5 h-px bg-ochre" />
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="self-start bg-bluestone p-8 text-white sm:p-10">
              <h3 className="font-display text-2xl">Ideal for</h3>
              <div className="my-5 h-px bg-ochre" />
              <ul className="space-y-3 opacity-90">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check /> {item}
                  </li>
                ))}
              </ul>
              <Pill href={`/contact?service=${service.slug}`} variant="white" className="mt-10 w-full">
                Get a free quote
              </Pill>
            </aside>
          </div>
        </section>

        {/* Photo + process */}
        <section className="py-24">
          <div className={`${container} grid items-center gap-14 md:grid-cols-2`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 480px, 90vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-4xl leading-tight">How it works</h2>
              <ol className="mt-8 space-y-7">
                {steps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <span className="font-display text-2xl text-ochre">{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl">{s.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-ink-soft">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-ink/10 py-24">
          <div className={`${container} grid gap-12 md:grid-cols-[0.8fr_2fr]`}>
            <h2 className="font-display text-4xl leading-tight">{service.title} FAQs</h2>
            <FaqList items={service.faqs} />
          </div>
        </section>

        {/* Related */}
        <section className="bg-white py-24">
          <div className={container}>
            <h2 className="font-display text-4xl">Other services</h2>
            <div className="mt-12 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>

        <CtaSection title={`Ready to talk about ${service.title}?`} />
      </main>
      <Footer />
    </>
  );
}
