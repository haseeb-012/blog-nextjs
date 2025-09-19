import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import Navabar from "@/components/Navabar";

export default function Home() {
  return (
    <>
      <main>
        <Navabar />
        <HeroSection />
        <Info />
        <ProductCard />
      </main>
    </>
  );
}
