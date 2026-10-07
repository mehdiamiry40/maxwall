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
import { QuoteForm } from "@/components/QuoteForm";
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
        <section
          aria-label="Render and cladding in Adelaide"
          className="relative overflow-hidden bg-sky"
        >
          <div
            className={`${container} grid gap-10 py-9 sm:py-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14 lg:py-10`}
          >
            <div className="min-w-0">
              <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-navy uppercase">
                <span className="h-2 w-2 rounded-full bg-white" />{" "}
                Adelaide&apos;s local wall specialists
              </p>
              <h1 className="hero-title font-bold uppercase">
                Render &amp; cladding.
                <br />
                <span className="text-white">Built for Adelaide.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy">
                Give your home a finish that lasts. Expert cement and acrylic
                render, Hebel and cladding for renovations, extensions and new
                builds.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3 text-[0.8rem] font-semibold text-navy sm:gap-x-5 sm:text-base">
                {[
                  "Free on-site quotes",
                  "Fixed written prices",
                  "Install to final coat",
                  "All of Adelaide",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <Check className="text-white" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#hero-quote" className="gap-3 max-sm:px-5">
                  <span className="sm:hidden">Free quote</span>
                  <span className="hidden sm:inline">
                    Get a free quote
                  </span>{" "}
                  <Arrow />
                </Button>
                <Button href="#services" variant="dark" className="max-sm:px-5">
                  <span className="sm:hidden">Our services</span>
                  <span className="hidden sm:inline">
                    Explore services
                  </span>{" "}
                  <Arrow />
                </Button>
              </div>
              <div className="relative mt-8 h-52 sm:h-64 lg:h-60">
                <div className="absolute inset-y-0 left-0 right-8 overflow-hidden rounded-sm border-4 border-white bg-white shadow-lg shadow-navy/15 sm:right-12">
                  <Image
                    src={hero.src}
                    {...blurProps(hero)}
                    alt={hero.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover object-[50%_56%]"
                  />
                  <p className="absolute bottom-3 left-3 max-w-[65%] rounded-sm bg-navy/95 px-3 py-2 text-[0.65rem] font-semibold tracking-[0.06em] text-white uppercase">
                    Render &amp; cladding finish inspiration
                  </p>
                </div>
                <div className="absolute -bottom-3 right-0 h-32 w-32 overflow-hidden rounded-sm border-4 border-white bg-white shadow-xl shadow-navy/20 sm:h-40 sm:w-40">
                  <Image
                    src={images.about.src}
                    {...blurProps(images.about)}
                    alt={images.about.alt}
                    fill
                    sizes="160px"
                    className="object-cover object-[25%_50%]"
                  />
                </div>
              </div>
            </div>
            <aside
              id="hero-quote"
              aria-labelledby="hero-quote-heading"
              tabIndex={-1}
              className="relative self-start rounded-sm bg-white p-6 shadow-[0_12px_40px_rgb(3_55_71/0.22)] sm:p-7"
            >
              <svg
                viewBox="0 0 60 100"
                fill="none"
                aria-hidden="true"
                className="absolute -left-14 top-8 hidden h-24 w-12 text-coral lg:block"
              >
                <path
                  d="M7 89C2 48 16 15 49 19m-13-13 14 13-16 12"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2
                id="hero-quote-heading"
                className="text-center text-3xl font-bold tracking-normal text-coral uppercase"
              >
                Get a free quote
              </h2>
              <p className="mb-5 mt-2 text-center text-xs leading-relaxed text-ink-soft">
                Tell us a little about your walls. We&apos;ll take it from
                there.
              </p>
              <QuoteForm compact />
            </aside>
          </div>
        </section>

        <section
          aria-label="The Max Wall difference"
          className="border-b border-white/15 bg-navy text-white"
        >
          <div className={`${container} grid sm:grid-cols-3`}>
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`flex items-start gap-4 py-7 sm:py-9 ${index > 0 ? "border-t border-white/15 sm:border-l sm:border-t-0 sm:pl-6 lg:pl-9" : ""} ${index < 2 ? "sm:pr-5" : ""}`}
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
                  <p className="mt-2 text-xs leading-[1.8] text-white/75">
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
                    <Check className="text-[#309aeb]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center gap-4 self-start border-b border-white/30 pb-2 text-sm font-semibold transition-colors hover:border-[#309aeb] hover:text-[#309aeb]"
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
                <p className="text-xs font-semibold tracking-[0.14em] text-coral-dark uppercase">
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
