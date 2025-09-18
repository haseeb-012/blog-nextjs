import Image from 'next/image';
import Banner from './Banner';
import OffSection from './OffSection';
import Stars from './Stars';
import OverallScore from './OverallScore';
function CardSection() {
	return (
		<div
			className="bg-neutral-50 
		rounded-2xl  
		 shadow-xl/30 max-w-8xl pt-8  mx-14 mt-5 "
		>
			<div className="flex justify-between  items-start">
				<Banner text="#1 Mouth Tape" bgColor="blue" />
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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm order-1">
						<ul className="space-y-1">
							<li>✅ Reduces snoring from the very first night</li>
							<li>✅ Helps ease mild sleep apnea & restless breathing</li>
							<li>✅ Wake energized — deeper sleep, brighter mornings</li>
							<li>✅ No more dry mouth, sore throat, or headaches</li>
							<li>✅ Doctor-formulated, medical-grade, latex-free adhesive</li>
							<li>
								✅ Infused with calming aromatherapy (lavender & chamomile
								options)
							</li>
							<li>✅ Secure hold all night</li>
						</ul>
						<ul className="space-y-1">
							<li>✅ Gentle on skin, beard-friendly</li>
							<li>✅ Breathable fabric with micro-airflow for peace of mind</li>
							<li>✅ Peels off painlessly, no sticky residue</li>
							<li>
								✅ Hypoallergenic & dermatologist-tested for sensitive skin
							</li>
							<li>✅ Fits comfortably on every mouth size</li>
							<li>✅ 99-day money-back guarantee — risk-free trial</li>
							<li>❌ High demand — limited stock often sells out</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardSection;






