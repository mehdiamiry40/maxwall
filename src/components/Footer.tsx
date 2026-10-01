import Link from "next/link";
import { Logo } from "./Logo";
import { areas, nav, phoneHref, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy pb-20 text-white sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.7fr]">
          <div>
            <FooterHeading>Contact Information</FooterHeading>
            <ul className="mt-6 space-y-3 text-base text-white/85">
              <li>
                <span className="font-semibold text-white">Mobile:</span>{" "}
                <a href={phoneHref} className="transition hover:text-white/70">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href={`mailto:${site.email}`} className="transition hover:text-white/70">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">ABN:</span> {site.abn}
              </li>
              <li>
                <span className="font-semibold text-white">Open Hours:</span> {site.hours}
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-6 space-y-3 text-base">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-white/85 transition hover:text-white/70">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Service Areas</FooterHeading>
            <ul className="mt-6 space-y-3 text-base text-white/85">
              {areas.map((area) => (
                <li key={area.name}>{area.name}</li>
              ))}
              <li>Greater Adelaide</li>
            </ul>
          </div>

          <nav aria-label="Company">
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-6 space-y-3 text-base">
              {nav
                .filter((link) => link.href.startsWith("/#"))
                .map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/85 transition hover:text-white/70">
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-4">
            <div className="mt-4 flex flex-col gap-6 border-t border-white/15 pt-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Logo tone="light" />
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55">
                  Adelaide render, cladding and Hebel services with clean workmanship and honest,
                  fixed-price quotes.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
                <span>
                  Photography via{" "}
                  <a href="https://unsplash.com" className="underline transition hover:text-white" rel="noopener">
                    Unsplash
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8 text-sm text-white/55">
          <p>
            © {new Date().getFullYear()} {site.legalName}. ABN {site.abn}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">{children}</h3>;
}
