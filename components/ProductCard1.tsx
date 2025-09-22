import Image from "next/image";
import ProductFeaturesList from "./CardComponents/ProductFeaturesList";


function ProductCard() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 m-2 xl:px-0">
      <div className="overflow-hidden bg-white shadow-lg">
        {/* Header Section with Approved Badge and Discount */}
        <div className="flex items-start justify-between px-4 ld:px-0 py-4">
          {/* Approved Badge */}
          <div className="relative md:pl-20">
            <Image
              src="/approved.png"
              alt="Approved"
              width={100}
              height={100}
              className="h-20 w-20 md:h-40 md:w-40"
              unoptimized
            />
          </div>

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
        <div className="flex flex-col gap-6 px-4 md:flex-row md:gap-8 lg:gap-12">
          {/* Left Column - Product Image */}
          <div className="flex-shrink-0 md:w-60 lg:w-72">
            <div className=" text-center md:mt-10 md:ml-18">
              <Image
                src="/product1.png"
                alt="Sleep Tape"
                width={250}
                height={250}
                className="mx-auto mb-4 w-full max-w-[200px] md:mb-6 md:max-w-[200px] lg:max-w-[250px]"
                style={{ width: "auto", height: "auto" }}
                unoptimized
              />
            </div>
          </div>

          {/* Mobile Discount Banner - Only visible on mobile */}
          <div className="mb-6 bg-gray-900 p-4 text-center text-white md:hidden">
            <div className="text-lg font-bold">
              UPTO <span className="text-green-400">50%</span> OFF
            </div>
            <div className="mt-1 text-sm">
              Final Day to Save{" "}
              <span className="font-bold">Tuesday, September 16, 2025</span>
            </div>
          </div>
          {/* Mobile Visit Site Button - Only visible on mobile */}
          <button className="md:hidden w-full rounded bg-green-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-600">
            VISIT SITE
          </button>

          {/* Right Column - Features and Purchase */}
          <div className="flex-1">
            <ProductFeaturesList />

            {/* Purchase Section */}
            <div className="mt-6 md:mt-8">
              <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <button className=" hidden md:flex  w-full rounded bg-green-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-600 md:w-auto">
                  VISIT SITE
                </button>

                <div className="hidden md:flex text-center md:text-right">
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
