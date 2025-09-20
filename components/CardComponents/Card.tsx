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
    <div className="mx-auto w-full max-w-7xl overflow-hidden border border-gray-200 bg-white">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Rank Banner */}
        <div className="relative">
          <Banner text={rank} bgColor="bg-gray-800" />
        </div>

        <div className="space-y-4 p-4">
          {/* Product Image */}
          <div className="text-center">
            <Image
              src={productImage || "/Product3.png"}
              alt="Product"
              width={120}
              height={144}
              className="mx-auto rounded-lg object-contain"
              style={{ width: "auto", height: "auto" }}
              unoptimized
            />
          </div>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <div className="mt-0.5 flex-shrink-0">
                  {feature.isPositive ? <VerifiedIcon /> : <NonVerifiedIcon />}
                </div>
                <span className="text-xs leading-relaxed text-gray-700">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Visit Amazon Button - Right after features */}
          <div className="space-y-2">
            <button className="w-full rounded-md bg-green-500 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600">
              VISIT AMAZON
            </button>
            <div className="text-center text-xs text-gray-500">{shipping}</div>
          </div>

          {/* Overall Score */}
          <div className="text-center">
            <div className="text-sm font-medium text-gray-600">
              Overall Score:{" "}
              <span className="text-2xl font-bold text-gray-800">
                {overallScore}
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center space-x-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                  key={idx}
                  width="16"
                  height="16"
                  fill={idx < rating ? "#FFD700" : "#E5E7EB"}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="text-xs font-medium text-gray-600">
              {reviewCount}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between p-4">
          {/* Rank Banner */}
          <div className="relative">
            <Banner text={rank} bgColor="bg-gray-800" />
          </div>

          {/* Overall Score - Top Right */}
          <div className="text-right">
            <div className="text-sm font-medium text-gray-600">
              Overall Score:
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {overallScore}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[200px_1fr] gap-6 p-6">
          {/* Left Section - Product Image */}
          <div className="flex flex-col items-center space-y-3">
            <Image
              src={productImage || "/Product3.png"}
              alt="Product"
              width={150}
              height={180}
              className="rounded-lg object-contain"
              style={{ width: "auto", height: "auto" }}
              unoptimized
            />

            {/* Stars Rating */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                  key={idx}
                  width="18"
                  height="18"
                  fill={idx < rating ? "#FFD700" : "#E5E7EB"}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Review Count */}
            <div className="text-center text-xs font-medium text-gray-600">
              {reviewCount}
            </div>
          </div>

          {/* Right Section - Features + Button at bottom */}
          <div className="flex min-h-[300px] flex-col justify-between">
            {/* Features - Takes available space */}
            <div className="space-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="mt-0.5 flex-shrink-0">
                    {feature.isPositive ? (
                      <VerifiedIcon />
                    ) : (
                      <NonVerifiedIcon />
                    )}
                  </div>
                  <span className="text-sm leading-relaxed text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Button and Shipping - Fixed at bottom */}
            <div className="mt-6 flex items-center justify-between">
              <button className="rounded-md bg-green-500 px-8 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600">
                VISIT AMAZON
              </button>
              <div className="text-sm text-gray-500">{shipping}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
