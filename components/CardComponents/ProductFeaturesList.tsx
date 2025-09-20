import { UnverifiedIcon, VerifiedIcon } from "@/utils/icon";

function ProductFeaturesList() {
  return (
    <div className="space-y-4">
      {/* Mobile Layout - Single Column */}
      <div className="space-y-3 md:hidden">
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Reduces snoring from the very first night
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Helps ease mild sleep apnea & restless breathing
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Wake energized — deeper sleep, brighter mornings
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            No more dry mouth, sore throat, or headaches
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Doctor-formulated, medical-grade, latex-free adhesive
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Infused with calming aromatherapy (lavender & chamomile options)
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">Secure hold all night</span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">Gentle on skin, beard-friendly</span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Breathable fabric with micro-airflow for peace of mind
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Peels off painlessly, no sticky residue
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            Hypoallergenic & dermatologist-tested for sensitive skin
          </span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">Fits comfortably on every mouth size</span>
        </div>
        <div className="flex items-start gap-2">
          <VerifiedIcon />
          <span className="text-sm">
            99-day money-back guarantee — risk-free trial
          </span>
        </div>
        <div className="flex items-start gap-2">
          <UnverifiedIcon />
          <span className="text-sm">
            High demand — limited stock often sells out
          </span>
        </div>
      </div>

      {/* Desktop/Tablet Layout - Two Columns */}
      <div className="hidden gap-x-6 gap-y-3 md:grid md:grid-cols-2 lg:gap-y-4">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Reduces snoring from the very first night
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Helps ease mild sleep apnea & restless breathing
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Wake energized — deeper sleep, brighter mornings
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              No more dry mouth, sore throat, or headaches
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Doctor-formulated, medical-grade, latex-free adhesive
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Infused with calming aromatherapy (lavender & chamomile options)
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">Secure hold all night</span>
          </div>
        </div>

        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Gentle on skin, beard-friendly
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Breathable fabric with micro-airflow for peace of mind
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Peels off painlessly, no sticky residue
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Hypoallergenic & dermatologist-tested for sensitive skin
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              Fits comfortably on every mouth size
            </span>
          </div>
          <div className="flex items-start gap-2">
            <VerifiedIcon />
            <span className="text-sm lg:text-base">
              99-day money-back guarantee — risk-free trial
            </span>
          </div>
          <div className="flex items-start gap-2">
            <UnverifiedIcon />
            <span className="text-sm lg:text-base">
              High demand — limited stock often sells out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeaturesList;
