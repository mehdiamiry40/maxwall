import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow = "",
  title,
  description,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  const hasEyebrow = eyebrow.trim().length > 0;
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {hasEyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.08em] ${isLight ? "text-white/60" : "text-ochre"}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`${hasEyebrow ? "mt-4" : ""} font-display text-4xl font-semibold leading-tight sm:text-5xl ${
          isLight ? "text-white" : "text-bluestone"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${isLight ? "text-white/60" : "text-zinc-500"}`}>{description}</p>
      )}
    </Reveal>
  );
}
