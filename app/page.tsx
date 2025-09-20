import ArticleIntro from "@/components/ArticleIntro";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductCard1 from "@/components/ProductCard1";
import ProductsCards from "@/components/ProductsCards";
import ReviewStatistics from "@/components/ReviewStatistics";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ArticleIntro />
        <ProductCard />
        <ProductsCards />
        <ProductCard1 />
        <ReviewStatistics />
        <div className="mx-auto mt-8 max-w-7xl border px-4 text-lg sm:text-2xl font-bold text-gray-950 xl:px-0">
          <h1>
            Best Recommendation: Dr. RestRight Mouth Tape
          </h1>
        </div>
      </main>
    </>
  );
}
