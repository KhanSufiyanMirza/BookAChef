'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
  className?: string;
}

export default function ImageSlider({
  images,
  interval = 5000,
  className = ''
}: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Reset the timer when the active index changes
  useEffect(() => {
    resetTimeout();
    if (!isHovering) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }
    
    return () => {
      resetTimeout();
    };
  }, [activeIndex, images.length, interval, isHovering]);
  
  // Clear the timeout
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  
  // Handle image change
  const goToImage = (index: number) => {
    setActiveIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div 
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main featured image display */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === activeIndex 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient overlay to improve text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>
        ))}

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 ease-in-out">
          <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
            {images[activeIndex].alt}
          </h3>
          <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
        </div>
      </div>
      
      {/* Thumbnail gallery at the bottom */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative group transition-all duration-300 ${
              index === activeIndex 
                ? 'w-16 h-16 border-2 border-primary' 
                : 'w-14 h-14 border border-gray-300 opacity-70 hover:opacity-100'
            } rounded-md overflow-hidden`}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={`Thumbnail for ${image.alt}`}
              fill
              className="object-cover"
            />
            {index !== activeIndex && (
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Decorative design elements for premium feel */}
      <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-primary rounded-tr-3xl opacity-60"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-secondary rounded-bl-3xl opacity-60"></div>
      
      {/* Next/Prev buttons with slick design */}
      <button
        onClick={() => goToImage((activeIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Previous image"
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
      </button>
      <button
        onClick={() => goToImage((activeIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Next image"
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </button>
    </div>
  );
} 