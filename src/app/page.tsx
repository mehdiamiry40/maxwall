import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  Button,
  Check,
  container,
  CtaSection,
  FaqList,
  Footer,
  Header,
  Reveal,
  section,
  SectionHead,
  TextLink,
} from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCatalogue } from "@/components/ServiceCatalogue";
import { blurProps, images } from "@/lib/images";
import { projectIdeas } from "@/lib/home";
import { areas, faqs, phoneHref, site, steps } from "@/lib/site";

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

const hero = images.hero;

const band = [
  "Fixed written quotes",
  "Local Adelaide team",
  "Finishes that last",
];
const icons = [
  <path key="quote" d="M8 3h8l4 4v14H4V3h4Zm8 0v5h4M8 12h8m-8 4h5" />,
  <path
    key="local"
    d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  />,
  <path
    key="finish"
    d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6"
  />,
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="bg-render">
          <div
            className={`${container} grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-16`}
          >
            <div className="max-w-xl lg:py-10">
              <h1>
                <span className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                  <span aria-hidden="true" className="h-px w-8 bg-ochre" />
                  Render &amp; cladding · Adelaide
                </span>
                <span className="hero-title block">
                  Great walls.
                  <br />
                  <span className="hero-editorial">Better homes.</span>
                </span>
              </h1>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft sm:text-lg">
                Thoughtful finishes. Careful craftsmanship. Render and cladding
                that bring your home together.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button href="#quote">
                  Get a free quote <Arrow />
                </Button>
                <TextLink href="/services">Explore our services</TextLink>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs text-ink-soft">
                <Check className="text-ochre" /> Free on-site measure. Fixed
                written price.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sandstone lg:aspect-[1/1.05]">
              <Image
                src={hero.src}
                {...blurProps(hero)}
                alt={hero.alt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-6 pb-6 pt-20 text-white sm:px-8 sm:pb-8">
                <p className="text-[0.65rem] font-medium tracking-[0.16em] text-white/80 uppercase">
                  Design inspiration
                </p>
                <p className="mt-1.5 text-xl font-medium tracking-tight sm:text-2xl">
                  Built around your vision.
                </p>
              </div>
            </div>
          </div>
          <div className="border-y border-line bg-white/60">
            <ul
              aria-label="The Max Wall difference"
              className={`${container} grid gap-5 py-6 sm:grid-cols-3 sm:py-7`}
            >
              {band.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 sm:justify-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-ochre"
                  >
                    {icons[index]}
                  </svg>
                  <span className="text-xs font-medium sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={`bg-render ${section}`}>
          <div className={container}>
            <SectionHead
              eyebrow="What we do"
              title="The right finish for every wall."
              action={{ href: "/services", label: "All services" }}
            />
            <ServiceCatalogue />
          </div>
        </section>

        {/* About */}
        <section className="overflow-hidden bg-sandstone">
          <div
            className={`${container} grid gap-10 ${section} md:grid-cols-2 md:gap-16`}
          >
            <div className="relative min-h-64 md:min-h-[420px]">
              <Image
                src={images.about.src}
                {...blurProps(images.about)}
                alt={images.about.alt}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="rounded-xl object-cover object-[28%_50%]"
              />
            </div>
            <Reveal className="flex flex-col justify-center">
              <p className="mb-5 text-[0.65rem] font-semibold tracking-[0.18em] text-ochre uppercase">
                Craftsmanship, without compromise
              </p>
              <h2 className="section-title">
                Your home.
                <br />
                Our craftsmanship.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                A local Adelaide team that preps properly, keeps a tidy site and
                finishes every wall with care.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex min-h-11 items-center gap-4 self-start border-b border-line pb-2 text-sm font-semibold transition-colors hover:border-ochre hover:text-ochre"
              >
                About Max Wall <Arrow />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Inspiration */}
        <section id="inspiration" className={section}>
          <div className={container}>
            <SectionHead
              eyebrow="A little inspiration"
              title="Picture the possibilities."
            />
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {projectIdeas.map((idea, index) => (
                <Reveal key={idea.label} delay={index * 70}>
                  <Link href={idea.href} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sandstone md:aspect-[4/5]">
                      <Image
                        src={idea.image.src}
                        {...blurProps(idea.image)}
                        alt={idea.image.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 90vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <h3 className="text-sm font-semibold">{idea.label}</h3>
                      <Arrow className="h-4 w-4 text-ochre transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-soft">
              Inspiration photos, not Max Wall projects.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className={`bg-bluestone text-white ${section}`}>
          <div className={container}>
            <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 sm:mb-10 lg:mb-12">
              <h2 className="section-title">How it works</h2>
              <Link
                href="/how-we-work"
                className="group inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-semibold text-sky"
              >
                Our process
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal
                    delay={index * 70}
                    className="h-full border-t border-white/25 py-6 lg:pr-7"
                  >
                    <span className="text-xs font-medium tracking-widest text-sky">
                      0{index + 1}
                    </span>
                    <h3 className="mt-6 text-xl font-medium tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {step.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <div className="mt-8 sm:mt-10">
              <Button href="/contact">Get a free quote</Button>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className={`scroll-mt-24 bg-sandstone ${section}`}>
          <div
            className={`${container} grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
          >
            <div className="lg:pt-6">
              <p className="mb-5 text-[0.65rem] font-semibold tracking-[0.18em] text-ochre uppercase">
                Let’s make a start
              </p>
              <h2 className="section-title">
                A fresh look starts
                <br className="hidden sm:block" /> with a conversation.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
                Tell us a little about your project. We’ll help you choose the
                right finish and provide a clear, fixed written quote.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-ink-soft">
                {[
                  "Free on-site measure and quote",
                  "No obligation, no hidden extras",
                  "Across Adelaide and the Hills",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="text-ochre" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={phoneHref}
                className="mt-8 inline-block border-b border-line pb-1 text-sm font-semibold transition-colors hover:text-ochre"
              >
                Prefer to call? {site.phone}
              </a>
            </div>
            <div className="rounded-xl border border-line bg-white p-6 sm:p-8 lg:p-10">
              <h3 className="mb-6 text-xl font-semibold tracking-tight">
                Get your free quote
              </h3>
              <QuoteForm compact />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={section}>
          <div
            className={`${container} grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
          >
            <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 lg:block">
              <h2 className="section-title text-bluestone">Questions</h2>
              <div className="pb-1 lg:mt-6 lg:pb-0">
                <TextLink href="/faq">All FAQs</TextLink>
              </div>
            </Reveal>
            <FaqList items={[faqs[0], faqs[1], faqs[2], faqs[4]]} />
          </div>
        </section>

        {/* Areas */}
        <section className="bg-sandstone py-12 sm:py-14">
          <div
            className={`${container} flex flex-col gap-5 md:flex-row md:items-center md:justify-between`}
          >
            <h2 className="section-title text-bluestone">All of Adelaide</h2>
            <ul className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/areas#${area.id}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-bluestone transition-colors hover:border-sky-deep hover:text-sky-ink"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaSection
          title="Ready for a fresh look?"
          body="Free on-site measure and a fixed written quote."
        />
      </main>
      <Footer />
    </>
  );
}
