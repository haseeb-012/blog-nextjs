import ArticleContent from "@/components/ArticaleContent";
import ArticleIntro from "@/components/ArticleIntro";
import AuthorSection from "@/components/AuthorSection";
import DisclaimerSection from "@/components/DisclaimerSection";
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
        <ReviewStatistics />
        <div className="mx-auto mt-8 max-w-7xl px-4 text-lg font-bold text-gray-950 sm:text-2xl xl:px-0">
          <h1>Best Recommendation: Dr. RestRight Mouth Tape</h1>
        </div>
        <ProductCard1 />
        <ArticleContent />
        <AuthorSection/>
        <DisclaimerSection />
        {/* 
        // footer */}
        <footer className="border-t border-gray-200 bg-[#E9E9E9] px-4 py-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="text-sm text-gray-500">
                Copyright © 2025 thetestlist.com All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
