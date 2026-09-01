"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  color?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, color?: string) => void;
  removeItem: (slug: string, color?: string) => void;
  updateQuantity: (slug: string, color: string | undefined, quantity: number) => void;
  totalCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: Product, color?: string) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.slug === product.slug && item.color === color
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, color, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, color?: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.slug === slug && item.color === color))
    );
  }, []);

  const updateQuantity = useCallback(
    (slug: string, color: string | undefined, quantity: number) => {
      setItems((prev) =>
        prev
          .map((item) =>
            item.product.slug === slug && item.color === color
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    },
    []
  );

  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + (item.product.price ?? 0) * item.quantity,
        0
      ),
    [items]
  );

  const value: CartContextValue = {
    items,
    isOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    updateQuantity,
    totalCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
