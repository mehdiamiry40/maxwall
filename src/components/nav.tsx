"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, PhoneIcon } from "@/components/brand";
import { nav, phoneHref, services, site } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

/**
 * One-row header fixed to the top. Over a photo hero it starts transparent
 * and turns solid once the page scrolls; everywhere else it's solid.
 */
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const clear = overlay && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          clear
            ? "bg-gradient-to-b from-black/35 to-transparent text-white"
            : "border-b border-line bg-render/95 text-ink backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 text-[0.92rem] font-medium lg:flex">
            {nav.map((n) => {
              const active = isActive(pathname, n.href);
              const link = (
                <Link
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-1 py-2 transition-opacity hover:opacity-100 ${active ? "opacity-100" : "opacity-75"}`}
                >
                  {n.label}
                  {n.href === "/services" && (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                  {active && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-ochre" />}
                </Link>
              );
              if (n.href !== "/services") return <div key={n.href}>{link}</div>;
              // Services opens a panel listing every service on hover or keyboard focus
              return (
                <div key={n.href} className="group relative">
                  {link}
                  <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-4 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 rounded-[3px] border border-line bg-white p-3 text-ink shadow-xl shadow-black/10">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className={`rounded-[3px] p-3 transition-colors hover:bg-render ${
                            pathname === `/services/${s.slug}` ? "bg-render" : ""
                          }`}
                        >
                          <span className="block text-[0.92rem] font-semibold">{s.title}</span>
                          <span className="mt-0.5 block text-[0.8rem] leading-snug font-normal text-ink-soft">{s.body}</span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="col-span-2 mt-1 flex items-center justify-between rounded-[3px] bg-sandstone px-3 py-2.5 text-[0.85rem] font-semibold text-ochre-dark hover:bg-line/60"
                      >
                        Compare all services <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              className="hidden items-center gap-2 px-3 py-2 text-[0.92rem] font-semibold xl:flex"
            >
              <PhoneIcon /> {site.phone}
            </a>
            <Link
              href="/contact"
              className="hidden rounded-[3px] bg-ochre px-4 py-2.5 text-[0.92rem] font-semibold text-white transition hover:bg-ochre-dark sm:inline-flex"
            >
              Free quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside the header: its backdrop-blur would otherwise trap this fixed panel */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-18 z-30 flex flex-col overflow-y-auto border-t border-line bg-render px-5 pb-28 pt-6 text-ink lg:hidden">
          <ul className="divide-y divide-line">
            {[{ label: "Home", href: "/" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-xl font-semibold tracking-tight ${
                    isActive(pathname, n.href) ? "text-ochre" : ""
                  }`}
                >
                  {n.label}
                  <span aria-hidden="true" className="text-ink-soft">→</span>
                </Link>
                {n.href === "/services" && (
                  <ul className="-mt-1 grid grid-cols-2 gap-x-4 gap-y-2 pb-4 pl-1">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className={`text-[0.95rem] ${pathname === `/services/${s.slug}` ? "text-ochre" : "text-ink-soft"}`}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!overlay && <div aria-hidden="true" className="h-18" />}
    </>
  );
}

/** Always-visible call / quote bar on phones. */
export function MobileActionBar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-render/95 p-3 backdrop-blur md:hidden">
      <a
        href={phoneHref}
        className="flex items-center justify-center gap-2 rounded-[3px] border border-ink py-3 text-[0.95rem] font-semibold"
      >
        <PhoneIcon /> Call
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center rounded-[3px] bg-ochre py-3 text-[0.95rem] font-semibold text-white"
      >
        Free quote
      </Link>
    </div>
  );
}
