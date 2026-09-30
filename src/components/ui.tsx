import Image from "next/image";
import Link from "next/link";
import { MobileMenu, NavLinks } from "@/components/nav";
import { images, type Photo } from "@/lib/images";
import { nav, phoneHref, services, site, type Service } from "@/lib/site";

export const container = "mx-auto w-full max-w-5xl px-5 sm:px-8";

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

/** Wordmark: MAX WALL over a letter-spaced descriptor, split by a single rendered "course" line. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="font-display text-[1.7rem] tracking-[0.14em] sm:text-[2.3rem]">MAX WALL</span>
      <span className="mt-1.5 h-px w-full bg-current opacity-60" />
      <span className="mt-1.5 text-[0.56rem] font-semibold tracking-[0.42em] sm:text-[0.68rem]">
        RENDER · CLADDING
      </span>
    </Link>
  );
}

export function Pill({
  href,
  children,
  variant = "ochre",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "ochre" | "white" | "outline";
  className?: string;
}) {
  const styles = {
    ochre: "bg-ochre text-white hover:bg-ochre-dark",
    white: "bg-white text-ochre hover:bg-sandstone",
    outline: "border border-current hover:bg-white/10",
  }[variant];
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.95rem] transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-ochre-dark">
      <span className="underline decoration-ochre/40 underline-offset-4 transition group-hover:decoration-ochre">
        {children}
      </span>
      <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}

/** Stacked weatherboard courses of varying length, one picked out in ochre. */
export function CoursesMotif({ className = "" }: { className?: string }) {
  const rows = [
    [0, 100], [8, 92], [0, 84], [16, 100], [0, 70], [10, 100],
    [0, 90], [24, 100], [0, 78], [6, 100], [0, 88], [18, 96],
  ];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {rows.map(([x1, x2], i) => (
        <rect
          key={i}
          x={x1}
          y={i * 8.4}
          width={x2 - x1}
          height="4.6"
          rx="0.6"
          fill={i === 4 ? "var(--ochre)" : "currentColor"}
          opacity={i === 4 ? 1 : 0.85 - i * 0.04}
        />
      ))}
    </svg>
  );
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const tone = overlay ? "text-white" : "text-ink";
  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0" : "relative border-b border-black/10 bg-render"} z-30 ${tone}`}>
      <div className="mx-auto max-w-7xl px-4 pb-5 pt-6 sm:px-8 sm:pt-8">
        <div className="grid grid-cols-[1fr_auto] items-start md:grid-cols-[1fr_auto_1fr]">
          <a href={phoneHref} className="hidden items-center gap-2 pt-4 text-sm opacity-90 hover:opacity-100 md:flex">
            <PhoneIcon /> {site.phone}
          </a>
          <div className="justify-self-start md:justify-self-center">
            <Logo />
          </div>
          <div className="flex items-start justify-end gap-3 pt-1">
            <Pill href="/contact" className="hidden !px-6 !py-2.5 sm:inline-flex">
              Free Quote
            </Pill>
            <MobileMenu />
          </div>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}

/** Full-bleed photo hero used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: Photo;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[64svh] items-end overflow-hidden bg-bluestone pb-16 pt-52 text-white sm:pb-20">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(31_43_51/0.6)_0%,rgb(31_43_51/0.25)_35%,rgb(31_43_51/0.85)_100%)]" />
      <div className={container}>
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase opacity-80">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-[2.6rem] leading-[1.08] sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-xl text-lg opacity-90">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

/** Full-bleed photo strip that heads a section, SOL-style. */
export function Banner({
  id,
  title,
  image,
  href,
}: {
  id?: string;
  title: string;
  image: Photo;
  href?: string;
}) {
  const inner = (
    <>
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="-z-20 object-cover transition duration-700 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 -z-10 bg-bluestone/45 transition group-hover:bg-bluestone/35" />
      <div className={`${container} flex items-center justify-between gap-6`}>
        <h2 className="font-display text-4xl drop-shadow-sm sm:text-5xl">{title}</h2>
        {href && <Arrow className="hidden h-9 w-9 transition group-hover:translate-x-2 sm:block" />}
      </div>
    </>
  );
  const cls = "group relative isolate flex h-56 scroll-mt-4 items-center overflow-hidden text-white sm:h-80";
  return href ? (
    <Link id={id} href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <div id={id} className={cls}>
      {inner}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const img = images.services[service.slug];
  return (
    <Link href={`/services/${service.slug}`} className="group block">
      {img && (
        <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-sandstone">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="font-display text-2xl">{service.title}</h3>
      <div className="my-4 h-px bg-ochre transition-all duration-500 group-hover:bg-ochre-dark" />
      <p className="leading-relaxed text-ink-soft">{service.body}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm text-ochre-dark">
        Learn more <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl sm:text-2xl">
            {f.q}
            <span className="text-3xl leading-none text-ochre transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Closing call to action shared by every page. */
export function CtaSection({
  title = "Ready for walls you'll love?",
  body = "Tell us about your project and we'll come out, measure up and give you a fixed written quote. Free, with no obligation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-sandstone py-24">
      <div className={`${container} relative z-10`}>
        <h2 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">{body}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Pill href="/contact">Get a Free Quote</Pill>
          <Pill href={phoneHref} variant="outline" className="text-ink">
            <PhoneIcon /> {site.phone}
          </Pill>
        </div>
      </div>
      <CoursesMotif className="pointer-events-none absolute -right-10 bottom-0 w-64 text-bluestone/15 md:right-10 md:top-1/2 md:w-80 md:-translate-y-1/2" />
    </section>
  );
}

export function Footer() {
  const company = nav.filter((n) => n.href !== "/services");
  return (
    <footer className="relative isolate overflow-hidden bg-bluestone text-white">
      <Image src={images.dusk.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-bluestone/80" />
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed opacity-80">
              Render and cladding specialists servicing homeowners and builders across {site.city}.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase opacity-60">Services</p>
            <ul className="mt-5 space-y-2.5 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="opacity-85 hover:opacity-100 hover:underline">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase opacity-60">Company</p>
            <ul className="mt-5 space-y-2.5 text-[0.95rem]">
              {company.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="opacity-85 hover:opacity-100 hover:underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase opacity-60">Get in touch</p>
            <div className="mt-5 space-y-2.5 text-[0.95rem]">
              <a href={phoneHref} className="flex items-center gap-2 font-display text-2xl">
                <PhoneIcon className="h-5 w-5 text-ochre" /> {site.phone}
              </a>
              <p>
                <a href={`mailto:${site.email}`} className="opacity-85 hover:opacity-100 hover:underline">
                  {site.email}
                </a>
              </p>
              <p className="opacity-85">{site.hours}</p>
              <p className="opacity-85">{site.city}, {site.region}</p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/25 pt-6 text-sm opacity-75 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
            <span className="mx-2">|</span>
            ABN {site.abn}
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </p>
          <p className="text-xs">
            Photography via{" "}
            <a href="https://unsplash.com" className="underline" rel="noopener">Unsplash</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
