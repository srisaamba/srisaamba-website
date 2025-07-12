import { Check, Droplets, Heart, Leaf } from 'lucide-react';
import CloudinaryImage from '@/components/CloudinaryImage';

const frippyProducts = [
  {
    id: 1,
    name: 'Pineapple Drink',
    image: 'frippy-pineapple_wzeldc',
    description: 'Original Pineapple Juice Concentrate (25%) with Nata de Coco (15%)',
    highlights: ['Real pineapple juice', 'Chewy nata de coco', 'Tropical flavor'],
  },
  {
    id: 2,
    name: 'Lychee Drink',
    image: 'frippy-lychee_rdqw5z',
    description: 'Real lychee juice with an unforgettable chewable experience',
    highlights: ['Authentic lychee taste', 'Unique texture', 'Exotic flavor'],
  },
  {
    id: 3,
    name: 'Mango Drink',
    image: 'frippy-mango_lcayvv',
    description: 'Premium mango fruit with chewy nata de coco pieces',
    highlights: ['King of fruits', 'Rich mango flavor', 'Satisfying texture'],
  },
];

const keyBenefits = [
  { icon: Leaf, title: 'No Artificial Flavors', description: 'Pure, natural fruit extracts' },
  { icon: Droplets, title: 'No Artificial Colors', description: 'Natural fruit pigments only' },
  { icon: Heart, title: 'No Artificial Sweeteners', description: 'Naturally sweet goodness' },
  { icon: Check, title: 'Real Fruit Juice', description: '25% real fruit concentrate' },
];

export default function FrippyProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-4xl font-bold text-orange-600 mb-4">Frippy</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Taste the Fruit, Feel the Joy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our signature fruit drinks bring you the authentic taste of real fruits 
            with every refreshing sip. Made with natural ingredients and love.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {keyBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-orange-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {frippyProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64">
               <CloudinaryImage
                  src={product.image}
                  alt={product.name}
                 fill={true}
                 className=""
                  quality={85}
                 width={400}
                 height={300}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Frippy {product.name}
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">310ml</div>
              <div className="text-gray-700">Bottle Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">6 Pack</div>
              <div className="text-gray-700">Per Carton</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-gray-700">Real Fruit Juice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}