function Banner({ bgColor, text }: { bgColor?: string; text?: string }) {
  return (
    <>
      <div className="relative inline-block w-[160px] sm:h-[65px] md:w-[200px]">
        <div
          className={`${bgColor} px-2 py-4 text-base font-bold md:px-2 md:text-lg lg:py-5`}
        >
          <h2 className="text-white   md:font-bold">{text}</h2>
        </div>

        {/* Triangle on right side */}
        <div className="absolute top-0 right-0 z-10 h-0 w-0 border-t-[28px] border-r-[25px] border-b-[20px] border-t-transparent border-r-white border-b-transparent sm:border-t-[30px] md:border-r-[30px] md:border-b-[30px] lg:border-t-[36px]"></div>
      </div>
    </>
  );
}

export default Banner;
