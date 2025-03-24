'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const faqItems = [
    {
      id: 1,
      question: 'How does the chef booking process work?',
      answer: 'Booking a chef is simple! Download our app, browse chef profiles, select your preferred date and event details, then choose from available chefs. You can chat with them to customize your menu, confirm your booking, and securely pay through our platform. On the day of your event, your chef will arrive, prepare everything, serve your meal, and clean up afterward.'
    },
    {
      id: 2,
      question: 'What types of events do you cover?',
      answer: 'Our chefs can cater to a wide range of events, from intimate dinners for two to large gatherings of 50+ guests. This includes private dinners, family celebrations, corporate events, cocktail parties, cooking classes, meal prep services, and special occasions like anniversaries or holidays.'
    },
    {
      id: 3,
      question: 'How are chefs vetted before joining your platform?',
      answer: 'We take chef verification very seriously. All chefs must pass a rigorous vetting process that includes professional background checks, verification of culinary certifications and experience, food safety certification, in-person or virtual interviews, and taste tests. We also continuously monitor chef ratings and customer feedback to maintain quality standards.'
    },
    {
      id: 4,
      question: 'What payment options do you offer?',
      answer: 'We accept all major credit and debit cards, as well as digital wallets like Apple Pay and Google Pay. Payment is secure and processed through our platform, with funds only released to the chef after your event is successfully completed, giving you peace of mind and satisfaction guarantee.'
    },
    {
      id: 5,
      question: 'Can I customize my menu for dietary restrictions?',
      answer: 'Absolutely! Most of our chefs specialize in accommodating various dietary needs, including vegetarian, vegan, gluten-free, dairy-free, keto, and allergies. When booking, you can specify your requirements, and chefs will work with you to create a custom menu that meets your needs without compromising on taste or quality.'
    },
    {
      id: 6,
      question: 'What happens if I need to cancel or reschedule?',
      answer: 'We understand plans can change. Our cancellation policy allows for full refunds if cancelled 7+ days before your event. Cancellations made 3-6 days prior receive a 50% refund, while those within 48 hours are non-refundable. However, you can reschedule with the same chef at no additional cost with at least 72 hours notice, subject to their availability.'
    }
  ];
  
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  return (
    <section id="faq" className="section bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our chef booking platform and service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openItem === item.id ? 'transform rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 bg-white border-t border-gray-100">
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions? Contact our support team!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Contact Support
            </a>
            <a href="https://wa.me/918108432256" className="btn-outline inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 