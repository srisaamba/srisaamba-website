import Image from 'next/image';
import { Check, Shield, Heart, Zap, Leaf } from 'lucide-react';
import { cloudinaryLoader } from '@/lib/cloudinaryLoader';

const drFiberProducts = [
  {
    id: 1,
    name: 'Berry Peach Prebiotic Soda',
    image: 'drfibre-berry-peach_fnmpyw',
    description: 'Delicious prebiotic soda with 5g fiber, infused with Ashwagandha for stress relief and digestive health',
    highlights: ['5g dietary fiber', 'Ashwagandha infused', 'Stress relief', 'Digestive support'],
  },
  {
    id: 2,
    name: 'Ginger Ale Prebiotic Soda',
    image: 'drfibre-ale_mxzohz',
    description: 'Classic ginger ale reimagined with prebiotic benefits for optimal digestive health',
    highlights: ['Natural ginger', 'Digestive aid', 'Prebiotic benefits', 'Refreshing taste'],
  },
];

const healthBenefits = [
  { icon: Heart, title: 'Digestive Health', description: 'Supports gut microbiome' },
  { icon: Shield, title: 'Immune Support', description: 'Strengthens natural defenses' },
  { icon: Zap, title: 'Low Sugar', description: 'Healthier soda alternative' },
  { icon: Leaf, title: 'Herbal Infusion', description: 'Natural herbs and extracts' },
];

export default function DrFiberProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-4xl font-bold text-blue-600 mb-4">Dr Fiber</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soda that Heals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary prebiotic sodas that taste amazing while supporting your 
            digestive health. The future of functional beverages is here.
          </p>
        </div>

        {/* Health Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {healthBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {drFiberProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  loader={cloudinaryLoader}
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dr Fiber {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="bg-green-500 rounded-full p-1 mr-3">
                        <Check size={12} className="text-white" />
                      </div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Specifications */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Product Specifications
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">250ml</div>
              <div className="text-gray-700">Can Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5g</div>
              <div className="text-gray-700">Fiber Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Low</div>
              <div className="text-gray-700">Sugar Formula</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-700">Artificial Sweeteners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}