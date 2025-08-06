'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Brand {
  id: number;
  name: string;
  image: string;
  alt: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: 'Beardo',
    image: '/beardo-brand.png',
    alt: 'Beardo Brand Logo'
  },
  {
    id: 2,
    name: 'Hell',
    image: '/hell-brand.jpg',
    alt: 'Hell Brand Logo'
  },
  {
    id: 3,
    name: 'Bewakoof',
    image: '/bewakoof.png',
    alt: 'Bewakoof Brand Logo'
  },
  {
    id: 4,
    name: 'Samsung',
    image: '/samsung.png',
    alt: 'Samsung Brand Logo'
  },
  {
    id: 5,
    name: 'Red Bull',
    image: '/redbull-logo.jpg',
    alt: 'Red Bull Brand Logo'
  },
  {
    id: 6,
    name: 'WePlay',
    image: '/weplay.png',
    alt: 'WePlay Brand Logo'
  },
  {
    id: 7,
    name: 'Mostbet',
    image: '/mostbet.jpeg',
    alt: 'Mostbet Brand Logo'
  },
  {
    id: 8,
    name: '1xBet',
    image: '/1xbet.jpg',
    alt: '1xBet Brand Logo'
  }
];

export function BrandSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === brands.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? brands.length - 4 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const visibleBrands = brands.slice(currentIndex, currentIndex + 4);

  return (
    <section className="relative overflow-hidden py-24 min-h-[60vh] bg-gradient-to-br from-[#180cff] via-[#4d86ff] to-[#e7e0ff]">
      {/* Modern Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-gradient-to-tl from-blue-400/20 to-cyan-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-start">
            <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-pink-500 mr-6 rounded-full"></div>
            <div>
              <h2 className="text-5xl md:text-6xl font-medium text-white font-poppins mb-2 drop-shadow-lg">
                Brands
              </h2>
              <p className="text-lg text-purple-200 font-poppins font-medium">
                #Partnerships
              </p>
            </div>
          </div>
        </div>
        {/* Brand Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Brand Logos */}
          <div className="flex justify-center items-center space-x-10 md:space-x-16 lg:space-x-20 px-8 md:px-16">
            {visibleBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-36 h-24 md:w-48 md:h-32 lg:w-56 lg:h-36 flex items-center justify-center bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-4 transition-all duration-300 hover:bg-white/60 hover:border-white/50">
                  <Image
                    src={brand.image}
                    alt={brand.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 224px"
                    style={{ borderRadius: '20px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 4)}
              className={`w-4 h-4 rounded-full border-2 border-white/40 transition-all duration-300 shadow-md ${
                Math.floor(currentIndex / 4) === index
                  ? 'bg-gradient-to-br from-orange-400 to-pink-500 scale-125 shadow-lg'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 