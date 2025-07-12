import { Calendar, MapPin, Users, Truck } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'Company Founded',
    description: 'Sri Saamba Parmeshwara Industries Private Limited was established with a vision to transform the food and beverage industry.',
    icon: Calendar,
  },
  {
    year: '2024',
    title: 'Frippy Launch',
    description: 'Launched our flagship Frippy fruit drink series with three delicious flavors - Pineapple, Lychee, and Mango.',
    icon: Truck,
  },
  {
    year: '2024',
    title: 'Dr Fiber Introduction',
    description: 'Introduced Dr Fiber prebiotic sodas, revolutionizing the functional beverage market with health-focused sodas.',
    icon: Users,
  },
  {
    year: 'Future',
    title: 'Expansion Plans',
    description: 'Planning to expand our product line with natural snacks, baby food, and herbal supplements.',
    icon: MapPin,
  },
];

export default function CompanyHistory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a vision to transform the industry to launching innovative products, 
            here's our story of growth and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-20 bg-emerald-200" />
              )}
              
              {/* Icon */}
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-6 z-10">
                <milestone.icon size={24} />
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-emerald-600 font-bold text-lg mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}