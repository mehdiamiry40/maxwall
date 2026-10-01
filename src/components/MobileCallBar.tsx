"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { phoneHref } from "@/lib/site";

/**
 * A sticky call / quote bar that slides up on mobile after the user scrolls
 * past the hero.
 */
export function MobileCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2 px-3 pt-3" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}>
        <a
          href={phoneHref}
          className="flex flex-1 items-center justify-center gap-2 border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-ink"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
        <Link
          href="/#contact"
          className="flex flex-[1.4] items-center justify-center bg-ochre px-4 py-3 text-sm font-medium text-white"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
