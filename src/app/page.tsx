import Image from "next/image";
import {
  Banner,
  container,
  CoursesMotif,
  CtaSection,
  FaqList,
  Footer,
  Header,
  PhoneIcon,
  Pill,
  ServiceCard,
  TextLink,
} from "@/components/ui";
import { images } from "@/lib/images";
import { areas, faqs, phoneHref, pillars, services, site, steps } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  areaServed: { "@type": "City", name: "Adelaide" },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "SA",
    addressCountry: "AU",
  },
  taxID: site.abn,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header overlay />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-bluestone pb-20 pt-56 text-white sm:pb-28">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(31_43_51/0.55)_0%,rgb(31_43_51/0.15)_30%,rgb(31_43_51/0.35)_60%,rgb(31_43_51/0.85)_100%)]" />
          <div className={container}>
            <h1 className="max-w-3xl font-display text-[2.8rem] leading-[1.08] sm:text-6xl md:text-[4.2rem]">
              Walls that make a lasting first impression
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-90">
              Max Wall is Adelaide&apos;s render and cladding specialist, from new builds to
              full facade makeovers.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Pill href="/contact">Get a Free Quote</Pill>
              <Pill href={phoneHref} variant="outline">
                <PhoneIcon /> {site.phone}
              </Pill>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-sandstone py-24 sm:py-28">
          <div className={`${container} grid items-center gap-14 md:grid-cols-[1.1fr_1fr]`}>
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">Built on craft, finished with care</h2>
              <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
                <p>It&apos;s about the walls you come home to, and the street appeal that lasts.</p>
                <p>
                  Max Wall Building Solutions renders and clads homes, extensions and new builds
                  right across Adelaide. We handle everything from Hebel and foam panel
                  installs to the final texture coat.
                </p>
                <p>
                  Honest pricing, tidy sites and a finish we&apos;re proud to put our name to.
                </p>
              </div>
              <div className="mt-8">
                <TextLink href="/about">More about Max Wall</TextLink>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/6]">
                <Image
                  src={images.about.src}
                  alt={images.about.alt}
                  fill
                  sizes="(min-width: 768px) 440px, 90vw"
                  className="object-cover object-[28%_50%]"
                />
              </div>
              <CoursesMotif className="absolute -bottom-8 -right-4 w-24 text-bluestone sm:-right-10 sm:w-32" />
            </div>
          </div>
        </section>

        {/* Pillars card */}
        <section className="bg-sandstone pb-24">
          <div className="texture mx-auto max-w-6xl bg-bluestone px-5 py-16 text-white sm:px-16 sm:py-20">
            <div className="grid gap-12 md:grid-cols-3 md:gap-10">
              {pillars.map((p) => (
                <div key={p.title}>
                  <h3 className="max-w-[14rem] font-display text-2xl leading-snug">{p.title}</h3>
                  <div className="my-6 h-px bg-ochre" />
                  <p className="leading-relaxed opacity-90">{p.body}</p>
                </div>
              ))}
            </div>
            <Pill href="/contact" variant="white" className="mt-12">
              Enquire Now
            </Pill>
          </div>
        </section>

        {/* Services */}
        <Banner title="Our services" image={images.servicesBanner} href="/services" />
        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3`}>
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </section>

        {/* Areas */}
        <div className="h-4 bg-white" />
        <Banner title="Rendering across Adelaide" image={images.areasBanner} href="/areas" />
        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-10 md:grid-cols-[1fr_1.4fr]`}>
            <p className="text-[1.05rem] leading-relaxed text-ink-soft">
              We&apos;re based in Adelaide&apos;s north and work right across the metro area,
              from Gawler to Seaford and up into the Hills.
            </p>
            <div>
              <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {areas.map((a) => (
                  <li key={a.name} className="border-b border-ink/15 pb-4 font-display text-2xl">
                    {a.name}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <TextLink href="/areas">See all suburbs</TextLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="h-4 bg-white" />
        <Banner title="Questions, answered" image={images.faqBanner} href="/faq" />
        <section className="py-20 sm:py-24">
          <div className={container}>
            <div className="max-w-3xl">
              <FaqList items={faqs.slice(0, 4)} />
              <div className="mt-8">
                <TextLink href="/faq">Read all FAQs</TextLink>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="border-t border-ink/10 bg-white py-24">
          <div className={`${container} grid gap-12 md:grid-cols-[0.8fr_2fr]`}>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Let&apos;s get it done</h2>
            <div>
              <div className="grid gap-10 sm:grid-cols-3">
                {steps.map((s, i) => (
                  <div key={s.title}>
                    <p className="font-display text-2xl">{i + 1}</p>
                    <div className="my-4 h-px bg-ink/40" />
                    <h3 className="font-display text-2xl leading-snug">{s.title}</h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <TextLink href="/how-we-work">How we work</TextLink>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
