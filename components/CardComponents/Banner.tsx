function Banner({ bgColor, text }: { bgColor?: string; text?: string }) {
  return (
    <>
      <div className="relative inline-block w-[159px] sm:h-[69px] md:w-[290px]">
        <div
          className={`${bgColor} px-2 py-4 text-base font-bold text-white md:px-5 md:text-2xl md:font-bold lg:py-5`}
        >
          {text}
        </div>

        {/* Triangle on right side */}

        <div className="absolute top-0 right-0 z-10 h-0 w-0 border-t-[28px] border-r-[25px] border-b-[20px] border-t-transparent border-r-white border-b-transparent sm:border-t-[32px] md:border-r-[36px] md:border-b-[38px] lg:border-t-[36px]"></div>
      </div>

      {/* 50 percentage off section */}

      <div className="mb-2 hidden flex-col bg-neutral-900 pt-6 pr-13 pb-5 pl-18 text-center text-white sm:flex">
        <span className="text-center text-xl font-bold">
          UPTO <span className="text-3xl text-green-400">50%</span> OFF
        </span>
        <span className="mt-1 text-sm">
          Final Day to Save{" "}
          <span className="font-bold">Tuesday, September 16, 2025</span>
        </span>
      </div>
    </>
  );
}

export default Banner;
