import Image from "next/image";
import Link from "next/link";
import { Arrow, Logo, Mark, PhoneIcon } from "@/components/brand";
import { MobileActionBar, SiteHeader } from "@/components/nav";
import { Reveal } from "@/components/Reveal";
import { blurProps, type Photo } from "@/lib/images";
import { nav, phoneHref, services, site } from "@/lib/site";

export { Arrow, Logo, PhoneIcon, Reveal };
export { ServiceCard } from "@/components/ServiceCard";

export const container = "mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12";

/** Vertical rhythm shared by every full-width section: 64px phone, 80px tablet, 96px desktop. */
export const section = "py-12 sm:py-16 lg:py-20";

type ButtonVariant = "primary" | "dark" | "light" | "outline" | "outline-light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-ochre text-white shadow-sm hover:bg-ochre-dark hover:shadow-md",
  dark: "bg-bluestone text-white hover:bg-bluestone-soft",
  light: "bg-white text-bluestone hover:bg-sandstone",
  outline:
    "border border-bluestone text-bluestone hover:bg-bluestone hover:text-white",
  "outline-light":
    "border border-white/60 text-white hover:bg-white hover:text-bluestone",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 py-3 font-display text-[1rem] font-bold tracking-wide uppercase transition duration-200 ${buttonStyles[variant]} ${className}`;
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function CallButton({
  variant = "outline",
}: {
  variant?: ButtonVariant;
}) {
  return (
    <Button href={phoneHref} variant={variant}>
      <PhoneIcon /> {site.phone}
    </Button>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-sky-ink transition-colors hover:text-bluestone"
    >
      {children}
      <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? "text-sky" : "text-sky-ink"}`}
    >
      {children}
    </p>
  );
}

/** Eyebrow + heading, with an optional link aligned to the right on wide screens. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  action?: { href: string; label: string };
}) {
  return (
    <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 sm:mb-10 lg:mb-12">
      <div className="max-w-2xl">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={`section-title text-bluestone ${eyebrow ? "mt-3" : ""}`}>
          {title}
        </h2>
        {intro && (
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
        )}
      </div>
      {action && (
        <div className="shrink-0 pb-1">
          <TextLink href={action.href}>{action.label}</TextLink>
        </div>
      )}
    </Reveal>
  );
}

export function Check({ className = "text-sky-deep" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className={`mt-[0.2em] h-4 w-4 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Header() {
  return (
    <>
      <SiteHeader />
      <MobileActionBar />
    </>
  );
}

/** Sky-blue backdrop with the photo blended in on the right (home and inner-page heroes). */
export function SkyBackdrop({ image }: { image: Photo }) {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-bluestone" />
      <div className="absolute inset-y-0 right-0 -z-20 w-full [mask-image:linear-gradient(90deg,transparent,black_85%)] md:w-3/4">
        <Image
          src={image.src}
          {...blurProps(image)}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 768px) 75vw, 100vw"
          className="object-cover opacity-25"
        />
      </div>
    </>
  );
}

/** Sky-blue header used at the top of inner pages, with breadcrumbs in a navy band. */
export function PageHero({
  crumb,
  title,
  intro,
  image,
  children,
}: {
  crumb?: { label: string; href?: string }[];
  title: string;
  intro?: string;
  image: Photo;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden py-16 text-white sm:py-20">
        <SkyBackdrop image={image} />
        <div className={container}>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] drop-shadow-sm sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-white/90">
              {intro}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          )}
        </div>
      </section>
      {crumb && (
        <nav
          aria-label="Breadcrumb"
          className="border-b border-line bg-render text-sm text-ink-soft"
        >
          <div
            className={`${container} flex flex-wrap items-center gap-2 py-3`}
          >
            <Link href="/" className="hover:text-sky-ink">
              Home
            </Link>
            {crumb.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-sky">
                  ›
                </span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-sky-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-bluestone">
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

/**
 * Photo on one half running to the edge of the screen, content on the other half.
 * On phones the photo stacks above the content.
 */
export function SplitSection({
  image,
  imagePosition = "object-center",
  side = "left",
  className = "bg-sandstone",
  children,
}: {
  image: Photo;
  imagePosition?: string;
  side?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}) {
  const right = side === "right";
  return (
    <section className={`relative ${className}`}>
      <div
        className={`relative aspect-[4/3] md:absolute md:inset-y-0 md:aspect-auto md:w-1/2 ${right ? "md:right-0" : "md:left-0"}`}
      >
        <Image
          src={image.src}
          {...blurProps(image)}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`object-cover ${imagePosition}`}
        />
      </div>
      <div className={`${container} md:grid md:grid-cols-2`}>
        <Reveal
          className={`flex flex-col justify-center py-16 md:min-h-[540px] md:py-24 ${
            right ? "md:col-start-1 md:pr-14" : "md:col-start-2 md:pl-14"
          }`}
        >
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="surface-card overflow-hidden divide-y divide-line">
      {items.map((f) => (
        <details
          key={f.q}
          className="group transition-colors open:bg-sky-soft/70"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-base font-semibold transition-colors hover:text-sky-ink sm:text-lg">
            {f.q}
            <span
              aria-hidden="true"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-sky-deep transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-2xl px-5 pb-5 leading-relaxed text-ink-soft">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

/** Closing call to action shared by every page. */
export function CtaSection({
  title = "Ready for walls you'll love?",
  body = "We'll come out, measure up and give you a fixed written quote. Free, with no obligation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-white/10 bg-bluestone text-white">
      <Reveal
        className={`${container} grid gap-6 py-14 sm:gap-8 sm:py-16 lg:py-20 md:grid-cols-[1.4fr_1fr] md:items-center`}
      >
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">
            {title}
          </h2>
          <p className="mt-3 max-w-lg text-lg leading-relaxed text-white/80">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Button href="/contact">Get a free quote</Button>
          <CallButton variant="outline-light" />
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const company = nav.filter((n) => n.href !== "/services");
  return (
    <footer className="border-t border-line bg-white pb-24 text-bluestone md:pb-0">
      <div className="border-b border-line bg-sandstone px-6 py-9 text-center">
        <a href={`mailto:${site.email}`} className="text-2xl font-semibold text-bluestone hover:text-ochre-dark sm:text-3xl">{site.email}</a>
      </div>
      <div className={`${container} pb-10 pt-16`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-ink-soft">
              Render and cladding for homeowners and builders across {site.city}
              .
            </p>
          </div>
          <FooterList
            title="Services"
            links={services.map((s) => ({
              label: s.title,
              href: `/services/${s.slug}`,
            }))}
          />
          <FooterList title="Company" links={company} />
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-ochre-dark uppercase">
              Contact
            </p>
            <div className="mt-5 space-y-2.5 text-[0.95rem] text-ink-soft">
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-lg font-bold text-bluestone"
              >
                <PhoneIcon className="h-4 w-4 text-ochre" /> {site.phone}
              </a>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-ochre-dark">
                  {site.email}
                </a>
              </p>
              <p>{site.hours}</p>
              <p>
                {site.city}, {site.region}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} · ABN {site.abn} ·{" "}
            <Link href="/privacy" className="hover:text-ochre-dark">
              Privacy
            </Link>
          </p>
          <p className="flex items-center gap-3">
            <Mark className="h-4 w-4 text-bluestone/40" />
            Photography via{" "}
            <a
              href="https://unsplash.com"
              className="underline hover:text-ochre-dark"
              rel="noopener"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-ochre-dark uppercase">
        {title}
      </p>
      <ul className="mt-5 space-y-2.5 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-soft hover:text-ochre-dark">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
