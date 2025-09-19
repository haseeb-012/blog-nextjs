import Image from "next/image";
import Banner from "./CardComponents/Banner";
import FeaturesSection from "./CardComponents/FeaturesSection";
import OverallScore from "./CardComponents/OverallScore";
import Stars from "./CardComponents/Stars";
function ProductCard() {
  return (
    <main className="max-w-8xl mx-10 mt-5 rounded-2xl bg-neutral-50 pt-8 pb-2 shadow-xl/30">
      <div className="flex items-start justify-between">
        <Banner text="#1 Mouth Tape" bgColor="bg-blue-500" />

        {/* 50 percentage off section */}

        <div className="hidden flex-col bg-neutral-900 pt-6 pb-2 text-center text-white sm:flex lg:pr-12 lg:pb-5 lg:pl-20">
          <span className="text-center md:text-2xl">
            UPTO <span className="text-green-400 lg:text-3xl">50%</span> OFF
          </span>
          <span className="mt-1 text-sm sm:px-2 lg:text-lg">
            Final Day to Save{" "}
            <span className="font-bold">Tuesday, September 16, 2025</span>
          </span>
        </div>
      </div>

      <div className="mt-8 mb-4 py-3 sm:flex">
        <div className="flex flex-col bg-red-50 md:ml-20 lg:pr-9">
          <Image
            src={"/product1.png"}
            alt="Sleep Tape"
            className="mx-auto md:h-[230] md:w-[380] xl:h-[300px] xl:w-[400px]"
            width={220}
            height={220}
          />

          {/* Stars */}
          <div className="hidden md:block">
            <Stars />
          </div>
          <div className="hidden text-lg text-gray-600 md:block">
            5,000+ USERS GAVE THIS BRAND 5 STARS
          </div>
          {/* Score */}
          <div className="hidden sm:block md:pt-19 lg:pt-6">
            <OverallScore />
          </div>
        </div>

        {/* right section */}
        <div className="m-6 flex flex-col gap-2 md:m-0">
          {/* Features */}
          <FeaturesSection />
          {/* Button and price section  */}
          {/* for mobile view */}
          <div className="block text-center md:hidden">
            <div className="mt-4 text-center">
              <span className="text-sm">Overall Score : </span>
              <span className="text-lg font-bold text-neutral-950">9.9</span>
            </div>
            <div className="mt-2">
              <Stars size={20} />
            </div>
            <div className="text-sm text-gray-600">
              5,000+ USERS GAVE THIS BRAND 5 STARS
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between overflow-hidden pt-4 pr-6 md:h-20">
            <button className="h-10 w-35 items-center bg-green-400 px-7 text-sm text-neutral-50 sm:h-72 sm:w-60 sm:pb-5 sm:text-xl xl:pr-6">
              <h2>VISIT SITE</h2>
            </button>

            <div className="gap-2 text-right text-sm">
              <span className="items-center font-bold sm:text-2xl">$24.99</span>
              <span className="ml-3">
                <span className="line-through">$29.99</span>
              </span>
              <div>
                <span className="hidden text-[#797979]">
                  1-3 Days Express Shipping
                </span>
              </div>
            </div>
          </div>
          <span className="text-[#797979] mt-4 text-sm text-center md:hidden">
            1-3 Days Express Shipping
          </span>
        </div>
      </div>
    </main>
  );
}

export default ProductCard;
