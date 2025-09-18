import Image from 'next/image';

function Card1() {
	return (
		<div className="bg-white rounded-xl shadow-2xl border max-w-7xl mx-auto p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
			{/* Left Side */}
			<div className="flex flex-col items-center">
				{/* Banner */}
				<Image src={'/banner.png'} alt="Banner" width={200} height={88} className="left-0">
                </Image>                                                                                                                                                                                        
					
				
				{/* Product Image */}
				<Image
					src={'/product1.png'}
					alt="Sleep Tape"
					className="w-32 h-40 object-contain border border-blue-400 rounded mb-2"
					width={500}
					height={500}
				/>
				{/* Stars */}
				<div className="flex items-center gap-1 mb-1">
					{Array.from({ length: 5 }).map((_, idx) => (
						<svg
							key={idx}
							width="18"
							height="18"
							fill="#FFD700"
							viewBox="0 0 24 24"
						>
							<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
						</svg>
					))}
				</div>
				<div className="text-xs text-gray-600 mb-2">
					5,000+ USERS GAVE THIS BRAND 5 STARS
				</div>
				{/* Score */}
				<div className="border border-blue-400 rounded p-1 text-center w-full mb-2">
					<span className="font-bold">Overall Score :</span>{' '}
					<span className="text-blue-600 font-bold text-lg">9.9</span>
				</div>
				{/* Visit Site Button */}
				<a
					href="#"
					className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition mb-2"
				>
					VISIT SITE
				</a>
			</div>

			{/* Right Side */}
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
						<li>✅ Hypoallergenic & dermatologist-tested for sensitive skin</li>
						<li>✅ Fits comfortably on every mouth size</li>
						<li>✅ 99-day money-back guarantee — risk-free trial</li>
						<li>❌ High demand — limited stock often sells out</li>
					</ul>
				</div>
				{/* Price */}
				<div className="flex items-end justify-between mt-4 order-2">
					<div>
						<span className="text-2xl font-bold text-neutral-900">$24.99</span>
						<span className="text-gray-400 line-through ml-2">$29.99</span>
						<div className="text-xs text-gray-500">
							1-3 Days Express Shipping
						</div>
					</div>
				</div>
				{/* Discount Banner - last on mobile, first on desktop */}
				<div className="bg-neutral-900 text-white rounded-lg p-3 mb-2 flex flex-col order-3 md:order-0">
					<span className="font-bold text-lg">
						UPTO <span className="text-green-400">50% OFF</span>
					</span>
					<span className="text-xs mt-1">
						Final Day to Save{' '}
						<span className="font-bold">Tuesday, September 16, 2025</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card1;
