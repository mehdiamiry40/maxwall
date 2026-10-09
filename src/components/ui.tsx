import Image from "next/image";
import Link from "next/link";
import { Arrow, Logo, MailIcon, PhoneIcon } from "@/components/brand";
import { MobileActionBar, SiteHeader } from "@/components/nav";
import { Reveal } from "@/components/Reveal";
import { blurProps, type Photo } from "@/lib/images";
import { nav, phoneHref, site } from "@/lib/site";

export { Arrow, Logo, PhoneIcon, Reveal };
export { ServiceCard } from "@/components/ServiceCard";

export const container = "mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12";

/** Vertical rhythm shared by every full-width section: 48px phone, 64px tablet, 80px desktop. */
export const section = "py-12 sm:py-16 lg:py-20";

type ButtonVariant = "primary" | "dark" | "light" | "outline" | "outline-light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-bluestone text-white hover:bg-ochre",
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
  const cls = `inline-flex min-h-12 items-center justify-center gap-3  px-6 py-3 font-display text-[1.2rem] font-bold tracking-wide uppercase transition duration-200 ${buttonStyles[variant]} ${className}`;
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

/** Photograph beside a solid brand-blue panel; never a gradient or tint. */
export function SkyBackdrop({ image }: { image: Photo }) {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-bluestone" />
      <div className="absolute inset-y-0 right-0 -z-20 hidden w-[38%] md:block">
        <Image
          src={image.src}
          {...blurProps(image)}
          alt=""
          fill
          loading="eager"
          sizes="38vw"
          className="object-cover"
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
          <h1 className="max-w-3xl md:max-w-[58%] font-display text-4xl font-bold leading-[1.05]  sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-xl md:max-w-[55%] text-lg font-medium leading-relaxed text-white">
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
                <span aria-hidden="true" className="text-ochre">
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
        <details key={f.q} className="group transition-colors open:bg-sky-soft">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-base font-semibold transition-colors hover:text-sky-ink sm:text-lg">
            {f.q}
            <span
              aria-hidden="true"
              className="grid h-8 w-8 shrink-0 place-items-center  border border-line text-sky-deep transition-transform group-open:rotate-45"
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
          <p className="mt-3 max-w-lg text-lg leading-relaxed text-white">
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
  return (
    <footer className="bg-white pb-24 text-bluestone md:pb-0">
      <div className="bg-bluestone text-white">
        <div
          className={`${container} flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center`}
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 text-xl font-semibold sm:text-2xl"
          >
            <MailIcon className="h-6 w-6" />
            {site.email}
          </a>
          <a
            href={phoneHref}
            className="inline-flex min-h-11 items-center gap-3 text-lg font-semibold"
          >
            <PhoneIcon />
            {site.phone}
          </a>
        </div>
      </div>
      <div className={`${container} py-9`}>
        <div className="flex flex-wrap items-center justify-between gap-7">
          <Logo />
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center text-sm font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-7 flex flex-wrap justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} {site.legalName} · ABN {site.abn}
          </p>
          <p>
            <Link href="/privacy" className="underline">
              Privacy
            </Link>{" "}
            · Photography via{" "}
            <a href="https://unsplash.com" className="underline" rel="noopener">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
