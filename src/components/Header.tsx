"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, phoneHref, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-zinc-700 transition hover:text-ochre"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="hidden text-[15px] font-semibold text-ink transition hover:text-ochre md:block"
          >
            {site.phone}
          </a>
          <Link
            href="/#contact"
            className="hidden border border-ochre bg-ochre px-5 py-3 text-sm font-semibold text-white transition hover:bg-ochre-dark md:inline-flex"
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center text-ink transition hover:text-ochre xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 top-24 z-40 xl:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setOpen(false)} aria-hidden />
          <div className="relative border-t border-zinc-200 bg-white px-6 py-6 shadow-xl">
            <div className="flex flex-col">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-zinc-100 py-4 text-lg font-medium text-ink transition hover:text-ochre"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={phoneHref}
                className="border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-medium text-ink"
              >
                Call {site.phone}
              </a>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="bg-ochre px-5 py-3 text-center text-sm font-medium text-white"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
