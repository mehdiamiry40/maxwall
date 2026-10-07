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
      <header className="fixed inset-x-0 top-0 z-40 border-t-4 border-navy bg-white text-navy shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6 sm:px-10 lg:h-24 lg:px-12">
          <Logo />
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-3 text-sm text-ink-soft transition-colors hover:text-coral-dark lg:flex"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5 text-coral"
              aria-hidden="true"
            >
              <path d="M3 5h18v14H3V5Zm0 0 9 8 9-8" />
            </svg>
            {site.email}
          </a>
          <div className="flex items-center gap-3">
            <a
              href={phoneHref}
              className="hidden min-h-14 items-center gap-3 rounded-md bg-coral px-5 font-display text-2xl font-semibold tracking-[0.025em] text-white transition-colors hover:bg-coral-dark sm:flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white/70">
                <PhoneIcon className="h-5 w-5" />
              </span>
              CALL {site.phone}
            </a>
            <button
              type="button"
              onClick={openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-sm border border-line lg:hidden"
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
        <div className="bg-navy text-white">
          <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 sm:px-10 lg:h-14 lg:px-12">
            <p className="text-xs text-white/80 lg:hidden">
              Render &amp; cladding · Adelaide
            </p>
            <nav
              aria-label="Main navigation"
              className="hidden h-full items-center font-display text-[0.95rem] font-medium tracking-[0.025em] uppercase lg:flex"
            >
              {[{ label: "Home", href: "/" }, ...nav].map((n) => {
                const active = isActive(pathname, n.href);
                const link = (
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex h-14 items-center gap-2 px-4 transition-colors xl:px-5 ${active ? "bg-coral text-navy" : "text-white hover:bg-navy-soft"}`}
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
                  </Link>
                );
                if (n.href !== "/services")
                  return <div key={n.href}>{link}</div>;
                return (
                  <div key={n.href} className="group relative">
                    {link}
                    <div className="invisible absolute left-0 top-full z-50 w-[32rem] pt-2 normal-case opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="grid grid-cols-2 gap-1 rounded-sm border border-line bg-white p-3 font-sans text-navy shadow-xl shadow-navy/15">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-sm p-3 transition-colors hover:bg-sky-soft"
                          >
                            <span className="block text-sm font-semibold">
                              {service.title}
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed font-normal tracking-normal text-ink-soft">
                              {service.body}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="col-span-2 mt-1 flex items-center justify-between rounded-sm bg-sky-soft px-3 py-3 text-xs font-semibold text-coral-dark hover:bg-line"
                        >
                          Explore all services <Arrow />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>
            <Link
              href={pathname === "/" ? "#hero-quote" : "/contact"}
              className="flex min-h-11 items-center gap-3 font-display text-sm font-medium tracking-[0.04em] uppercase transition-colors hover:text-sky lg:text-base"
            >
              Get a free quote <Arrow />
            </Link>
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
                  className={`flex min-h-14 items-center justify-between py-4 text-xl font-semibold ${isActive(pathname, n.href) ? "text-coral-dark" : ""}`}
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
                          className="flex min-h-11 items-center text-sm leading-relaxed text-ink-soft hover:text-coral-dark"
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
            className="mt-6 flex min-h-13 items-center justify-between rounded-sm bg-coral px-5 font-semibold text-navy"
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
      {!overlay && <div aria-hidden="true" className="h-32 lg:h-[156px]" />}
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
        href={pathname === "/" ? "#hero-quote" : "/contact"}
        className="flex min-h-12 items-center justify-center gap-2 rounded-sm bg-coral text-sm font-semibold text-navy"
      >
        Free quote <Arrow />
      </Link>
    </div>
  );
}
