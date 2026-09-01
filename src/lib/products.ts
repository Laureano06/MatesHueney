export type ColorOption = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  line: string;
  price: number | null;
  tagline: string;
  description: string;
  features: string[];
  material: string[];
  colors: ColorOption[];
  heroImage: string;
  altImage?: string;
};

export const BORDEAUX: ColorOption = { name: "Bordó", hex: "#7a1620" };
export const NEGRO: ColorOption = { name: "Negro", hex: "#1c1812" };

export const mates: Product[] = [
  {
    slug: "torpedo-hueney",
    name: "Torpedo Hueney",
    line: "Torpedo",
    price: 56250,
    tagline: "Un nombre que guarda historia",
    description:
      "Un mate que combina tradición y homenaje en cada detalle. Virola cincelada y base bolita con aro de bronce.",
    features: ["Virola cincelada", "Cuero repujado", "Base bolita", "Aro de bronce"],
    material: ["Alpaca", "Cuero", "Calabaza", "Base de alpaca y bronce"],
    colors: [NEGRO, BORDEAUX],
    heroImage: "/images/mates/torpedo-hueney-hero.png",
    altImage: "/images/mates/torpedo-hueney-alt.png",
  },
  {
    slug: "torpedo-luna",
    name: "Torpedo Luna",
    line: "Torpedo",
    price: 38750,
    tagline: "Un mate que combina tradición y homenaje",
    description:
      "Virola cincelada y cuero repujado sobre base de cuero reforzada, para el mate de todos los días.",
    features: ["Virola cincelada", "Cuero repujado", "Base de cuero reforzada"],
    material: ["Alpaca", "Cuero", "Calabaza"],
    colors: [NEGRO, BORDEAUX],
    heroImage: "/images/mates/torpedo-luna-hero.png",
    altImage: "/images/mates/torpedo-luna-alt.png",
  },
  {
    slug: "torpedo-cuyen",
    name: "Torpedo Cuyen",
    line: "Torpedo",
    price: 32500,
    tagline: "Tradición en su forma más simple",
    description:
      "Virola cincelada sobre base de cuero reforzada. La entrada a la línea Torpedo, sin resignar carácter.",
    features: ["Virola cincelada", "Base de cuero reforzada"],
    material: ["Alpaca", "Cuero", "Calabaza"],
    colors: [NEGRO, BORDEAUX],
    heroImage: "/images/mates/torpedo-cuyen-hero.png",
    altImage: "/images/mates/torpedo-cuyen-alt.png",
  },
  {
    slug: "imperial-gardel",
    name: "Imperial Gardel",
    line: "Imperial",
    price: 45000,
    tagline: "Elegancia de virola lisa",
    description:
      "Virola lisa y cuero repujado sobre base de cuero reforzada. Una silueta imperial, prolija y noble.",
    features: ["Virola lisa", "Cuero repujado", "Base de cuero reforzada"],
    material: ["Alpaca", "Cuero", "Calabaza"],
    colors: [NEGRO, BORDEAUX],
    heroImage: "/images/mates/imperial-gardel-hero.png",
    altImage: "/images/mates/imperial-gardel-alt.png",
  },
  {
    slug: "camionero-ceniz",
    name: "Camionero Ceniz",
    line: "Camionero",
    price: 33750,
    tagline: "El clásico de todos los días",
    description:
      "Virola lisa y cuero repujado sobre base de cuero reforzada. El compañero de ruta de siempre.",
    features: ["Virola lisa", "Cuero repujado", "Base de cuero reforzada"],
    material: ["Alpaca", "Cuero", "Calabaza"],
    colors: [NEGRO, BORDEAUX],
    heroImage: "/images/mates/camionero-ceniz-hero.png",
    altImage: "/images/mates/camionero-ceniz-alt.png",
  },
  {
    slug: "camionero-bito",
    name: "Camionero Bito",
    line: "Camionero",
    price: 32500,
    tagline: "Simple, noble, de siempre",
    description:
      "Virola lisa sobre base de cuero reforzada. La versión más austera de la línea Camionero.",
    features: ["Virola lisa", "Base de cuero reforzada"],
    material: ["Alpaca", "Cuero", "Calabaza"],
    colors: [NEGRO, BORDEAUX],
    heroImage: "/images/mates/camionero-bito-hero.png",
    altImage: "/images/mates/camionero-bito-alt.png",
  },
];

export const bombillas: Product[] = [
  {
    slug: "bombillon-acero-inox",
    name: "Bombillón Acero Inox.",
    line: "Bombillas",
    price: null,
    tagline: "Bombillón que acompaña rituales",
    description:
      "Porque cada mate merece un compañero a su altura. Simple, noble y siempre listo para compartir. Modelos rectos y espiralados.",
    features: ["Acero inoxidable 304", "Modelo recto (IN02)", "Modelo espiralado (IN03)"],
    material: ["Acero inoxidable"],
    colors: [],
    heroImage: "/images/bombillas/bombillon-inox.png",
  },
  {
    slug: "bombillon-alpaca",
    name: "Bombillón Alpaca",
    line: "Bombillas",
    price: null,
    tagline: "Una pieza noble y atemporal",
    description:
      "Elaborado con técnicas tradicionales, combina estética y funcionalidad para quienes eligen lo auténtico y duradero en cada detalle.",
    features: ["Alpaca maciza", "Terminación en pico de loro dorado"],
    material: ["Alpaca"],
    colors: [],
    heroImage: "/images/bombillas/bombillon-alpaca.png",
  },
];

export const allProducts: Product[] = [...mates, ...bombillas];

export function formatPrice(price: number | null): string {
  if (price === null) return "Consultar";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}

export const WHATSAPP_NUMBER = "5492915665388";
export const INSTAGRAM_HANDLE = "@mateshueney";
export const CONTACT_PHONE_DISPLAY = "291 566 5388";
