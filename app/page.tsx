import ArticleIntro from "@/components/ArticleIntro";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductCard1 from "@/components/ProductCard1";
import ProductsCards from "@/components/ProductsCards";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ArticleIntro />
        <ProductCard />
        <ProductsCards />
        <ProductCard1 />
      </main>
    </>
  );
}
