import type { ReactNode } from "react";
import Reveal from "./Reveal";

type CategorySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tint?: "page" | "soft";
  children: ReactNode;
};

export default function CategorySection({
  id,
  eyebrow,
  title,
  description,
  tint = "page",
  children,
}: CategorySectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-cream-line py-20 ${
        tint === "soft" ? "bg-cream-soft/60" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="mb-12 flex flex-col items-start gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-bordeaux">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-ink-soft">{description}</p>
        </Reveal>

        {children}
      </div>
    </section>
  );
}
