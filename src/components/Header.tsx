"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "./cart/CartProvider";

const NAV_LINKS = [
  { href: "#mates", label: "Mates" },
  { href: "#bombillas", label: "Bombillas" },
  { href: "#yerbas", label: "Yerbas" },
  { href: "#termos", label: "Termos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-30 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-cream-page/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-cream-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/brand/logo-badge.png"
            alt="Mates Hueney"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="font-display text-lg uppercase tracking-wide text-ink">
            Mates Hueney
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium uppercase tracking-wide text-ink-soft transition hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bordeaux transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={openCart}
          aria-label="Abrir carrito"
          className="relative grid h-10 w-10 place-items-center rounded-full border border-cream-line bg-cream-page/60 text-ink transition hover:border-bordeaux hover:text-bordeaux active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2.293 2.293A1 1 0 0 0 5.414 17H17M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            />
          </svg>
          {totalCount > 0 && (
            <motion.span
              key={totalCount}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-bordeaux text-[10px] font-bold text-cream-page"
            >
              {totalCount}
            </motion.span>
          )}
        </button>
      </div>
    </motion.header>
  );
}
