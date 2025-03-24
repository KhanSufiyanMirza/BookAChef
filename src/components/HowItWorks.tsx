'use client';

import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Browse & Select a Chef',
      description: 'Browse through our curated selection of professional chefs. Filter by cuisine, ratings, and availability to find your perfect match.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Book Your Date',
      description: 'Select your preferred date and time, customize your menu, and specify any dietary requirements or special requests.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Confirm & Pay',
      description: 'Secure your booking with our safe payment system. We only release payment to the chef after your successful event.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Enjoy Your Experience',
      description: 'Sit back and enjoy as your private chef handles everything from preparation to cleanup. All you need to do is savor the delicious meal!',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">How BookAChef Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our simple 4-step process makes booking a professional chef for your event effortless and worry-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-light dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg dark:shadow-black/30 transition-shadow border border-transparent dark:border-gray-700">
              <div className="w-14 h-14 bg-primary bg-opacity-10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                {step.icon}
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-full text-white font-bold flex items-center justify-center mr-3">
                  {step.id}
                </div>
                <h3 className="font-bold text-xl dark:text-white">{step.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile App Highlight */}
        <div className="mt-20 bg-gradient-to-r from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Book Your Chef On-The-Go</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Download our mobile app to browse, book, and manage your private chef experiences from anywhere, anytime. Our intuitive app makes finding the perfect chef simple and convenient.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="dark:text-gray-300">Filter chefs by cuisine, location, and price</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="dark:text-gray-300">Review chef profiles, menus, and ratings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="dark:text-gray-300">Chat with chefs to customize your menu</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="dark:text-gray-300">Secure payment and booking management</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80" 
                alt="BookAChef Mobile App Interface"
                width={300}
                height={600}
                className="rounded-3xl shadow-xl dark:shadow-black/50 mx-auto"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 dark:opacity-30 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20 dark:opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 