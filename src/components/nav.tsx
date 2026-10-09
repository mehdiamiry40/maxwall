"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow, Logo, MailIcon, PhoneIcon } from "@/components/brand";
import { nav, phoneHref, services, site } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

/**
 * Two-tier header after topcash4cars.com.au: a white bar with the logo, email and a
 * orange call button, then a navy menu bar that sticks to the top while scrolling.
 * On phones the white bar sticks instead and the menu opens in a dialog.
 */
export function SiteHeader() {
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
      <div className="sticky top-0 z-40 border-b border-line bg-white text-bluestone lg:static">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6 sm:px-10 lg:h-20 lg:px-12">
          <Logo />
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-2 text-sm text-ink-soft transition-colors hover:text-sky-ink md:flex"
          >
            <MailIcon className="h-4 w-4 text-sky-deep" />
            {site.email}
          </a>
          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              aria-label={`Call ${site.phone}`}
              className="flex items-center gap-3 rounded-lg bg-ochre text-white shadow-sm transition-colors hover:bg-ochre-dark sm:py-1.5 sm:pl-1.5 sm:pr-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md sm:bg-white sm:text-ochre">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span className="hidden font-display text-xl font-bold sm:inline">
                Call {site.phone}
              </span>
            </a>
            <button
              type="button"
              onClick={openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-lg border border-line lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
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
      </div>

      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-40 hidden bg-bluestone text-white shadow-sm lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-stretch justify-between px-6 sm:px-10 lg:px-12">
          <div className="flex items-stretch">
            {[{ label: "Home", href: "/" }, ...nav].map((n) => {
              const active = isActive(pathname, n.href);
              const linkClass = `flex h-12 items-center gap-1.5 px-4 font-display text-[0.95rem] tracking-wide uppercase transition-colors ${
                active ? "bg-ochre text-white" : "hover:bg-white/10"
              }`;
              if (n.href !== "/services") {
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={linkClass}
                  >
                    {n.label}
                  </Link>
                );
              }
              // Services opens a panel listing every service on hover or keyboard focus
              return (
                <div key={n.href} className="group relative flex">
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={linkClass}
                  >
                    {n.label}
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
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-[34rem] opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 rounded-b-xl border border-line bg-white p-3 text-ink shadow-xl shadow-ink/15">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="rounded-lg p-3 transition-colors hover:bg-sky-soft"
                        >
                          <span className="block text-sm font-semibold text-bluestone">
                            {s.title}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed font-normal text-ink-soft">
                            {s.body}
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="col-span-2 mt-1 flex items-center justify-between bg-bluestone px-3 py-3 text-xs font-semibold text-white hover:bg-bluestone-soft"
                      >
                        Explore all services <Arrow />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href={pathname === "/" ? "/#quote" : "/contact"}
            className="my-2 flex items-center gap-3 rounded-md border border-white/60 px-4 font-display text-[0.95rem] tracking-wide uppercase transition-colors hover:bg-white hover:text-bluestone"
          >
            Free quote <Arrow />
          </Link>
        </div>
      </nav>

      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
        className="mobile-menu"
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-6 text-bluestone">
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
                  className={`flex min-h-14 items-center justify-between py-4 font-display text-xl tracking-wide uppercase ${isActive(pathname, n.href) ? "text-ochre-dark" : "text-bluestone"}`}
                >
                  {n.label}
                  <Arrow className="h-5 w-5 text-sky-deep" />
                </Link>
                {n.href === "/services" && (
                  <ul className="grid grid-cols-2 gap-2 pb-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={closeMenu}
                          className="flex min-h-11 items-center text-sm leading-relaxed text-ink-soft hover:text-ochre-dark"
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
            className="mt-6 flex min-h-13 items-center justify-between rounded-lg bg-bluestone px-6 font-display text-lg tracking-wide text-white uppercase"
          >
            Get a free quote <Arrow />
          </Link>
          <a
            href={phoneHref}
            className="mt-3 flex min-h-13 items-center justify-center gap-3 rounded-lg bg-ochre font-display text-lg tracking-wide text-white uppercase"
          >
            <PhoneIcon />
            {site.phone}
          </a>
        </nav>
      </dialog>
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
        className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ochre font-display text-lg tracking-wide text-white uppercase"
      >
        <PhoneIcon />
        Call now
      </a>
      <Link
        href={pathname === "/" ? "/#quote" : "/contact"}
        className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-bluestone font-display text-lg tracking-wide text-white uppercase"
      >
        Free quote <Arrow />
      </Link>
    </div>
  );
}
