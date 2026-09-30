import Image from "next/image";
import {
  Button,
  CallButton,
  Check,
  container,
  CtaSection,
  Eyebrow,
  Footer,
  Header,
  SectionHead,
  ServiceCard,
  TextLink,
} from "@/components/ui";
import { images } from "@/lib/images";
import { areas, pillars, services, site, steps } from "@/lib/site";

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

const trust = ["Free on-site quotes", "Fixed written prices", "All of Adelaide"];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header overlay />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-bluestone pb-16 pt-40 text-white sm:pb-24">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(28_38_45/0.35)_0%,rgb(28_38_45/0.2)_40%,rgb(28_38_45/0.9)_100%)]" />
          <div className={container}>
            <Eyebrow light>Render &amp; cladding · Adelaide</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[2.7rem] font-bold leading-[1.02] sm:text-6xl md:text-7xl">
              Walls that make a lasting first impression.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Cement and acrylic render, Hebel and cladding for homes, extensions and new builds.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">Get a free quote</Button>
              <CallButton variant="outline-light" />
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[0.95rem] font-medium text-white/90">
              {trust.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Check className="text-ochre" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Promises */}
        <section className="border-b border-line bg-white">
          <div className={`${container} grid md:grid-cols-3`}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`py-10 md:px-8 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : "md:pl-0"} ${i === 2 ? "md:pr-0" : ""}`}
              >
                <p className="text-sm font-bold text-ochre">0{i + 1}</p>
                <h2 className="mt-3 text-xl font-bold">{p.title}</h2>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-28">
          <div className={container}>
            <SectionHead
              eyebrow="Services"
              title="Everything your walls need, from one team"
              action={{ href: "/services", label: "All services" }}
            />
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-sandstone">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px]">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[28%_50%]"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-16 sm:px-12 md:py-20">
              <Eyebrow>About Max Wall</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold leading-[1.1] sm:text-[2.6rem]">
                Local, careful and easy to deal with
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                We render and clad homes, extensions and new builds across Adelaide, and handle the
                whole wall from panel install to final coat. Honest pricing, tidy sites and a finish
                we&apos;re proud to put our name to.
              </p>
              <div className="mt-8">
                <TextLink href="/about">More about us</TextLink>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 sm:py-28">
          <div className={container}>
            <SectionHead
              eyebrow="How it works"
              title="Three simple steps"
              action={{ href: "/how-we-work", label: "How we work" }}
            />
            <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((s, i) => (
                <li key={s.title} className="border-t-2 border-ink pt-6">
                  <p className="text-sm font-bold text-ochre">Step {i + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Areas */}
        <section className="border-t border-line bg-white py-14">
          <div className={`${container} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
            <div>
              <h2 className="text-2xl font-bold">Working right across Adelaide</h2>
              <p className="mt-2 text-ink-soft">{areas.map((a) => a.name).join(" · ")}</p>
            </div>
            <TextLink href="/areas">See all suburbs</TextLink>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
