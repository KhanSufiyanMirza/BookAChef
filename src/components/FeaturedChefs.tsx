'use client';

import Image from 'next/image';
import { useState } from 'react';
import imageLoader from '../lib/image-loader';

export default function FeaturedChefs() {
  const [activeTab, setActiveTab] = useState('chefs');
  
  const chefs = [
    {
      id: 1,
      name: 'Chef Michael Rodriguez',
      specialty: 'Mediterranean Cuisine',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=677&q=80',
      bio: 'With 15 years of experience in Michelin-starred restaurants, Chef Michael brings the authentic flavors of the Mediterranean to your table.'
    },
    {
      id: 2,
      name: 'Chef Sarah Chen',
      specialty: 'Asian Fusion',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      bio: 'A culinary innovator blending traditional Asian techniques with modern twists. Chef Sarah specializes in creating unforgettable dining experiences.'
    },
    {
      id: 3,
      name: 'Chef James Williams',
      specialty: 'Farm-to-Table',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Passionate about sustainable cooking, Chef James sources all ingredients locally and creates seasonal menus that celebrate regional produce.'
    },
    {
      id: 4,
      name: 'Chef Sophia Martinez',
      specialty: 'French Cuisine',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Trained in Paris, Chef Sophia brings classic French techniques and elegant presentation to your dining experience.'
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer L.',
      event: 'Anniversary Dinner',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      quote: 'Our anniversary dinner was magical! Chef Michael created a Mediterranean feast that transported us straight to Santorini. The booking process was seamless, and the entire experience exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Robert T.',
      event: 'Corporate Lunch',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      quote: 'We hired Chef Sarah for our company retreat lunch, and she delivered a stunning Asian fusion menu that impressed everyone. The presentation was beautiful, and the flavors were extraordinary.',
      rating: 5
    },
    {
      id: 3,
      name: 'David & Priya M.',
      event: 'Family Gathering',
      image: 'https://images.unsplash.com/photo-1469571486292-b5051bfb02b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      quote: 'We had Chef James cook for our family reunion, and it was the highlight of our gathering. His farm-to-table approach meant everything was fresh and delicious. Our family is still talking about it!',
      rating: 4
    }
  ];
  
  return (
    <section id="chefs" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Talented Chefs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of professional chefs ready to create unforgettable culinary experiences for your next event.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            <button
              onClick={() => setActiveTab('chefs')}
              className={`px-6 py-2 rounded-md text-sm font-medium ${
                activeTab === 'chefs'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Featured Chefs
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-2 rounded-md text-sm font-medium ${
                activeTab === 'testimonials'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Customer Stories
            </button>
          </div>
        </div>
        
        {/* Featured Chefs */}
        {activeTab === 'chefs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chefs.map((chef) => (
              <div key={chef.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-60">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover"
                    loader={imageLoader}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl">{chef.name}</h3>
                    <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      {chef.rating}
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-3">{chef.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{chef.bio}</p>
                  <button className="text-primary font-medium hover:underline flex items-center">
                    View Full Profile
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                      loader={imageLoader}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.event}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Ready to experience exceptional culinary service for your event?</p>
          <button className="btn-primary inline-flex items-center">
            Download Our App
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 