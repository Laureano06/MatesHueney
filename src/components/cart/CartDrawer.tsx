"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartProvider";
import { formatPrice, WHATSAPP_NUMBER } from "@/lib/products";

function buildWhatsAppMessage(
  items: ReturnType<typeof useCart>["items"],
  totalPrice: number
) {
  const lines = items.map((item) => {
    const colorLabel = item.color ? ` (${item.color})` : "";
    const priceLabel =
      item.product.price !== null
        ? formatPrice(item.product.price * item.quantity)
        : "a consultar";
    return `• ${item.quantity}x ${item.product.name}${colorLabel} — ${priceLabel}`;
  });
  const totalLine =
    totalPrice > 0 ? `\n\nTotal estimado: ${formatPrice(totalPrice)}` : "";
  return `¡Hola Mates Hueney! Quiero hacer este pedido:\n\n${lines.join(
    "\n"
  )}${totalLine}`;
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalCount,
    totalPrice,
  } = useCart();

  const message = buildWhatsAppMessage(items, totalPrice);
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            key="drawer"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream-page shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
          >
            <div className="flex items-center justify-between border-b border-cream-line px-6 py-5">
              <h2 className="font-display text-xl uppercase tracking-wide text-ink">
                Tu pedido {totalCount > 0 && `(${totalCount})`}
              </h2>
              <button
                onClick={closeCart}
                aria-label="Cerrar carrito"
                className="grid h-9 w-9 place-items-center rounded-full border border-cream-line text-ink transition hover:border-bordeaux hover:text-bordeaux"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="mt-12 text-center text-ink-soft">
                  Todavía no agregaste nada al pedido.
                </p>
              ) : (
                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li
                      key={`${item.product.slug}-${item.color}`}
                      className="flex gap-4 border-b border-cream-line pb-5"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-soft">
                        <Image
                          src={item.product.heroImage}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-display text-sm uppercase tracking-wide text-ink">
                              {item.product.name}
                            </p>
                            {item.color && (
                              <p className="text-xs text-ink-soft">{item.color}</p>
                            )}
                          </div>
                          <button
                            onClick={() =>
                              removeItem(item.product.slug, item.color)
                            }
                            className="text-xs text-ink-soft underline decoration-cream-line underline-offset-2 transition hover:text-bordeaux"
                          >
                            quitar
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.slug,
                                  item.color,
                                  item.quantity - 1
                                )
                              }
                              className="grid h-7 w-7 place-items-center rounded-full border border-cream-line text-ink transition hover:border-bordeaux hover:text-bordeaux"
                            >
                              −
                            </button>
                            <span className="w-5 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.slug,
                                  item.color,
                                  item.quantity + 1
                                )
                              }
                              className="grid h-7 w-7 place-items-center rounded-full border border-cream-line text-ink transition hover:border-bordeaux hover:text-bordeaux"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm font-medium text-ink">
                            {item.product.price !== null
                              ? formatPrice(item.product.price * item.quantity)
                              : "Consultar"}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-cream-line px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-ink-soft">Total estimado</span>
                <span className="font-display text-lg text-ink">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <a
                href={items.length > 0 ? whatsappHref : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={items.length === 0}
                className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition ${
                  items.length === 0
                    ? "pointer-events-none bg-cream-soft text-ink-soft"
                    : "bg-bordeaux text-cream-page hover:bg-bordeaux-dark active:scale-[0.98]"
                }`}
              >
                Finalizar pedido por WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-ink-soft">
                Coordinamos color, stock y envío por WhatsApp o Instagram.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
