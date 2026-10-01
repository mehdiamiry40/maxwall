export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const wordClass = tone === "light" ? "text-white" : "text-bluestone";
  const subClass = tone === "light" ? "text-white/65" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-4 ${className}`}>
      <LogoMark tone={tone} className="h-12 w-12 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-2xl font-semibold ${wordClass}`}>Max Wall</span>
        <span className={`text-sm font-medium sm:text-base ${subClass}`}>Render | Cladding</span>
      </span>
    </span>
  );
}

/** A rendered block split into weatherboard courses, the middle one in ochre. */
export function LogoMark({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="4" y="4" width="56" height="56" fill={tone === "light" ? "#2d3d47" : "#1b2a33"} />
      <rect x="12" y="15" width="40" height="8" fill="#ffffff" />
      <rect x="12" y="28" width="28" height="8" fill="#a35f2c" />
      <rect x="12" y="41" width="40" height="8" fill="#ffffff" />
    </svg>
  );
}
