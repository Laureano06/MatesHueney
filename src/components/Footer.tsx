import Image from "next/image";
import { CONTACT_PHONE_DISPLAY, INSTAGRAM_HANDLE, WHATSAPP_NUMBER } from "@/lib/products";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="grain relative bg-ink py-16 text-cream-page">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/images/brand/logo-badge.png"
            alt="Mates Hueney"
            width={72}
            height={72}
            className="h-16 w-16 object-contain"
          />
          <h3 className="font-display text-2xl uppercase tracking-wide">
            Mates Hueney
          </h3>
          <p className="max-w-md text-sm text-cream-soft/80">
            Del corazón a la calabaza. Piezas artesanales de cuero, alpaca y
            calabaza, cebadas con el amor de papá.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-bordeaux px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream-page transition hover:bg-bordeaux-dark active:scale-95"
          >
            WhatsApp {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream-page/25 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition hover:border-cream-page hover:bg-cream-page hover:text-ink active:scale-95"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </Reveal>

        <p className="text-center text-xs uppercase tracking-widest text-cream-soft/50">
          Mates · Bombillas · Termos — hecho a mano en Argentina
        </p>
      </div>
    </footer>
  );
}
