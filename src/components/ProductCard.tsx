"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "./cart/CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors[0]?.name);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, color);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-cream-line bg-cream-page shadow-sm transition-shadow hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-soft">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          />
        </motion.div>

        <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream-page">
          {product.line}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-ink">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{product.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-soft">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-brass" />
              {f}
            </li>
          ))}
        </ul>

        {product.colors.length > 0 && (
          <div className="flex items-center gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                aria-label={c.name}
                title={c.name}
                className={`h-6 w-6 rounded-full border-2 transition ${
                  color === c.name
                    ? "border-bordeaux scale-110"
                    : "border-transparent hover:scale-105"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-lg text-ink">
            {formatPrice(product.price)}
          </span>

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.92 }}
            className="relative overflow-hidden rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream-page transition hover:bg-bordeaux"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={justAdded ? "added" : "add"}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {justAdded ? "Agregado ✓" : "Agregar"}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
