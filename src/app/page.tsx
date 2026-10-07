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
  Reveal,
  SectionHead,
  TextLink,
} from "@/components/ui";
import { FinishGuide } from "@/components/FinishGuide";
import { ServiceCatalogue } from "@/components/ServiceCatalogue";
import { blurProps, images } from "@/lib/images";
import { projectIdeas, projectTypes } from "@/lib/home";
import { areas, faqs, pillars, site, steps } from "@/lib/site";

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
        <section className="relative isolate mx-3 mt-3 overflow-hidden rounded-sm bg-bluestone text-white sm:mx-5 sm:mt-5">
          <Image
            src={hero.src}
            {...blurProps(hero)}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,30,25,.9),rgba(20,30,25,.65))] sm:bg-[linear-gradient(90deg,rgba(20,30,25,.88)_0%,rgba(20,30,25,.65)_35%,rgba(20,30,25,.1)_80%)]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bluestone/55 via-transparent to-transparent" />
          <div
            className={`${container} flex min-h-[650px] flex-col justify-center pb-9 pt-16 sm:min-h-[680px] sm:pb-10 sm:pt-20`}
          >
            <div className="max-w-2xl py-8 sm:py-10">
              <p className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.18em] text-white/85 uppercase sm:text-xs">
                <span className="h-px w-8 bg-[#e4a083]" />
                Render &amp; cladding. Adelaide, SA.
              </p>
              <h1 className="hero-title font-semibold">
                Great walls.
                <br />
                <span className="text-[#e9dfcd]">Better homes.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-[1.8] text-white/85 sm:text-lg">
                Thoughtful finishes. Skilled hands. From a fresh facade to a
                brand-new build, we bring your walls to life.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/contact" className="gap-7">
                  Get a free quote <Arrow />
                </Button>
                <Button
                  href="#services"
                  variant="outline-light"
                  className="border-white/30 bg-white/5"
                >
                  Explore our services
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs text-white/70">
                <Check className="text-[#e4a083]" />
                Free on-site quotes. No obligation.
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/20 pt-6 text-[0.6rem] font-medium tracking-[0.12em] text-white/75 uppercase sm:text-[0.65rem]">
              <p>Homes. Extensions. New beginnings.</p>
              <a
                href="#services"
                aria-label="Discover our services below"
                className="flex min-h-10 items-center gap-3 hover:text-white"
              >
                <span className="hidden sm:inline">Discover Max Wall</span>
                <Arrow className="h-4 w-4 rotate-90" />
              </a>
            </div>
          </div>
        </section>

        <section
          aria-label="The Max Wall difference"
          className="border-b border-line"
        >
          <div className={`${container} grid sm:grid-cols-3`}>
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`flex items-start gap-4 py-7 sm:py-9 ${index > 0 ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-6 lg:pl-9" : ""} ${index < 2 ? "sm:pr-5" : ""}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-1 h-7 w-7 shrink-0 text-ochre"
                >
                  {icons[index]}
                </svg>
                <div>
                  <h2 className="text-sm font-semibold tracking-normal">
                    {index === 0
                      ? "Clear quotes. No surprises."
                      : index === 1
                        ? "Local people. Local knowledge."
                        : "Care in every coat."}
                  </h2>
                  <p className="mt-2 text-xs leading-[1.8] text-ink-soft">
                    {index === 0
                      ? "On-site measurements and a fixed price in writing."
                      : index === 1
                        ? "Adelaide based, from the coast to the Hills."
                        : "Proper preparation. A finish made to last."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-20 sm:py-24">
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
              <h2 className="section-title mt-4 font-semibold">
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
                    <Check className="text-[#e4a083]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center gap-4 self-start border-b border-white/30 pb-2 text-sm font-semibold transition-colors hover:border-[#e4a083] hover:text-[#e4a083]"
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
                const photo = images.services[idea.image];
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

        <section className="py-20 sm:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="From hello to handover"
              title="Less hassle. More peace of mind."
              action={{ href: "/how-we-work", label: "Our process, in detail" }}
            />
            <ol className="grid gap-9 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal
                    delay={index * 70}
                    className="border-t border-line pt-7"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="font-brand text-4xl text-ochre">
                        0{index + 1}
                      </span>
                      <Arrow className="h-5 w-5 text-ink-soft/50" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-[1.9] text-ink-soft">
                      {step.detail}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-ink-soft">
                A few photos, your suburb and an idea of what you&apos;re after.
                That&apos;s all you need to get started.
              </p>
              <TextLink href="/contact">Tell us about your project</TextLink>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-16 sm:py-20">
          <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
            {projectTypes.map((type) => (
              <Reveal key={type.title} className="flex flex-col">
                <p className="text-xs font-semibold tracking-[0.14em] text-ochre uppercase">
                  A good fit for your project / {type.number}
                </p>
                <h2 className="mt-4 text-3xl font-semibold">{type.title}</h2>
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
              <h2 className="section-title mt-4 font-semibold">
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
              <h2 className="section-title mt-4 font-semibold">
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
                      className="text-xl font-normal text-ochre transition-transform group-open:rotate-45"
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
                  className="font-semibold text-ochre-dark underline underline-offset-4"
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
