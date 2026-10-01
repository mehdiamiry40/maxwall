import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { images } from "@/lib/images";
import { phoneHref, serviceBySlug, services, site, steps } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  const title = `${service.title} Adelaide`;
  const description = `${service.body} Free fixed-price quotes across Adelaide from Max Wall.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: `${site.url}${path}`, title, description, siteName: site.name, locale: "en_AU" },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const photo = images.services[service.slug];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const quoteHref = `/?service=${service.slug}#contact`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.intro,
      serviceType: service.title,
      url: `${site.url}/services/${service.slug}`,
      areaServed: { "@type": "City", name: "Adelaide" },
      provider: { "@type": "HomeAndConstructionBusiness", name: site.name, url: site.url, email: site.email },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: service.title, item: `${site.url}/services/${service.slug}` },
      ],
    },
  ];

  const sections: { heading: string; body?: string; list?: string[]; ordered?: boolean }[] = [
    { heading: "What to expect", body: service.intro },
    { heading: "Ideal for", list: service.idealFor },
    { heading: "How it works", list: steps.map((s) => `${s.title}. ${s.body}`), ordered: true },
  ];

  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-porcelain">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-zinc-600">
                <Link href="/" className="transition hover:text-ochre">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>{service.title}</span>
              </nav>

              <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-bluestone sm:text-6xl sm:leading-[0.98]">
                {service.title} in Adelaide
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-ink sm:text-xl">{service.body}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={quoteHref}
                  className="inline-flex items-center justify-center gap-2 bg-ochre px-7 py-4 text-base font-semibold text-white transition hover:bg-ochre-dark"
                >
                  Request a free quote
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center border border-ochre px-7 py-4 text-base font-semibold text-ochre transition hover:bg-white"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="relative aspect-[1.2] overflow-hidden bg-linen shadow-sm">
              <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <aside>
              <h2 className="font-display text-3xl font-semibold text-bluestone">What is included</h2>
              <ul className="mt-7 space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-ink">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-ochre text-white">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="grid gap-8">
              {sections.map((section) => (
                <article key={section.heading} className="border-t border-zinc-200 pt-7">
                  <h2 className="font-display text-3xl font-semibold leading-tight text-bluestone">{section.heading}</h2>
                  {section.body && <p className="mt-4 text-lg leading-relaxed text-zinc-700">{section.body}</p>}
                  {section.list && (
                    <ul className="mt-4 space-y-2 text-lg leading-relaxed text-zinc-700">
                      {section.list.map((item, i) => (
                        <li key={item} className="flex gap-3">
                          <span className="w-5 shrink-0 font-semibold text-ochre">{section.ordered ? `${i + 1}.` : "›"}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <Faq
          className="bg-porcelain"
          description={`A quick guide before requesting a quote for ${service.title.toLowerCase()} in Adelaide.`}
          items={service.faqs}
        />

        <section className="bg-white py-18 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-4xl font-semibold text-bluestone">Related services</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group border border-zinc-200 bg-white p-6 transition hover:border-ochre"
                >
                  <h3 className="font-display text-2xl font-semibold text-bluestone">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-ochre underline underline-offset-2">
                    Learn more
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
