export default function ProductsHero() {
  return (
    <section className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our <span className="text-yellow-300">Products</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Discover our carefully crafted range of natural beverages, from refreshing 
          fruit drinks to health-supporting prebiotic sodas. Every product is made 
          with the finest natural ingredients and no artificial additives.
        </p>
      </div>
    </section>
  );
}