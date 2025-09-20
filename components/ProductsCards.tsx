import Card from "./CardComponents/Card";

const productsData = [
  {
    rank: "#2 Mouth Tape",
    productImage: "/product2.png",
    features: [
      { text: "Breathable woven fabric with flexibility", isPositive: true },
      { text: "Comfortable fit during use", isPositive: true },
      { text: "Advanced lip positioning", isPositive: true },
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
    productImage: "/product3.png",
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
  {
    rank: "#4 Mouth Tape",
    productImage: "/product4.png",
    features: [
      { text: "Can be worn horizontally or vertically", isPositive: true },
      {
        text: "Minimalist design reduces feelings of claustrophobia",
        isPositive: true,
      },
      {
        text: "Safe on sensitive skin, hypoallergenic formula",
        isPositive: true,
      },
      { text: "Doesn't fully seal the mouth shut", isPositive: false },
      {
        text: "Adhesion fails quickly — doesn't last the night",
        isPositive: false,
      },
      { text: "Residue can be tough to remove", isPositive: false },
      {
        text: "Removal can be uncomfortable or even painful",
        isPositive: false,
      },
    ],
    rating: 4,
    reviewCount: "741+ USERS GAVE THIS BRAND 4 STARS",
    overallScore: 9.0,
    shipping: "2-5 Days Standard Shipping",
  },
  {
    rank: "#5 Mouth Tape",
    productImage: "/product5.png",
    features: [
      { text: "Easy to apply and remove", isPositive: true },
      { text: "Comfortable once in place", isPositive: true },
      { text: "Too small to remove mouth close", isPositive: false },
      { text: "Tears when peeling off the backing", isPositive: false },
      { text: "Struggles to stay on through the night", isPositive: false },
    ],
    rating: 3,
    reviewCount: "680+ USERS GAVE THIS BRAND 3 STARS",
    overallScore: 8.9,
    shipping: "2-5 Days Standard Shipping",
  },
];

function ProductsCards() {
  return (
    <div className="w-full rounded-lg bg-gray-50 py-8 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {productsData.map((product, index) => (
            <Card
              key={index}
              productImage={product.productImage}
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
