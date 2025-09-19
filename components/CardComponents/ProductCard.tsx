import React from "react";

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

function ProductCard({
  rank,
  productImage,
  features,
  rating,
  reviewCount,
  overallScore,
  shipping,
}: ProductCardProps) {
  return (
    <div className="mx-auto mb-6 w-full max-w-4xl rounded-lg border border-gray-200 bg-white p-4 shadow-lg md:p-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[300px_1fr_120px]">
        {/* Left Section - Rank Banner & Product Image */}
        <div className="flex flex-col items-center space-y-4">
          {/* Rank Banner */}
          <div className="relative w-full max-w-[200px]">
            <svg
              width="100%"
              height="50"
              viewBox="0 0 200 50"
              className="h-auto w-full"
            >
              <polygon points="0,0 160,0 200,25 160,50 0,50" fill="#2D3748" />
              <text
                x="80"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
                fill="#fff"
                fontFamily="Arial, sans-serif"
                alignmentBaseline="middle"
              >
                {rank}
              </text>
            </svg>
          </div>

          {/* Product Image Placeholder */}
          <div className="flex h-40 w-32 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 shadow-md md:h-48 md:w-40">
            <div className="p-4 text-center text-white">
              <div className="text-sm font-semibold">Product Image</div>
              <div className="mt-1 text-xs">Will be added later</div>
            </div>
          </div>

          {/* Stars Rating */}
          <div className="flex items-center space-x-1">
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

          {/* Review Count */}
          <div className="text-center text-xs font-medium text-gray-600">
            {reviewCount}
          </div>

          {/* Visit Amazon Button */}
          <button className="rounded-md bg-green-500 px-6 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600 md:text-base">
            VISIT AMAZON
          </button>

          {/* Shipping Info */}
          <div className="text-center text-xs text-gray-500">{shipping}</div>
        </div>

        {/* Middle Section - Features */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-2 text-sm">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span
                  className={`text-lg ${
                    feature.isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {feature.isPositive ? "✓" : "✗"}
                </span>
                <span className="leading-relaxed text-gray-700">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Overall Score */}
        <div className="flex flex-col items-center justify-center lg:justify-start lg:pt-8">
          <div className="text-right">
            <div className="mb-1 text-sm font-medium text-gray-600">
              Overall Score :
            </div>
            <div className="text-4xl font-bold text-gray-800 md:text-5xl">
              {overallScore}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
