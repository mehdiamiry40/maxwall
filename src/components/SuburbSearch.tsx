"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { searchSuburbs } from "@/lib/site";

export function SuburbSearch({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const typed = query.trim();
  const matches = searchSuburbs(typed);
  const visible = compact ? matches.slice(0, 6) : matches;

  return (
    <div className={compact ? "relative w-full md:w-80" : ""}>
      <label htmlFor={id} className={compact ? "sr-only" : "block text-sm font-semibold"}>
        Check your suburb
      </label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={compact ? "Find your suburb" : "Try Glenelg, Salisbury or the Hills"}
        autoComplete="off"
        enterKeyHint="search"
        className={`w-full rounded-[3px] border border-line bg-white px-4 py-3 text-base outline-none transition placeholder:text-ink-soft/60 focus:border-ink ${
          compact ? "bg-render py-2.5 text-[0.95rem]" : "mt-2"
        }`}
      />

      {typed.length >= 2 && matches.length > 0 && (
        <ul
          className={`border border-line bg-white text-left ${
            compact ? "absolute z-20 mt-2 w-full shadow-xl shadow-black/10" : "mt-4"
          }`}
        >
          {visible.map((match) => (
            <li key={`${match.areaId}-${match.name}`} className="border-b border-line last:border-b-0">
              <Link
                href={`/areas#${match.areaId}`}
                className="flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-render"
              >
                <span className="font-semibold">{match.name}</span>
                <span className="text-right text-sm text-ink-soft">
                  {match.kind === "area" ? "Whole area" : match.areaName}
                </span>
              </Link>
            </li>
          ))}
          {matches.length > visible.length && (
            <li className="px-4 py-3 text-sm">
              <Link href="/areas" className="font-semibold text-ochre-dark">
                See all {matches.length} matches
              </Link>
            </li>
          )}
        </ul>
      )}

      {typed.length >= 2 && matches.length === 0 && (
        <p
          className={`text-sm leading-relaxed text-ink-soft ${compact ? "absolute z-20 mt-2 w-full border border-line bg-white p-4 shadow-xl shadow-black/10" : "mt-4"}`}
          role="status"
        >
          {typed} is not on the list. We still work across greater Adelaide.{" "}
          <Link href="/contact" className="font-semibold text-ochre-dark underline">
            Ask us about {typed}
          </Link>{" "}
          and we will tell you straight away.
        </p>
      )}
    </div>
  );
}
