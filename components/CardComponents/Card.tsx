import { NonVerifiedIcon, VerifiedIcon } from "@/utils/icon";
import Image from "next/image";
import Banner from "./RankingBanner";

interface Feature {
  text: string;
  isPositive: boolean;
}

interface ProductCardProps {
  rank: string;
  productImage?: string;
  features: Feature[];
  rating: number;
  reviewCount: string;
  overallScore: number;
  shipping: string;
}

function Card({
  rank,
  productImage,
  features,
  rating,
  reviewCount,
  overallScore,
  shipping,
}: ProductCardProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 xl:px-0">
      <div className="overflow-hidden bg-white shadow-lg">
        {/* Header with Banner and Overall Score */}
        <div className="flex items-start justify-between p-4">
          {/* Rank Banner */}
          <div className="relative">
            <Banner text={rank} bgColor="bg-gray-800" />
          </div>

          {/* Overall Score - Desktop only */}
          <div className="hidden text-right md:block">
            <div className="text-sm font-medium text-gray-600">
              Overall Score:
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {overallScore}
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col gap-6 p-4 pt-0 md:flex-row md:gap-8 lg:gap-12">
          {/* Left Column - Product Image and Rating */}
          <div className="flex flex-col items-center space-y-4 md:w-60 lg:w-72">
            {/* Product Image */}
            <div className="flex h-48 w-full items-center justify-center md:h-56 lg:h-64">
              <Image
                src={productImage || "/Product3.png"}
                alt="Product"
                width={200}
                height={240}
                className="h-auto w-full max-w-[160px] rounded-lg object-contain md:max-w-[180px] lg:max-w-[200px]"
                style={{ width: "auto", height: "auto" }}
                unoptimized
              />
            </div>

            {/* Stars Rating */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                  key={idx}
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill={idx < rating ? "#FFD700" : "#E5E7EB"}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Review Count */}
            <div className="text-center text-xs font-medium text-gray-600 md:text-sm">
              {reviewCount}
            </div>

            {/* Mobile Overall Score - Between rating and button */}
            <div className="text-center md:hidden">
              <div className="text-sm font-medium text-gray-600">
                Overall Score:{" "}
                <span className="text-2xl font-bold text-gray-800">
                  {overallScore}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Features and Button */}
          <div className="flex flex-1 flex-col">
            {/* Features */}
            <div className="flex-1 space-y-2 md:space-y-3">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2 md:space-x-3"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {feature.isPositive ? (
                      <VerifiedIcon />
                    ) : (
                      <NonVerifiedIcon />
                    )}
                  </div>
                  <span className="text-xs leading-relaxed text-gray-700 md:text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Button and Shipping - Bottom aligned */}
            <div className="mt-6 flex flex-col items-center space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
              <button className="w-full rounded-md bg-green-500 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600 md:w-auto md:px-8">
                VISIT AMAZON
              </button>
              <div className="text-center text-xs text-gray-500 md:text-right md:text-sm">
                {shipping}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
