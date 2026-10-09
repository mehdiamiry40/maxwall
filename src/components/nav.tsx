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
 * RMI-inspired white header: brand at left, contacts above blue navigation.
 * The mobile navigation retains native modal focus and Escape handling.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1280px)");
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
      <header className="sticky top-0 z-40 border-b border-line bg-white text-bluestone">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-5 sm:px-10 xl:min-h-28 lg:px-12 xl:py-0">
          <Logo className="shrink-0" />
          <div className="hidden flex-col items-end xl:flex">
            <div className="flex items-center gap-7 py-2 text-sm font-semibold">
              <span className="text-bluestone">Adelaide &amp; the Hills</span>
              <a
                href={phoneHref}
                className="inline-flex min-h-9 items-center gap-2 hover:text-bluestone"
              >
                <PhoneIcon /> {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-9 items-center gap-2 hover:text-bluestone"
              >
                <MailIcon /> {site.email}
              </a>
            </div>
            <nav
              aria-label="Main navigation"
              className="relative flex items-center"
            >
              {[{ label: "Home", href: "/" }, ...nav].map((n) => {
                const active = isActive(pathname, n.href);
                const linkClass = `flex min-h-12 items-center gap-1.5 px-3 text-sm font-semibold uppercase transition-colors ${
                  active
                    ? "text-bluestone underline decoration-ochre underline-offset-8"
                    : "hover:underline hover:decoration-ochre hover:underline-offset-8"
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
                  <div key={n.href} className="group flex">
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
                    <div className="invisible absolute right-0 top-full z-50 w-[34rem] max-w-[calc(100vw-3rem)] opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="grid grid-cols-2 gap-1  border border-line bg-white p-3 text-ink  ">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className=" p-3 transition-colors hover:bg-sky-soft"
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
            </nav>
          </div>
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={phoneHref}
              aria-label={`Call ${site.phone}`}
              className="grid h-11 w-11 place-items-center  bg-bluestone text-white"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center  border border-line"
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
                  className={`flex min-h-14 items-center justify-between py-4 font-display text-xl tracking-wide uppercase ${isActive(pathname, n.href) ? "text-bluestone" : "text-bluestone"}`}
                >
                  {n.label}
                  <Arrow className="h-5 w-5 text-sky-deep" />
                </Link>
                {n.href === "/services" && (
                  <ul className="grid grid-cols-1 gap-2 pb-4 sm:grid-cols-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={closeMenu}
                          className="flex min-h-11 items-center text-sm leading-relaxed text-ink-soft hover:text-bluestone"
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
            className="mt-6 flex min-h-13 items-center justify-between  bg-bluestone px-6 font-display text-lg tracking-wide text-white uppercase"
          >
            Get a free quote <Arrow />
          </Link>
          <a
            href={phoneHref}
            className="mt-3 flex min-h-13 items-center justify-center gap-3  bg-ochre font-display text-xl font-bold tracking-wide text-white uppercase"
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
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-line bg-render p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]  md:hidden">
      <a
        href={phoneHref}
        className="flex min-h-12 items-center justify-center gap-2  bg-ochre font-display text-xl font-bold tracking-wide text-white uppercase"
      >
        <PhoneIcon />
        Call now
      </a>
      <Link
        href={pathname === "/" ? "/#quote" : "/contact"}
        className="flex min-h-12 items-center justify-center gap-2  bg-bluestone font-display text-lg tracking-wide text-white uppercase"
      >
        Free quote <Arrow />
      </Link>
    </div>
  );
}
