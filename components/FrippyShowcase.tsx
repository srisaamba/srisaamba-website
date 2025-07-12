import { Check } from "lucide-react";
import CloudinaryImage from "@/components/CloudinaryImage";

const features = [
  "No Artificial Flavors",
  "No Artificial Colors",
  "No Artificial Sweeteners",
  "Real Fruit Juice",
];

export default function FrippyShowcase() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-orange-600 to-yellow-500 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Taste the Fruit,
              <br />
              <span className="text-yellow-300">Feel the Joy</span>
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Frippy brings you the authentic taste of real fruits with every
              sip.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start text-white text-lg"
                >
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <Check size={16} className="text-white" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">310ml</div>
                <div className="text-sm">Bottle Size</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm">Delicious Flavors</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">25%</div>
                <div className="text-sm">Real Fruit Juice</div>
              </div>
            </div>
          </div>

          {/* Right side - Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[700px]">
              <CloudinaryImage
                src="frippy-mango_lcayvv"
                alt="Frippy Mission"
                fill={true}
                className="object-contain rounded-xl shadow-xl"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
