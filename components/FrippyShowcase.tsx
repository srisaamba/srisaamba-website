import { Check } from 'lucide-react';
import CloudinaryImage from '@/components/CloudinaryImage';

const features = [
  'No Artificial Flavors',
  'No Artificial Colors',
  'No Artificial Sweeteners',
  'Real Fruit Juice',
];

export default function FrippyShowcase() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <CloudinaryImage
          src="frippy-our-mission_yfjbhb"
          alt="Frippy Mission"
          fill={true}
          className=""
          quality={85}
          width={1920}
          height={1080}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-yellow-500/80" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Taste the Fruit,<br />
              <span className="text-yellow-300">Feel the Joy</span>
            </h2>
            <p className="text-2xl text-white mb-8 leading-relaxed">
              Frippy brings you the authentic taste of real fruits with every sip.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white text-lg">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <Check size={16} className="text-white" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">310ml</div>
                <div className="text-sm">Bottle Size</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm">Delicious Flavors</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">25%</div>
                <div className="text-sm">Real Fruit Juice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}