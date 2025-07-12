import { Shield, Award, Leaf, Zap } from 'lucide-react';

const standards = [
  {
    icon: Shield,
    title: 'ISO Certified Facility',
    description: 'Our manufacturing facility meets international quality standards and follows strict quality control protocols.',
  },
  {
    icon: Award,
    title: 'Premium Ingredients',
    description: 'We source only the finest natural ingredients from trusted suppliers who share our commitment to quality.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Environmental responsibility is at the core of our operations, from sourcing to packaging.',
  },
  {
    icon: Zap,
    title: 'Innovation Focus',
    description: 'Continuous research and development to bring you the latest in healthy food and beverage technology.',
  },
];

const focusAreas = [
  'All-natural food and beverage options',
  'Healthy food products for all ages',
  'Baby instant cereal and nutrition',
  'Herbal supplements and wellness',
  'Energy drinks with natural ingredients',
  'Consumer products for health and wellness',
];

export default function QualityStandards() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quality <span className="text-emerald-600">Standards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards in everything we do, ensuring every 
            product meets our rigorous quality and safety requirements.
          </p>
        </div>

        {/* Quality Standards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {standards.map((standard, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <standard.icon className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{standard.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{standard.description}</p>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center p-4 bg-emerald-50 rounded-lg">
                <div className="bg-emerald-500 w-2 h-2 rounded-full mr-3" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Information */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Sri Saamba Parmeshwara Industries Private Limited</h3>
          <p className="text-lg opacity-90 mb-4">CIN: U11049KA2024PTC192614</p>
          <p className="opacity-80">
            #1207/343, 9th main, 7th Sector, HSR Layout<br />
            Bangalore, Karnataka – 560102, India
          </p>
        </div>
      </div>
    </section>
  );
}