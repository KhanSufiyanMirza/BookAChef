'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

export default function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match this with the duration-1000 in the CSS
  }, [isTransitioning, images.length]);

  useEffect(() => {
    // Create an interval for automatic image changes
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match with transition duration
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-bl from-primary/5 to-transparent dark:from-primary/10"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-tr from-secondary/5 to-transparent dark:from-secondary/10"></div>
      <div className="absolute top-20 left-[15%] w-72 h-72 rounded-full border border-primary/10 opacity-70 dark:border-primary/20"></div>
      <div className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full border border-secondary/10 opacity-70 dark:border-secondary/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 md:py-16 items-center h-full">
          {/* Content Column */}
          <div className="lg:col-span-6 lg:pr-8 space-y-6">
            {/* Subtle eyebrow text with accent line */}
            <div className="flex items-center space-x-2">
              <div className="h-[1px] w-10 bg-primary"></div>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Private Chef Service</span>
            </div>
            
            {/* Headline with refined typography */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-none">
                <span className="block dark:text-white">Elevate Your</span>
                <span className="block text-primary">Dining Experience</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Enjoy restaurant-quality cuisine in the comfort of your home with our curated selection of professional private chefs.
              </p>
            </div>
            
            {/* Trust badges in a more elegant layout */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium dark:text-white">Verified Chefs</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium dark:text-white">Secure Booking</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="font-medium dark:text-white">100% Satisfaction</span>
              </div>
            </div>
            
            {/* Compelling CTA section */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link 
                href="#booking" 
                className="px-8 py-4 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center"
              >
                Book Your Chef
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="#how-it-works" 
                className="px-8 py-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
            
            {/* Mobile app download */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Download our app</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#app-store" className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.5645 7.14458C17.5643 6.41458 17.7542 5.69688 18.1187 5.06367C18.4832 4.43046 19.0113 3.90566 19.6485 3.54458C19.0113 3.0131 18.2523 2.64357 17.4412 2.46333C16.6302 2.28309 15.7903 2.29705 14.9873 2.50399C14.1843 2.71094 13.4412 3.10523 12.8222 3.65431C12.2032 4.20339 11.7284 4.89252 11.4385 5.66458C11.1486 6.43665 11.0524 7.26803 11.1578 8.08621C11.2631 8.90439 11.5673 9.68602 12.0445 10.3546C12.8125 8.9146 14.0965 7.83058 15.6305 7.33558C16.2625 7.1346 16.9145 7.0346 17.5645 7.04458V7.14458Z"/>
                    <path d="M20.6404 11.6731C19.5944 11.1931 18.4564 10.9471 17.2644 10.9471C16.5324 10.9471 15.8244 11.0471 15.1164 11.2471C12.9564 11.8691 11.2404 13.4291 10.4344 15.4851C10.1167 16.3252 10.019 17.2267 10.1509 18.1105C10.2828 18.9942 10.6404 19.8335 11.1918 20.5533C11.7432 21.2731 12.4718 21.8504 13.3109 22.2339C14.1501 22.6175 15.0747 22.7958 16.0044 22.7531C16.4164 21.8131 16.6164 20.8131 16.6164 19.7531C16.6164 17.7531 15.7444 15.9531 14.4244 14.6351C15.254 15.9134 15.6384 17.4191 15.5204 18.9291C15.4024 20.4391 14.7878 21.8693 13.7644 23.0031C13.5604 23.0471 13.3444 23.0711 13.1284 23.0831C12.0884 23.0111 11.0834 22.7022 10.1824 22.1814C9.28137 21.6606 8.5074 20.9412 7.91635 20.0776C7.3253 19.214 6.93442 18.2295 6.76987 17.1978C6.60532 16.1662 6.67079 15.1123 6.96247 14.1091C7.25415 13.106 7.76493 12.1817 8.45643 11.4041C9.14793 10.6265 10.0016 10.0158 10.9572 9.61598C11.9127 9.21615 12.9453 9.03627 13.9844 9.0851C15.0235 9.13393 16.0371 9.40994 16.9484 9.89307C17.8596 10.3762 18.6468 11.0532 19.2524 11.8731C19.7484 11.7891 20.2204 11.6731 20.6644 11.5331L20.6404 11.6731Z"/>
                  </svg>
                  <div>
                    <div className="text-xs">App Store</div>
                  </div>
                </Link>
                <Link href="#google-play" className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M5.26895 3.15002C5.03495 3.45202 4.85495 3.84802 4.85495 4.36402C4.85495 4.87402 5.03895 5.28002 5.26895 5.57402C5.49895 5.86802 5.83495 6.06402 6.24095 6.06402C6.64695 6.06402 6.97895 5.86402 7.21295 5.57402C7.44695 5.28402 7.62695 4.88402 7.62695 4.36802C7.62695 3.85202 7.44295 3.44602 7.21295 3.15202C6.98295 2.85802 6.64695 2.66202 6.24095 2.66202C5.83495 2.66202 5.50295 2.86202 5.26895 3.15002Z"/>
                    <path d="M14.233 9.73801L9.445 7.35001C9.017 7.13401 8.565 7.00601 8.125 7.00601C7.413 7.00601 6.729 7.32001 6.217 7.88001C5.709 8.44001 5.445 9.24801 5.445 10.232V10.248V14.756V14.772C5.445 15.756 5.705 16.56 6.213 17.12C6.721 17.68 7.409 17.994 8.125 17.994C8.565 17.994 9.017 17.866 9.445 17.65L14.233 15.262C15.021 14.87 15.565 14.02 15.565 13.496V11.504C15.565 10.98 15.021 10.13 14.233 9.73801Z"/>
                    <path d="M17.5209 2.71022C16.5609 1.77422 15.1569 1.26222 13.8289 1.26222C12.9889 1.26222 12.1849 1.52622 11.6689 2.03022C11.1529 2.53422 10.8809 3.32622 10.8809 4.13422V19.8662C10.8809 20.6742 11.1529 21.4662 11.6689 21.9662C12.1849 22.4662 12.9889 22.7342 13.8289 22.7342C15.1569 22.7342 16.5609 22.2222 17.5209 21.2902C18.4809 20.3582 19.0049 19.0822 19.0049 17.8382V6.16222C19.0049 4.91822 18.4809 3.64222 17.5209 2.71022Z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Images Column - Premium Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] max-w-lg mx-auto lg:max-w-none">
              {/* Main hero image in premium frame */}
              <div className="relative h-full w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/30">
                {/* Image slider */}
                <div className="relative h-full w-full">
                  {images.map((src, index) => (
                    <div 
                      key={index} 
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <Image 
                        src={src}
                        alt={`Chef showcase ${index + 1}`}
                        className="object-cover"
                        fill
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent mix-blend-multiply z-20"></div>
                  
                  {/* Indicator dots */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-white scale-110' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute bottom-10 right-0 transform translate-x-1/4 bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-lg dark:shadow-black/30 z-30">
                <div className="flex items-center justify-between gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Expert Chefs</div>
                  </div>
                  <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="dark:fill-gray-900"></path>
        </svg>
      </div>
    </section>
  );
} 