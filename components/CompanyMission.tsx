import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To transform the food and beverage industry by creating healthy, natural products that bring joy and wellness to every household.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become a leading global brand known for innovation in natural food products and commitment to consumer health.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Integrity, quality, innovation, and sustainability guide every decision we make in our journey to better health.',
  },
  {
    icon: Lightbulb,
    title: 'Our Innovation',
    description: 'Constantly researching and developing new products that combine traditional wisdom with modern nutritional science.',
  },
];

export default function CompanyMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything we do is driven by our commitment to bringing you healthier, 
            more natural alternatives without compromising on taste or quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <value.icon className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}