# Mates Hueney

Online storefront for a mate brand: product catalog by category, product cards with color options, and a shopping cart.

**Live demo:** https://mates-hueney.vercel.app

## Features

- Product catalog grouped by line (mates, bombillas), with "coming soon" items
- Product cards with color variants, materials and features
- Cart drawer with global state through React Context
- Scroll reveal animations with Framer Motion
- Responsive layout

## Tech

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Vercel

## Structure

```
src/
  app/              layout and home page (App Router)
  components/       Header, Hero, ProductGrid, ProductCard, CategorySection, Footer
  components/cart/  CartProvider (React Context) and CartDrawer
  lib/products.ts   typed product catalog
```

## Run locally

```bash
npm install
npm run dev
```
