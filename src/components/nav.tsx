"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, phoneHref, site } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="mt-6 hidden justify-center gap-9 text-[0.95rem] md:flex">
      {nav.map((n) => {
        const active = isActive(pathname, n.href);
        return (
          <Link
            key={n.href}
            href={n.href}
            aria-current={active ? "page" : undefined}
            className={`underline-offset-8 transition hover:opacity-100 hover:underline ${
              active ? "underline decoration-ochre decoration-2 opacity-100" : "opacity-90"
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className={`relative z-50 grid h-11 w-11 place-items-center rounded-full border border-current ${open ? "text-white" : ""}`}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 5l14 14M19 5 5 19" />
          </svg>
        ) : (
          <span className="block h-px w-5 bg-current shadow-[0_6px_0_currentColor,0_-6px_0_currentColor]" />
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-bluestone px-6 pb-10 pt-8 text-white">
          <p className="mb-14 font-display text-[1.7rem] leading-none tracking-[0.14em]">MAX WALL</p>
          <ul className="space-y-5">
            {[{ label: "Home", href: "/" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`font-display text-3xl ${isActive(pathname, n.href) ? "text-ochre" : ""}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ochre py-3.5 text-center"
            >
              Get a Free Quote
            </Link>
            <a href={phoneHref} className="rounded-full border border-white/70 py-3.5 text-center">
              Call {site.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
