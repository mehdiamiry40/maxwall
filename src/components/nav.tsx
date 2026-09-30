"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, PhoneIcon } from "@/components/brand";
import { nav, phoneHref, site } from "@/lib/site";

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
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 transition-opacity hover:opacity-100 ${active ? "opacity-100" : "opacity-75"}`}
                >
                  {n.label}
                  {active && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-ochre" />}
                </Link>
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
