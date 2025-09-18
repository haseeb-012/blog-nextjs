import Image from "next/image";
import Banner from "./CardComponents/Banner";
import FeaturesSection from "./CardComponents/FeaturesSection";
import OffSection from "./CardComponents/OffSection";
import OverallScore from "./CardComponents/OverallScore";
import Stars from "./CardComponents/Stars";
function CardSection() {
  return (
    <div className="max-w-8xl mx-14 mt-5 rounded-2xl bg-neutral-50 pt-8 shadow-xl/30">
      <div className="flex items-start justify-between">
        <Banner text="#1 Mouth Tape" bgColor="blue-500" />
        <OffSection />
      </div>

      <div className="mt-8 mb-8 gap-4 border p-5 md:flex">
        <div className="mx-auto flex w-[22rem] flex-col border bg-red-50 md:ml-22">
          <Image
            src={"/product1.png"}
            alt="Sleep Tape"
            className="object-cover md:h-[484px] md:w-[300px]"
            width={300}
            height={484}
          />
          {/* Stars */}
          <div className="hidden md:block">
            <Stars />
          </div>
          <div className="mb-2 hidden text-lg text-gray-600 md:block">
            5,000+ USERS GAVE THIS BRAND 5 STARS
          </div>
          {/* Score */}
          <OverallScore />
        </div>

        {/* right section */}
        <div className="flex flex-col gap-2 border">
          {/* Features */}
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
}

export default CardSection;
