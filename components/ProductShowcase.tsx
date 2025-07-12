'use client';

import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';

const products = [
  {
    id: 1,
    name: 'Frippy Pineapple',
    image: 'frippy-pineapple_wzeldc',
    category: 'Fruit Drink',
    description: 'Original Pineapple Juice with Nata de Coco',
  },
  {
    id: 2,
    name: 'Frippy Lychee',
    image: 'frippy-lychee_rdqw5z',
    category: 'Fruit Drink',
    description: 'Real Lychee Juice with Chewable Experience',
  },
  {
    id: 3,
    name: 'Frippy Mango',
    image: 'frippy-mango_lcayvv',
    category: 'Fruit Drink',
    description: 'Mango Fruit with Chewy Nata de Coco',
  },
  {
    id: 4,
    name: 'Dr Fiber Berry Peach',
    image: 'drfibre-berry-peach_fnmpyw',
    category: 'Prebiotic Soda',
    description: '5g Fiber, Infused with Ashwagandha',
  },
  {
    id: 5,
    name: 'Dr Fiber Ginger Ale',
    image: 'drfibre-ale_mxzohz',
    category: 'Prebiotic Soda',
    description: 'Digestive Health Support',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of natural beverages crafted with the finest ingredients, 
            no artificial additives, and a commitment to your health and taste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <CloudinaryImage
                  src={product.image}
                  alt={product.name}
                  fill={true}
                  className="group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-emerald-600 mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}