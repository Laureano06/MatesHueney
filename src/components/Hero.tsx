"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden border-b border-cream-line"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-bordeaux/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brass/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center sm:px-8 sm:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/brand/logo-badge.png"
            alt="Mates Hueney"
            width={120}
            height={120}
            className="h-28 w-28 object-contain sm:h-32 sm:w-32"
            priority
          />
        </motion.div>

        <div className="flex flex-col items-center gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl uppercase leading-[1.05] tracking-wide text-ink sm:text-6xl"
          >
            Del corazón
            <br />a la calabaza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-balance text-base text-ink-soft sm:text-lg"
          >
            Mates de cuero repujado y calabaza, bombillas de acero inox y
            alpaca. Piezas artesanales, cebadas con el amor de papá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-widest text-cream-page sm:text-sm"
          >
            Cebados con el amor de papá
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#mates"
              className="rounded-full bg-bordeaux px-7 py-3 text-sm font-semibold uppercase tracking-wide text-cream-page shadow-lg shadow-bordeaux/20 transition hover:bg-bordeaux-dark hover:shadow-xl active:scale-95"
            >
              Ver mates
            </a>
            <a
              href="#bombillas"
              className="rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-ink hover:bg-ink hover:text-cream-page active:scale-95"
            >
              Ver bombillas
            </a>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-cream-line bg-ink py-3">
        <div className="animate-marquee flex w-[200%] gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-cream-soft/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              {[
                "Mates",
                "Bombillas",
                "Yerbas",
                "Termos",
                "Cuero repujado",
                "Hecho a mano",
                "Envíos a todo el país",
              ].map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
