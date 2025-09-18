function Banner({ bgColor, text }: { bgColor?: string; text?: string }) {
  return (
    <div className="relative inline-block h-[69px] w-[280px]">
      <div className={`bg-${bgColor} px-5 py-5 text-2xl font-bold text-white`}>
        {text}
      </div>

      {/* Triangle on right side */}

      <div className="absolute top-0 right-0 z-10 h-0 w-0 border-t-[35px] border-r-[36px] border-b-[38px] border-t-transparent border-r-white border-b-transparent"></div>
    </div>
  );
}

export default Banner;
