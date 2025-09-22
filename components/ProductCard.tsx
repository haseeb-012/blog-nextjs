import Image from "next/image";
import ProductFeaturesList from "./CardComponents/ProductFeaturesList";
import Banner from "./CardComponents/RankingBanner";
import ScoreDisplay from "./CardComponents/ScoreDisplay";
import Stars from "./CardComponents/StarRanking";

function ProductCard() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 xl:px-0">
      <div className="overflow-hidden bg-white shadow-lg">
        {/* Header Section with Banner and Discount */}
        <div className="flex items-start justify-between p-4 md:p-0 ">
          <Banner text="#1 Mouth Tape" bgColor="bg-blue-500" />

          {/* Discount Banner - Hidden on mobile, visible on tablet+ */}
          <div className="hidden flex-col bg-gray-900 px-6 py-4 text-center text-white md:flex">
            <div className="text-xl font-bold lg:text-2xl">
              UPTO <span className="text-green-400">50%</span> OFF
            </div>
            <div className="mt-1 text-sm lg:text-base">
              Final Day to Save{" "}
              <span className="font-bold">Tuesday, September 16, 2025</span>
            </div>
          </div>
        </div>

        {/* Main Layout - Responsive */}
        <div className="flex flex-col gap-6 p-4 md:flex-row md:gap-8 lg:gap-12">
          {/* Left Column - Product Image and Rating */}
          <div className="flex flex-col items-center md:w-60 lg:w-72">
            <Image
              src="/product1.png"
              alt="Sleep Tape"
              width={220}
              height={220}
              className="mx-auto mb-4 w-full max-w-[160px] md:mb-6 md:max-w-[200px] lg:max-w-[250px]"
              style={{ width: "auto", height: "auto" }}
              unoptimized
            />

            <div className="mb-2 md:mb-4">
              <Stars size={18} />
            </div>

            <div className="mb-4 text-center text-xs text-gray-600 md:mb-6 md:text-sm">
              5,000+ USERS GAVE THIS BRAND 5 STARS
            </div>

            {/* Score Display - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block">
              <ScoreDisplay />
            </div>

            {/* Mobile Overall Score - Only visible on mobile */}
            <div className="mb-4 text-center md:hidden">
              <span className="text-sm text-gray-600">Overall Score: </span>
              <span className="text-xl font-bold text-gray-900">9.9</span>
            </div>
          </div>

          {/* Right Column - Features and Purchase */}
          <div className="flex flex-1 flex-col">
            <ProductFeaturesList />

            {/* Mobile Discount Banner - Only visible on mobile */}
            <div className="my-6 bg-gray-900 p-4 text-center text-white md:hidden">
              <div className="text-lg font-bold">
                UPTO <span className="text-green-400">50%</span> OFF
              </div>
              <div className="mt-1 text-sm">
                Final Day to Save{" "}
                <span className="font-bold">Tuesday, September 16, 2025</span>
              </div>
            </div>

            {/* Purchase Section */}
            <div className="mt-6 md:mt-8">
              <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <button className="w-full rounded bg-green-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-600 md:w-auto">
                  VISIT SITE
                </button>

                <div className="text-center md:text-right">
                  <div className="text-xl font-bold text-gray-900 md:text-2xl">
                    $24.99{" "}
                    <span className="ml-2 text-base text-gray-500 line-through md:text-lg">
                      $29.99
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    1-3 Days Express Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
