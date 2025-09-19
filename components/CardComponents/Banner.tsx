function Banner({ bgColor, text }: { bgColor?: string; text?: string }) {
  return (
    <>
      <div className="relative inline-block w-[159px] sm:h-[69px] md:w-[290px]">
        <div
          className={`${bgColor} px-2 py-4 text-base font-bold md:px-5 md:text-2xl lg:py-5`}
        >
          <h2 className="text-white md:font-bold">{text}</h2>
        </div>

        {/* Triangle on right side */}

        <div className="absolute top-0 right-0 z-10 h-0 w-0 border-t-[28px] border-r-[25px] border-b-[20px] border-t-transparent border-r-white border-b-transparent sm:border-t-[32px] md:border-r-[36px] md:border-b-[38px] lg:border-t-[36px]"></div>
      </div>

      
    </>
  );
}

export default Banner;
