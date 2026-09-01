"use client";

import { motion } from "framer-motion";
import { INSTAGRAM_HANDLE } from "@/lib/products";

export default function ComingSoonCard({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-cream-line bg-cream-soft/40 px-8 py-16 text-center"
    >
      <span className="rounded-full border border-brass/40 bg-brass/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-brass">
        Próximamente
      </span>
      <h3 className="font-display text-xl uppercase tracking-wide text-ink">
        {label}
      </h3>
      <p className="max-w-sm text-sm text-ink-soft">{description}</p>
      <a
        href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-sm font-semibold text-bordeaux underline decoration-bordeaux/40 underline-offset-4 transition hover:decoration-bordeaux"
      >
        Consultar disponibilidad →
      </a>
    </motion.div>
  );
}
