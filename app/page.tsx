import ArticleIntro from "@/components/ArticleIntro";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductsCards from "@/components/ProductsCards";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ArticleIntro />
        <ProductCard />
        <ProductsCards />
      </main>
    </>
  );
}
