function HeroSection() {
  return (
    <div className="relative flex min-h-[400px] items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat text-white md:min-h-[490px]">
      {/* Overlay for dull effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-16 md:py-24">
        {/* Main Heading */}
        <h1 className="text-center text-2xl leading-tight font-bold md:text-4xl lg:text-5xl">
          2025's Top Rated Mouth Tape: The Doctor-Formulated Ritual That Helps
          45+ Sleepers Ditch Snoring, Dry Mouth & CPAP Machines
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-200 md:text-base">
          Last Updated - 15 Sept, 2025
        </p>

        {/* Expert Approved Box */}
        <div className="mt-4  border border-gray-400 bg-black/40 px-6 py-4 backdrop-blur-sm md:px-8 md:py-6">
          <p className="mb-2 text-center text-sm font-semibold md:text-base">
            Expert-Approved
          </p>

          {/* 5 Stars */}
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-6 md:w-6"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFD700"
                  stroke="#FFD700"
                  strokeWidth="0.5"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
