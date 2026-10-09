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
  PhoneIcon,
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

const hero = images.services["foam-cladding"];
const heroPoints = [
  "Quality render and cladding",
  "Clear, fixed written quotes",
  "Local Adelaide team",
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
        {/* The reference separates its wide photo from the welcome message. */}
        <div className="relative h-[220px] overflow-hidden bg-sandstone sm:h-[300px] lg:h-[330px]">
          <Image src={hero.src} {...blurProps(hero)} alt={hero.alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover object-[50%_55%]" />
          <span className="absolute bottom-3 right-4 rounded-sm bg-white/90 px-2 py-1 text-[10px] text-ink-soft">Inspiration photograph</span>
        </div>
        <section className="bg-white text-center text-bluestone">
          <div className={`${container} py-9 sm:py-12`}>
            <h1 className="hero-title">
              <span className="text-ochre">Welcome</span> to Max Wall Building Solutions
            </h1>
            <p className="mt-3 text-lg sm:text-xl">Render &amp; cladding specialists in Adelaide</p>
            <ul className="mx-auto mt-5 flex w-fit flex-col gap-1.5 text-left text-lg sm:text-xl">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-bluestone text-white"><Check className="m-0 h-3.5 w-3.5" /></span>
                  {point}
                </li>
              ))}
            </ul>
            <h2 className="mt-7 text-2xl font-semibold sm:text-3xl">Great walls. Better homes.</h2>
            <p className="mt-2 text-lg">Homeowners &amp; builders · All of Adelaide &amp; the Hills</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="#quote">Get a free quote <Arrow /></Button>
              <Button href={phoneHref} variant="outline"><PhoneIcon /> Call {site.phone}</Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="quote-heading" className="border-y border-line bg-sandstone py-12 sm:py-16">
          <div className={`${container} grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ochre-dark">Let’s talk about your project</p>
              <h2 id="quote-heading" className="section-title mt-3 text-bluestone">A fresh finish starts here.</h2>
              <p className="mt-4 max-w-lg text-lg text-ink-soft">New build, renovation or a wall that needs some care. Tell us what you have in mind and we’ll help you choose the right finish.</p>
              <ul className="mt-6 space-y-2 text-bluestone">
                <li className="flex gap-3"><Check /> Free on-site measure</li>
                <li className="flex gap-3"><Check /> A clear, fixed written price</li>
                <li className="flex gap-3"><Check /> No obligation</li>
              </ul>
            </div>
            <div id="quote" className="surface-card scroll-mt-32 border-t-4 border-t-bluestone p-5 sm:p-7">
              <h3 className="text-2xl font-semibold text-bluestone">Get a free quote</h3>
              <p className="mb-5 mt-1 text-sm text-ink-soft">A few details and we’ll be in touch.</p>
              <QuoteForm compact />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={`bg-white ${section}`}>
          <div className={container}>
            <SectionHead
              title="Our services"
              action={{ href: "/services", label: "All services" }}
            />
            <ServiceCatalogue />
          </div>
        </section>

        {/* About */}
        <section className="overflow-hidden border-y border-line bg-sandstone text-bluestone">
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
                className="rounded-sm object-cover object-[28%_50%]"
              />
            </div>
            <Reveal className="flex flex-col justify-center">
              <h2 className="section-title">
                Your home.
                <br />
                Our craftsmanship.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                A local Adelaide team that preps properly, keeps a tidy site and
                finishes every wall with care.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex min-h-11 items-center gap-4 self-start border-b border-line pb-2 text-sm font-semibold transition-colors hover:border-ochre hover:text-ochre-dark"
              >
                About Max Wall <Arrow />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Inspiration */}
        <section id="inspiration" className={section}>
          <div className={container}>
            <SectionHead title="Ideas for your home" />
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {projectIdeas.map((idea, index) => (
                <Reveal key={idea.label} delay={index * 70}>
                  <Link href={idea.href} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sandstone md:aspect-[4/5]">
                      <Image
                        src={idea.image.src}
                        {...blurProps(idea.image)}
                        alt={idea.image.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 90vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <span className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-sm bg-white/95 py-2 pl-4 pr-2 text-sm font-semibold text-bluestone">
                        {idea.label}
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-sandstone transition-colors group-hover:bg-ochre group-hover:text-white">
                          <Arrow className="h-4 w-4" />
                        </span>
                      </span>
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
                className="group inline-flex shrink-0 items-center gap-2 pb-1 text-[0.95rem] font-semibold text-sky"
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
                    className="h-full rounded-xl border border-white/15 bg-white/5 p-6 lg:p-7"
                  >
                    <span className="font-display text-4xl font-bold text-sky sm:text-5xl">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 font-display text-2xl tracking-wide uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-white/75">{step.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <div className="mt-8 sm:mt-10">
              <Button href="/contact">Get a free quote</Button>
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
