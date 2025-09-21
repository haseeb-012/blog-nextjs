import { NonVerifiedIcon, VerifiedIcon } from "@/utils/icon";

function ProductFeaturesList() {
  const features = [
    { text: "Reduces snoring from the very first night", isPositive: true },
    {
      text: "Helps ease mild sleep apnea & restless breathing",
      isPositive: true,
    },
    {
      text: "Wake energized — deeper sleep, brighter mornings",
      isPositive: true,
    },
    { text: "No more dry mouth, sore throat, or headaches", isPositive: true },
    {
      text: "Doctor-formulated, medical-grade, latex-free adhesive",
      isPositive: true,
    },
    {
      text: "Infused with calming aromatherapy (lavender & chamomile options)",
      isPositive: true,
    },
    { text: "Secure hold all night", isPositive: true },
    { text: "Gentle on skin, beard-friendly", isPositive: true },
    {
      text: "Breathable fabric with micro-airflow for peace of mind",
      isPositive: true,
    },
    { text: "Peels off painlessly, no sticky residue", isPositive: true },
    {
      text: "Hypoallergenic & dermatologist-tested for sensitive skin",
      isPositive: true,
    },
    { text: "Fits comfortably on every mouth size", isPositive: true },
    { text: "99-day money-back guarantee — risk-free trial", isPositive: true },
    { text: "High demand — limited stock often sells out", isPositive: false },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-6 md:gap-y-3 lg:gap-y-4">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-2">
          {feature.isPositive ? <VerifiedIcon /> : <NonVerifiedIcon />}
          <span className="text-sm leading-relaxed lg:text-base">
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductFeaturesList;
