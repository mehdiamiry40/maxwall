import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  Button,
  Check,
  container,
  CtaSection,
  Eyebrow,
  FaqList,
  Footer,
  Header,
  PhoneIcon,
  Reveal,
  SectionHead,
  SkyBackdrop,
  TextLink,
} from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { FinishGuide } from "@/components/FinishGuide";
import { ServiceCatalogue } from "@/components/ServiceCatalogue";
import { blurProps, images } from "@/lib/images";
import { projectIdeas, projectTypes } from "@/lib/home";
import { areas, faqs, phoneHref, pillars, site, steps } from "@/lib/site";

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
  "Cement & acrylic render, Hebel and cladding",
  "Free on-site measure and fixed written quote",
  "Fresh facades, extensions and new builds",
  "Servicing all of Adelaide & the Hills",
];

const bandTitles = ["Clear quotes. No surprises.", "Local people. Local knowledge.", "Care in every coat."];
const bandBodies = [
  "On-site measurements and a fixed price in writing.",
  "Adelaide based, from the coast to the Hills.",
  "Proper preparation. A finish made to last.",
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
        {/* Hero, after topcash4cars.com.au */}
        <section className="relative isolate overflow-hidden text-white">
          <SkyBackdrop image={hero} />
          <div
            className={`${container} grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-20`}
          >
            <div>
              <h1>
                <span className="mb-5 block text-sm font-bold tracking-[0.14em] uppercase drop-shadow-sm">
                  Render &amp; cladding Adelaide
                </span>
                <span className="hero-title block">
                  <span className="text-bluestone">Great walls.</span>
                  <br />
                  <span className="drop-shadow-sm">Better homes.</span>
                </span>
              </h1>
              <ul className="mt-8 space-y-3 text-[1.2rem] font-bold">
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
                <span className="text-[1.2rem] font-bold drop-shadow-sm lg:hidden">
                  or{" "}
                  <a href="#quote" className="underline underline-offset-4">
                    get a free quote
                  </a>
                </span>
              </div>
            </div>

            <div id="quote" className="scroll-mt-24">
              <div className="border-t-4 border-ochre bg-white p-6 text-ink shadow-2xl shadow-bluestone/30 sm:p-7">
                <h2 className="text-center font-display text-3xl font-bold text-ochre-dark uppercase">
                  Get a free quote
                </h2>
                <p className="mb-5 mt-1 text-center text-sm text-ink-soft">
                  We usually reply within the hour.
                </p>
                <QuoteForm compact />
              </div>
            </div>
          </div>

          {/* Navy band: the Max Wall difference */}
          <div className="bg-bluestone">
            <ul aria-label="The Max Wall difference" className={`${container} grid gap-5 py-6 sm:grid-cols-3 sm:gap-8`}>
              {pillars.map((pillar, index) => (
                <li key={pillar.title} className="flex items-start gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-0.5 h-7 w-7 shrink-0 text-sky"
                  >
                    {icons[index]}
                  </svg>
                  <div>
                    <p className="font-display text-lg tracking-wide uppercase">{bandTitles[index]}</p>
                    <p className="mt-1 text-sm text-white/75">{bandBodies[index]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="bg-sandstone py-20 sm:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="What we do"
              title="Good walls start with the right team."
              intro="From the first panel to the final coat, we take care of every layer. Find the right service for your project."
              action={{ href: "/services", label: "View all services" }}
            />
            <ServiceCatalogue />
          </div>
        </section>

        <section className="overflow-hidden bg-bluestone text-white">
          <div
            className={`${container} grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-20`}
          >
            <div className="relative min-h-80 md:min-h-[470px]">
              <Image
                src={images.about.src}
                {...blurProps(images.about)}
                alt={images.about.alt}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="rounded-sm object-cover object-[28%_50%]"
              />
              <div className="absolute -bottom-4 right-5 max-w-[240px] bg-sandstone p-5 text-ink sm:right-7 sm:p-6">
                <p className="text-sm font-semibold">
                  A good finish starts
                  <br />
                  long before the final coat.
                </p>
                <p className="mt-2 text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
                  The Max Wall approach
                </p>
              </div>
            </div>
            <Reveal className="flex flex-col justify-center pt-3 md:py-8">
              <Eyebrow light>Built on care. Finished with pride.</Eyebrow>
              <h2 className="section-title mt-4">
                Your home.
                <br />
                Our craftsmanship.
              </h2>
              <p className="mt-6 leading-[1.9] text-white/70">
                We&apos;re a local Adelaide team with a simple approach:
                understand the job, prepare it properly, and deliver a finish
                we&apos;re proud to put our name to.
              </p>
              <p className="mt-4 leading-[1.9] text-white/70">
                Whether we&apos;re refreshing a family home or working alongside
                your builder, you get clear communication, an organised site and
                careful attention to the details.
              </p>
              <ul className="mb-8 mt-7 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "One team, start to finish",
                  "Your site treated with care",
                  "Finishes suited to your walls",
                  "A clear scope from day one",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="text-sky" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center gap-4 self-start border-b border-white/30 pb-2 text-sm font-semibold transition-colors hover:border-sky hover:text-sky"
              >
                Get to know Max Wall <Arrow />
              </Link>
            </Reveal>
          </div>
        </section>

        <section id="inspiration" className="py-20 sm:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="Imagine the possibilities"
              title="A little inspiration for your next chapter."
              intro="Different homes. Different finishes. Explore a few looks to help you find your direction."
            />
            <div className="grid gap-9 md:grid-cols-3 md:gap-6">
              {projectIdeas.map((idea, index) => {
                const photo = idea.image;
                return (
                  <Reveal key={idea.title} delay={index * 70}>
                    <Link href={idea.href} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sandstone sm:aspect-[4/3] md:aspect-[4/5]">
                        <Image
                          src={photo.src}
                          {...blurProps(photo)}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 768px) 30vw, 90vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <span className="absolute bottom-4 left-4 rounded-full bg-render/95 px-4 py-2 text-[0.65rem] font-semibold">
                          {idea.label}
                        </span>
                        <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-render/95 transition-colors group-hover:bg-ochre group-hover:text-white">
                          <Arrow className="h-4 w-4 -rotate-45" />
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold">
                        {idea.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {idea.body}
                      </p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
            <p className="mt-8 text-xs text-ink-soft">
              Architectural inspiration photography. These images illustrate
              finish styles and are not Max Wall project photographs.
            </p>
          </div>
        </section>

        <FinishGuide />

        {/* Process, on navy to break up the light sections */}
        <section className="bg-bluestone py-20 text-white sm:py-24">
          <div className={container}>
            <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Eyebrow light>From hello to handover</Eyebrow>
                <h2 className="section-title mt-3">Less hassle. More peace of mind.</h2>
              </div>
              <Link
                href="/how-we-work"
                className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-sky"
              >
                Our process, in detail
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <ol className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={index * 70} className="h-full border-t-4 border-sky bg-white/5 p-7 transition-colors hover:bg-white/10">
                    <span className="font-display text-5xl font-bold text-sky">0{index + 1}</span>
                    <h3 className="mt-5 font-display text-2xl tracking-wide uppercase">{step.title}</h3>
                    <p className="mt-3 text-sm leading-[1.9] text-white/75">{step.detail}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-white/75">
                A few photos, your suburb and an idea of what you&apos;re after. That&apos;s all you need
                to get started.
              </p>
              <Button href="/contact" className="shrink-0">
                Tell us about your project
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-16 sm:py-20">
          <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
            {projectTypes.map((type) => (
              <Reveal key={type.title} className="flex flex-col">
                <p className="text-xs font-semibold tracking-[0.14em] text-sky-ink uppercase">
                  A good fit for your project / {type.number}
                </p>
                <h2 className="font-display mt-4 text-3xl font-bold text-bluestone">{type.title}</h2>
                <p className="mt-4 max-w-lg flex-1 text-sm leading-[1.9] text-ink-soft">
                  {type.body}
                </p>
                <ul className="my-6 space-y-3 text-sm">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check />
                      {feature}
                    </li>
                  ))}
                </ul>
                <TextLink href={type.href}>{type.link}</TextLink>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div
            className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
          >
            <Reveal>
              <Eyebrow>A few things you might be wondering</Eyebrow>
              <h2 className="section-title mt-4 text-bluestone">
                Good questions.
                <br />
                Straight answers.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
                Costs, timing, materials. We&apos;re here to make the choices
                clearer.
              </p>
              <div className="mt-7">
                <TextLink href="/faq">More questions, answered</TextLink>
              </div>
            </Reveal>
            <FaqList
              items={[
                faqs[0],
                faqs[1],
                faqs[2],
                faqs[4],
                faqs[faqs.length - 1],
              ]}
            />
          </div>
        </section>

        <section className="bg-sandstone py-16 sm:py-20">
          <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
            <Reveal className="flex flex-col justify-center">
              <Eyebrow>Proudly local</Eyebrow>
              <h2 className="section-title mt-4 text-bluestone">
                Adelaide is home.
                <br />
                Your suburb is, too.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                From Gawler to Seaford, the western beaches to the Adelaide
                Hills. We work with homeowners and builders right across the
                city.
              </p>
              <div className="mt-7">
                <TextLink href="/areas">Explore our service areas</TextLink>
              </div>
            </Reveal>
            <div className="rounded-sm border border-line bg-render px-6 sm:px-8">
              {areas.map((area) => (
                <details
                  key={area.id}
                  className="group border-b border-line last:border-0"
                >
                  <summary className="flex min-h-18 list-none items-center justify-between gap-4 py-5 text-sm font-semibold">
                    {area.name}
                    <span
                      aria-hidden="true"
                      className="text-xl font-normal text-sky-deep transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-sm leading-[1.9] text-ink-soft">
                    {area.suburbs.join(" · ")}
                  </p>
                </details>
              ))}
              <p className="pb-6 pt-5 text-xs leading-relaxed text-ink-soft">
                Don&apos;t see your suburb?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-sky-ink underline underline-offset-4"
                >
                  Get in touch
                </Link>{" "}
                and we&apos;ll confirm coverage.
              </p>
            </div>
          </div>
        </section>

        <CtaSection
          title="Let's make your home feel like you."
          body="A fresh look starts with a conversation. Tell us what you have in mind, and we'll take it from there."
        />
      </main>
      <Footer />
    </>
  );
}
