import Card from "./CardComponents/Card";

const productsData = [
  {
    rank: "#1 Mouth Tape",
    productImage: "/product3.png",
    features: [
      { text: "Breathable woven fabric with flexibility", isPositive: true },
      { text: "Comfortable fit during use", isPositive: true },
      { text: "Helps guide lip placement", isPositive: true },
      {
        text: "No more dry mouth, sore throat, or headaches",
        isPositive: true,
      },
      {
        text: "Doctor-formulated, medical-grade, latex-free adhesive",
        isPositive: true,
      },
    ],
    rating: 5,
    reviewCount: "1850+ USERS GAVE THIS BRAND 4.5 STARS",
    overallScore: 9.5,
    shipping: "2-5 Days Standard Shipping",
  },
  {
    rank: "#2 Mouth Tape",
    features: [
      { text: "Breathable woven fabric with flexibility", isPositive: true },
      { text: "Comfortable fit during use", isPositive: true },
      { text: "Helps guide lip placement", isPositive: true },
      {
        text: "Can trigger redness or breakouts from adhesive",
        isPositive: false,
      },
      { text: "Poor adhesion on beards and mustaches", isPositive: false },
      { text: "Has residue", isPositive: false },
    ],
    rating: 4,
    reviewCount: "1850+ USERS GAVE THIS BRAND 4.5 STARS",
    overallScore: 9.5,
    shipping: "2-5 Days Standard Shipping",
  },
  {
    rank: "#3 Mouth Tape",
    features: [
      { text: "Lightweight, breathable material", isPositive: true },
      { text: "Fits most mouth shapes with ease", isPositive: true },
      {
        text: "Adhesive weak — strips often peel off overnight",
        isPositive: false,
      },
      {
        text: "Small size may not give full coverage for everyone",
        isPositive: false,
      },
    ],
    rating: 4,
    reviewCount: "1300+ USERS GAVE THIS BRAND 4 STARS",
    overallScore: 9.3,
    shipping: "2-5 Days Standard Shipping",
  },
];

function ProductsCards() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-6">
          {productsData.map((product, index) => (
            <Card
              key={index}
              rank={product.rank}
              features={product.features}
              rating={product.rating}
              reviewCount={product.reviewCount}
              overallScore={product.overallScore}
              shipping={product.shipping}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
