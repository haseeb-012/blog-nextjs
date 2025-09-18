import Image from 'next/image';
import Banner from './CardComponents/Banner';
import FeaturesSection from './CardComponents/FeaturesSection';
import OffSection from './CardComponents/OffSection';
import OverallScore from './CardComponents/OverallScore';
import Stars from './CardComponents/Stars';
function CardSection() {
	return (
		<div
			className="bg-neutral-50 
		rounded-2xl  
		 shadow-xl/30 max-w-8xl pt-8  mx-14 mt-5 "
		>
			<div className="flex justify-between  items-start">
				<Banner text="#1 Mouth Tape" bgColor="blue-500" />
				<OffSection />
			</div>
			<div className="grid md:grid-cols-2">
				<div className="flex flex-col bg-red-50  w-[22rem] mb-8 mt-7 ml-22">
					<Image
						src={'/product1.png'}
						alt="Sleep Tape"
						className=""
						width={300}
						height={484}
					/>
					{/* Stars */}
					<div className="hidden md:block">
						<Stars />
					</div>
					<div className="hidden md:block text-lg text-gray-600 mb-2">
						5,000+ USERS GAVE THIS BRAND 5 STARS
					</div>
					{/* Score */}
					<OverallScore />
				</div>

				{/* right section */}
				<div className="flex flex-col gap-2">
					{/* Features */}
					<FeaturesSection />
				</div>
			</div>
		</div>
	);
}

export default CardSection;
