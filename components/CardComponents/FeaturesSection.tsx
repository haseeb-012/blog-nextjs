import { UnverifiedIcon, VerifiedIcon } from '@/utils/icon';
import React from 'react'

function FeaturesSection() {
  return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm order-1">
				<ul className="space-y-1 lex gap-2">
					<li className="flex gap-2">
						<VerifiedIcon /> Reduces snoring from the very first night
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Helps ease mild sleep apnea & restless breathing
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Wake energized — deeper sleep, brighter mornings
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> No more dry mouth, sore throat, or headaches
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Doctor-formulated, medical-grade, latex-free
						adhesive
					</li>

					<li className="flex gap-2">
						<VerifiedIcon /> Wake energized — deeper sleep, brighter mornings
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> No more dry mouth, sore throat, or headaches
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Doctor-formulated, medical-grade, latex-free
						adhesive
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Infused with calming aromatherapy (lavender &
						chamomile options)
					</li>

					<li className="flex gap-2">
						<VerifiedIcon /> Secure hold all night
					</li>
				</ul>
				<ul className="space-y-1">
					<li className="flex gap-2">
						<VerifiedIcon /> Gentle on skin, beard-friendly
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Breathable fabric with micro-airflow for peace of
						mind
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Peels off painlessly, no sticky residue
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Hypoallergenic & dermatologist-tested for sensitive
						skin
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> Fits comfortably on every mouth size
					</li>
					<li className="flex gap-2">
						<VerifiedIcon /> 99-day money-back guarantee — risk-free trial
					</li>
					<li className="flex gap-2">
						<UnverifiedIcon /> High demand — limited stock often sells out
					</li>
				</ul>
			</div>
		</div>
	);
}

export default FeaturesSection