"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow, Logo, PhoneIcon } from "@/components/brand";
import { nav, phoneHref, services, site } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function openMenu() {
    dialog.current?.showModal();
    setOpen(true);
  }

  function closeMenu() {
    dialog.current?.close();
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-render/95 text-ink backdrop-blur-md">
        <div className="bg-bluestone text-white/80">
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-6 text-[0.65rem] sm:px-10 lg:px-12">
            <p className="flex items-center gap-2 tracking-[0.09em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dc9474]" />{" "}
              Adelaide&apos;s render &amp; cladding specialists
            </p>
            <div className="hidden items-center gap-6 sm:flex">
              <span>{site.hours}</span>
              <a
                href={phoneHref}
                className="flex items-center gap-2 font-medium text-white hover:text-[#edb59b]"
              >
                <PhoneIcon className="h-3 w-3" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-6 sm:px-10 lg:h-20 lg:px-12">
          <Logo />
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-[0.8rem] font-medium lg:flex"
          >
            {nav.map((n) => {
              const active = isActive(pathname, n.href);
              const link = (
                <Link
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex min-h-11 items-center gap-1.5 transition-colors hover:text-ochre ${active ? "text-ochre" : "text-ink-soft"}`}
                >
                  {n.label}
                  {n.href === "/services" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                  {active && (
                    <span className="absolute inset-x-0 bottom-1 h-px bg-ochre" />
                  )}
                </Link>
              );
              if (n.href !== "/services") return <div key={n.href}>{link}</div>;
              return (
                <div key={n.href} className="group relative">
                  {link}
                  <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-4 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 rounded-sm border border-line bg-white p-3 shadow-xl shadow-ink/10">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="rounded-sm p-3 transition-colors hover:bg-render"
                        >
                          <span className="block text-sm font-semibold">
                            {s.title}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed font-normal text-ink-soft">
                            {s.body}
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="col-span-2 mt-1 flex items-center justify-between rounded-sm bg-sandstone px-3 py-3 text-xs font-semibold text-ochre-dark hover:bg-line"
                      >
                        Explore all services <Arrow />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden min-h-11 items-center gap-5 rounded-sm bg-ochre px-5 text-[0.8rem] font-semibold text-white transition-colors hover:bg-ochre-dark sm:inline-flex"
            >
              Get a free quote <Arrow />
            </Link>
            <button
              type="button"
              onClick={openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
        className="mobile-menu"
      >
        <div className="flex h-26 shrink-0 items-center justify-between border-b border-line px-6">
          <span onClick={closeMenu}>
            <Logo />
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5 5 19" />
            </svg>
          </button>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="overflow-y-auto px-6 pb-8 pt-4"
        >
          <ul className="divide-y divide-line">
            {[{ label: "Home", href: "/" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={closeMenu}
                  aria-current={isActive(pathname, n.href) ? "page" : undefined}
                  className={`flex min-h-14 items-center justify-between py-4 text-xl font-semibold ${isActive(pathname, n.href) ? "text-ochre" : ""}`}
                >
                  {n.label}
                  <Arrow className="h-5 w-5 text-ink-soft" />
                </Link>
                {n.href === "/services" && (
                  <ul className="grid grid-cols-2 gap-2 pb-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={closeMenu}
                          className="flex min-h-11 items-center text-sm leading-relaxed text-ink-soft hover:text-ochre"
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
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 flex min-h-13 items-center justify-between rounded-sm bg-ochre px-5 font-semibold text-white"
          >
            Get a free quote <Arrow />
          </Link>
          <a
            href={phoneHref}
            className="mt-5 flex min-h-11 items-center justify-center gap-3 font-semibold"
          >
            <PhoneIcon />
            {site.phone}
          </a>
        </nav>
      </dialog>
      {!overlay && <div aria-hidden="true" className="h-26 lg:h-28" />}
    </>
  );
}

export function MobileActionBar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-line bg-render/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href={phoneHref}
        className="flex min-h-12 items-center justify-center gap-2 rounded-sm border border-ink text-sm font-semibold"
      >
        <PhoneIcon />
        Call us
      </a>
      <Link
        href="/contact"
        className="flex min-h-12 items-center justify-center gap-2 rounded-sm bg-ochre text-sm font-semibold text-white"
      >
        Free quote <Arrow />
      </Link>
    </div>
  );
}
