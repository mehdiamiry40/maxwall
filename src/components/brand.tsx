import Link from "next/link";
import { site } from "@/lib/site";

/** Architectural M: twin rooflines, a blue wall frame and orange return wall. */
export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 25 20 9 32 21 44 9 60 25V55H4V25Zm8 4v18h40V29l-8-8-12 12-12-12-8 8Z"
      />
      <path fill="var(--ochre)" d="M28 35h8v12h24v8H28V35Z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`inline-flex items-center gap-2 sm:gap-3 ${className}`}
    >
      <Mark className="h-9 w-9 shrink-0 sm:h-12 sm:w-12" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[1.35rem] font-bold tracking-[0.035em] sm:text-[1.8rem]">
          MAX WALL
        </span>
        <span className="mt-1.5 text-[0.5rem] font-semibold tracking-[0.12em] sm:text-[0.6rem]">
          BUILDING SOLUTIONS
        </span>
      </span>
    </Link>
  );
}

export type WallIconName =
  | "wall"
  | "cladding"
  | "repair"
  | "quote"
  | "measure"
  | "finish"
  | "location";
const iconPaths: Record<WallIconName, React.ReactNode> = {
  wall: (
    <>
      <path d="M3 4h18v16H3zM3 9h18M3 14h18M9 4v5m6 0v5M9 14v6" />
    </>
  ),
  cladding: (
    <>
      <path d="M3 4h18v16H3zM3 9h18M3 14h18" />
    </>
  ),
  repair: (
    <>
      <path d="m4 20 7-7m2-2 7-7M14 3l7 7-6 6-7-7zM3 21l-1-5 5 1" />
    </>
  ),
  quote: (
    <>
      <path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h7m-7 4h5" />
    </>
  ),
  measure: (
    <>
      <path d="m3 16 13-13 5 5L8 21zM13 6l3 3M10 9l2 2m-5 1 3 3M4 15l2 2" />
    </>
  ),
  finish: (
    <>
      <path d="M4 3h14v7H4zM18 6h3v8H11v7M4 6H2" />
    </>
  ),
  location: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <path d="M9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z" />
    </>
  ),
};

export function WallIcon({
  name,
  className = "h-8 w-8",
}: {
  name: WallIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="miter"
      strokeLinecap="square"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}
