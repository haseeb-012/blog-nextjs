function HeroSection() {
  return (
    <div className="relative flex justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat object-cover text-white md:h-[490px]">
      {/* Overlay for dull effect */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex w-[800px] flex-col items-center gap-4 pt-[100px]">
        <h1 className="font- text-center text-[36px] md:font-bold">
          2025’s Top Rated Mouth Tape: The Doctor-Formulated Ritual That Helps
          45+ Sleepers Ditch Snoring, Dry Mouth & CPAP Machines
        </h1>
        <p className="">Last Updated - 15 Sept, 2025</p>
        <div className="mb-10 border border-neutral-500 bg-neutral-800 px-10 pt-5 md:pb-4">
          <p>Expert-Approved</p>
          <div className="flex px-3">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.59 9.68H14.694L12.25 2.171 9.807 9.68H1.91l6.392 4.641-2.442 7.509L12.25 17.188l6.391 4.641-2.443-7.509L22.59 9.68Z"
                  fill="#FFDC19"
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
