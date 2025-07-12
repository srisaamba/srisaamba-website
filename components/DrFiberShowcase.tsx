import { Check } from "lucide-react";
import CloudinaryImage from "@/components/CloudinaryImage";

const features = [
  "Infused with Herbs",
  "Low Sugar Formula",
  "No Artificial Sweeteners",
  "Supports Digestive Health",
];

export default function DrFiberShowcase() {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-purple-700 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          {/* Left side - Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <CloudinaryImage
                src="drfibre-berry-peach_fnmpyw"
                alt="Dr Fiber Products"
                fill={true}
                className="object-contain"
                quality={85}
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Soda that <span className="text-blue-300">Heals</span>
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Dr Fiber prebiotic sodas support your digestive health naturally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-end text-white text-lg"
                >
                  <span className="mr-3">{feature}</span>
                  <div className="bg-green-500 rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">5g</div>
                <div className="text-sm">Fiber Content</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">250ml</div>
                <div className="text-sm">Can Size</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm">Unique Flavors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
