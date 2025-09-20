import Image from "next/image";
import Banner from "./CardComponents/RankingBanner";
import ProductFeaturesList from "./CardComponents/ProductFeaturesList";
import ScoreDisplay from "./CardComponents/ScoreDisplay";
import Stars from "./CardComponents/StarRanking";

function ProductCard() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 xl:px-0">
      <div className="overflow-hidden bg-white shadow-lg">
        {/* Header Section with Banner and Discount */}
        <div className="flex items-start justify-between">
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

        {/* Desktop/Tablet Layout */}
        <div className="hidden gap-8 md:flex lg:gap-12">
          {/* Left Column - Product Image and Rating */}
          <div className="w-80 flex-shrink-0 lg:w-96">
            <div className="text-center">
              <Image
                src="/product1.png"
                alt="Sleep Tape"
                width={300}
                height={300}
                className="mx-auto mb-6 w-full max-w-sm"
              />

              <div className="mb-4">
                <Stars />
              </div>
              <div className="mb-6 text-sm text-gray-600">
                5,000+ USERS GAVE THIS BRAND 5 STARS
              </div>

              <ScoreDisplay />
            </div>
          </div>

          {/* Right Column - Features and Purchase */}
          <div className="flex-1">
            <ProductFeaturesList />

            {/* Purchase Section */}
            <div className="mt-8 flex items-center justify-between">
              <button className="Sbg-green-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-600">
                VISIT SITE
              </button>

              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  $24.99{" "}
                  <span className="ml-2 text-lg text-gray-500 line-through">
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

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Product Image */}
          <div className="mb-6 text-center">
            <Image
              src="/product1.png"
              alt="Sleep Tape"
              width={240}
              height={240}
              className="mx-auto mb-4"
            />
          </div>

          {/* Features */}
          <div className="mb-6">
            <ProductFeaturesList />
          </div>

          {/* Mobile Rating */}
          <div className="mb-6 text-center">
            <div className="mb-2">
              <span className="text-sm text-gray-600">Overall Score: </span>
              <span className="text-xl font-bold text-gray-900">9.9</span>
            </div>
            <div className="mb-2">
              <Stars size={20} />
            </div>
            <div className="text-sm text-gray-600">
              5,000+ USERS GAVE THIS BRAND 5 STARS
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 md:p-8">
            {/* Mobile Discount Banner */}
            <div className="mb-6  bg-gray-900 p-4 text-center text-white md:hidden">
              <div className="text-lg font-bold">
                UPTO <span className="text-green-400">50%</span> OFF
              </div>
              <div className="mt-1 text-sm">
                Final Day to Save{" "}
                <span className="font-bold">Tuesday, September 16, 2025</span>
              </div>
            </div>

            {/* Mobile Purchase Section */}
            <div className="space-y-4">
              <button className="w-full rounded bg-green-500 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-600">
                VISIT SITE
              </button>

              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">
                  $24.99{" "}
                  <span className="ml-2 text-base text-gray-500 line-through">
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
  );
}

export default ProductCard;
