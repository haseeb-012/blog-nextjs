import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import ProductsCards from "@/components/ProductsCards";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Info />
        <ProductCard />
        <ProductsCards/>
      </main>
    </>
  );
}
