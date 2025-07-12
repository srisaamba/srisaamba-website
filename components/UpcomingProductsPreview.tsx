import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const upcomingProducts = [
  {
    id: 1,
    name: 'All-Natural Popcorn',
    category: 'Snacks',
    description: 'Artisanal popcorn varieties made with natural ingredients and unique flavors.',
    features: ['Multiple flavors', 'No artificial additives', 'Perfect for movie nights'],
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    name: 'Fruit Ice Pops',
    category: 'Frozen Treats',
    description: 'Refreshing ice pops made with real fruit juice and natural ingredients.',
    features: ['Real fruit juice', 'No artificial colors', 'Perfect for summer'],
    color: 'from-pink-400 to-red-500',
  },
  {
    id: 3,
    name: 'Baby Instant Cereal',
    category: 'Baby Food',
    description: 'Nutritious instant cereal specially formulated for growing babies.',
    features: ['Age-appropriate nutrition', 'Easy to digest', 'Fortified with vitamins'],
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 4,
    name: 'Herbal Supplements',
    category: 'Wellness',
    description: 'Natural supplements for health and wellness, made with traditional herbs.',
    features: ['Traditional recipes', 'Modern processing', 'Health-focused'],
    color: 'from-purple-400 to-indigo-500',
  },
];

export default function UpcomingProductsPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Clock className="text-indigo-600 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Coming <span className="text-indigo-600">Soon</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're constantly innovating to bring you more natural, healthy products. 
            Here's what's in our development pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {upcomingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                <div className="text-white text-4xl font-bold">?</div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-indigo-600 mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Want to be notified when these products launch?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Stay Updated
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}