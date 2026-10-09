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
  SkyBackdrop,
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

// Kept deliberately short: one idea per line. Detail lives on the inner pages.
const heroPoints = ["Render, Hebel and cladding", "Free fixed-price quotes", "All of Adelaide and the Hills"];

const band = ["Fixed written quotes", "Local Adelaide team", "Finishes that last"];
const icons = [
  <path key="quote" d="M8 3h8l4 4v14H4V3h4Zm8 0v5h4M8 12h8m-8 4h5" />,
  <path
    key="local"
    d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  />,
  <path key="finish" d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6" />,
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden text-white">
          <SkyBackdrop image={hero} />
          <div className={`${container} grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-20`}>
            <div>
              <h1>
                <span className="mb-5 block text-sm font-bold tracking-[0.14em] uppercase drop-shadow-sm">
                  Render &amp; cladding Adelaide
                </span>
                <span className="hero-title block">
                  <span className="drop-shadow-sm">Great walls.</span>
                  <br />
                  <span className="text-[#bfe0ff] drop-shadow-sm">Better homes.</span>
                </span>
              </h1>
              <ul className="mt-8 space-y-2.5 text-[1.2rem] font-bold leading-snug">
                {heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 drop-shadow-sm">
                    <Check className="mt-1 h-5 w-5 text-white" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-3 rounded-full bg-ochre py-2 pl-2 pr-7 font-display text-2xl font-bold text-white uppercase shadow-lg shadow-black/20 transition-colors hover:bg-ochre-dark"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-ochre">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  Call {site.phone}
                </a>
                <a href="#quote" className="text-[1.2rem] font-bold underline underline-offset-4 drop-shadow-sm lg:hidden">
                  or get a free quote
                </a>
              </div>
            </div>

            <div id="quote" className="scroll-mt-24">
              <div className="border-t-4 border-ochre bg-white p-6 text-ink shadow-2xl shadow-bluestone/30 sm:p-7">
                <h2 className="mb-5 text-center font-display text-3xl font-bold text-ochre-dark uppercase">
                  Get a free quote
                </h2>
                <QuoteForm compact />
              </div>
            </div>
          </div>

          <div className="bg-bluestone">
            <ul aria-label="The Max Wall difference" className={`${container} grid gap-4 py-5 sm:grid-cols-3`}>
              {band.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-sky"
                  >
                    {icons[index]}
                  </svg>
                  <span className="font-display text-lg tracking-wide uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={`bg-sandstone ${section}`}>
          <div className={container}>
            <SectionHead title="Our services" action={{ href: "/services", label: "All services" }} />
            <ServiceCatalogue />
          </div>
        </section>

        {/* About */}
        <section className="overflow-hidden bg-bluestone text-white">
          <div className={`${container} grid gap-10 ${section} md:grid-cols-2 md:gap-16`}>
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
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
                A local Adelaide team that preps properly, keeps a tidy site and finishes every wall
                with care.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex min-h-11 items-center gap-4 self-start border-b border-white/30 pb-2 text-sm font-semibold transition-colors hover:border-sky hover:text-sky"
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
                      <span className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-white/95 py-2 pl-4 pr-2 text-sm font-semibold text-bluestone">
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
            <p className="mt-4 text-xs text-ink-soft">Inspiration photos, not Max Wall projects.</p>
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
                  <Reveal delay={index * 70} className="h-full border-t-4 border-sky bg-white/5 p-6 lg:p-7">
                    <span className="font-display text-4xl font-bold text-sky sm:text-5xl">0{index + 1}</span>
                    <h3 className="mt-3 font-display text-2xl tracking-wide uppercase">{step.title}</h3>
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
          <div className={`${container} grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
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
          <div className={`${container} flex flex-col gap-5 md:flex-row md:items-center md:justify-between`}>
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

        <CtaSection title="Ready for a fresh look?" body="Free on-site measure and a fixed written quote." />
      </main>
      <Footer />
    </>
  );
}
