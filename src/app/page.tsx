import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import ComingSoonCard from "@/components/ComingSoonCard";
import Footer from "@/components/Footer";
import { bombillas, mates } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <CategorySection
          id="mates"
          eyebrow="Del corazón a la calabaza"
          title="Mates"
          description="Cuero repujado, virola cincelada o lisa y calabaza natural. Cada pieza es única y hecha a mano."
        >
          <ProductGrid products={mates} />
        </CategorySection>

        <CategorySection
          id="bombillas"
          eyebrow="El compañero de siempre"
          title="Bombillas"
          description="Bombillones en acero inoxidable y alpaca. Precio a consultar según modelo y terminación."
          tint="soft"
        >
          <ProductGrid products={bombillas} />
        </CategorySection>

        <CategorySection
          id="yerbas"
          eyebrow="Muy pronto"
          title="Yerbas"
          description="Estamos sumando yerbas seleccionadas a la tienda."
        >
          <ComingSoonCard
            label="Yerbas Mates Hueney"
            description="Todavía no tenemos yerbas cargadas en la tienda. Escribinos y te contamos qué tenemos disponible."
          />
        </CategorySection>

        <CategorySection
          id="termos"
          eyebrow="Muy pronto"
          title="Termos"
          description="La línea de termos Mates Hueney está en camino."
          tint="soft"
        >
          <ComingSoonCard
            label="Termos Mates Hueney"
            description="Todavía no tenemos termos cargados en la tienda. Escribinos y te contamos qué tenemos disponible."
          />
        </CategorySection>
      </main>
      <Footer />
    </>
  );
}
