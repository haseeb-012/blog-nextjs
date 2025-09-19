import { UnverifiedIcon, VerifiedIcon } from "@/utils/icon";

function FeaturesSection() {
  return (
    <div>
      <div className="lg:text-md md:text-sm  grid grid-cols-1 gap-y-2 md:grid-cols-2 xl:text-lg">
        <ul className="space-y-2 md:space-y-1 lg:space-y-3 xl:space-y-6">
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Reduces snoring from the very first night
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Helps ease mild sleep apnea & restless breathing
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Wake energized — deeper sleep, brighter mornings
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> No more dry mouth, sore throat, or headaches
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Doctor-formulated, medical-grade, latex-free
            adhesive
          </li>

          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Infused with calming aromatherapy (lavender &
            chamomile options)
          </li>

          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Secure hold all night
          </li>
        </ul>
        <ul className="sm: space-y-2 md:space-y-1 lg:space-y-3 xl:space-y-6">
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Gentle on skin, beard-friendly
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Breathable fabric with micro-airflow for peace of
            mind
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Peels off painlessly, no sticky residue
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Hypoallergenic & dermatologist-tested for sensitive
            skin
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> Fits comfortably on every mouth size
          </li>
          <li className="flex gap-1 sm:gap-2">
            <VerifiedIcon /> 99-day money-back guarantee — risk-free trial
          </li>
          <li className="flex gap-1 sm:gap-2">
            <UnverifiedIcon /> High demand — limited stock often sells out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturesSection;
