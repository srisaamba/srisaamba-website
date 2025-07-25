"use client";

import { useEffect, useRef } from "react";
import { Clock } from "lucide-react";
import Image from "next/image";

const upcomingProducts = [
  {
    id: 1,
    name: "All-Natural Popcorn",
    category: "Snacks",
    description: "Artisanal popcorn varieties made with natural ingredients",
    imageUrl:
      "https://srisaamba.com/wp-content/uploads/2024/09/Caramel-scaled.jpg",
  },
  {
    id: 2,
    name: "Fruit Ice Pops",
    category: "Frozen Treats",
    description: "Refreshing ice pops made with real fruit juice",
    imageUrl:
      "https://srisaamba.com/wp-content/uploads/2024/09/54467e58-5b44-46a4-95c1-1cb1300536e9.jpg",
  },
];

export default function UpcomingProducts() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".product-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Clock className="text-indigo-600 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Coming <span className="text-indigo-600">Soon</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {`We're constantly innovating to bring you more natural, healthy
            products. Here's what's in our pipeline.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {upcomingProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group">
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm font-semibold text-indigo-600 mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Want to be the first to know about our new launches?
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Stay Updated
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .product-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
