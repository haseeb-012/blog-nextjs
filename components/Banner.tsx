function Banner({ bgColor, text }: { bgColor?: string; text?: string }) {
	return (
		<div className="relative inline-block h-[69px] w-[280px]">
			<div className={`bg-${bgColor}-700 text-white text-2xl font-bold px-5  py-5 `}>
				{text}
			</div>

			{/* Triangle on right side */}

			<div className="absolute z-10 top-0 right-0 w-0 h-0 border-t-[35px] border-t-transparent border-b-[38px] border-b-transparent border-r-[36px] border-r-white"></div>
		</div>
	);
}

export default Banner;
