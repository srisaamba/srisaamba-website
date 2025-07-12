'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cloudinaryLoader } from '@/lib/cloudinaryLoader';

export default function FactoryVideo() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source 
            src="https://res.cloudinary.com/ddhfjoo0u/video/upload/v1752315391/frippy_production_video_z6v9b7.mp4" 
            type="video/mp4" 
          />
        </video>
      ) : (
        <div className="absolute inset-0">
          <Image
            loader={cloudinaryLoader}
            src="frippy-our-mission_yfjbhb"
            alt="Sri Saamba Production Facility"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
      )}
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Crafted with <span className="text-emerald-400">Precision</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            State-of-the-art manufacturing facility ensuring the highest quality 
            standards for every bottle we produce.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-lg">Natural Ingredients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">ISO</div>
              <div className="text-lg">Certified Facility</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-lg">Quality Control</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}