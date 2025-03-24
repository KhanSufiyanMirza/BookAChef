'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact & Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to our support team or download our app to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-light rounded-xl p-8 shadow-md">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Assistance</option>
                    <option value="chef">Chef Application</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* App Download & Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Download Our App</h3>
              <p className="text-gray-600 mb-8">
                Get the complete BookAChef experience by downloading our mobile app. Browse chefs, book services, and manage your events on the go.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.5645 7.14458C17.5643 6.41458 17.7542 5.69688 18.1187 5.06367C18.4832 4.43046 19.0113 3.90566 19.6485 3.54458C19.0113 3.0131 18.2523 2.64357 17.4412 2.46333C16.6302 2.28309 15.7903 2.29705 14.9873 2.50399C14.1843 2.71094 13.4412 3.10523 12.8222 3.65431C12.2032 4.20339 11.7284 4.89252 11.4385 5.66458C11.1486 6.43665 11.0524 7.26803 11.1578 8.08621C11.2631 8.90439 11.5673 9.68602 12.0445 10.3546C12.8125 8.9146 14.0965 7.83058 15.6305 7.33558C16.2625 7.1346 16.9145 7.0346 17.5645 7.04458V7.14458Z"/>
                    <path d="M20.6404 11.6731C19.5944 11.1931 18.4564 10.9471 17.2644 10.9471C16.5324 10.9471 15.8244 11.0471 15.1164 11.2471C12.9564 11.8691 11.2404 13.4291 10.4344 15.4851C10.1167 16.3252 10.019 17.2267 10.1509 18.1105C10.2828 18.9942 10.6404 19.8335 11.1918 20.5533C11.7432 21.2731 12.4718 21.8504 13.3109 22.2339C14.1501 22.6175 15.0747 22.7958 16.0044 22.7531C16.4164 21.8131 16.6164 20.8131 16.6164 19.7531C16.6164 17.7531 15.7444 15.9531 14.4244 14.6351C15.254 15.9134 15.6384 17.4191 15.5204 18.9291C15.4024 20.4391 14.7878 21.8693 13.7644 23.0031C13.5604 23.0471 13.3444 23.0711 13.1284 23.0831C12.0884 23.0111 11.0834 22.7022 10.1824 22.1814C9.28137 21.6606 8.5074 20.9412 7.91635 20.0776C7.3253 19.214 6.93442 18.2295 6.76987 17.1978C6.60532 16.1662 6.67079 15.1123 6.96247 14.1091C7.25415 13.106 7.76493 12.1817 8.45643 11.4041C9.14793 10.6265 10.0016 10.0158 10.9572 9.61598C11.9127 9.21615 12.9453 9.03627 13.9844 9.0851C15.0235 9.13393 16.0371 9.40994 16.9484 9.89307C17.8596 10.3762 18.6468 11.0532 19.2524 11.8731C19.7484 11.7891 20.2204 11.6731 20.6644 11.5331L20.6404 11.6731Z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M5.26895 3.15002C5.03495 3.45202 4.85495 3.84802 4.85495 4.36402C4.85495 4.87402 5.03895 5.28002 5.26895 5.57402C5.49895 5.86802 5.83495 6.06402 6.24095 6.06402C6.64695 6.06402 6.97895 5.86402 7.21295 5.57402C7.44695 5.28402 7.62695 4.88402 7.62695 4.36802C7.62695 3.85202 7.44295 3.44602 7.21295 3.15202C6.98295 2.85802 6.64695 2.66202 6.24095 2.66202C5.83495 2.66202 5.50295 2.86202 5.26895 3.15002Z"/>
                    <path d="M14.233 9.73801L9.445 7.35001C9.017 7.13401 8.565 7.00601 8.125 7.00601C7.413 7.00601 6.729 7.32001 6.217 7.88001C5.709 8.44001 5.445 9.24801 5.445 10.232V10.248V14.756V14.772C5.445 15.756 5.705 16.56 6.213 17.12C6.721 17.68 7.409 17.994 8.125 17.994C8.565 17.994 9.017 17.866 9.445 17.65L14.233 15.262C15.021 14.87 15.565 14.02 15.565 13.496V11.504C15.565 10.98 15.021 10.13 14.233 9.73801Z"/>
                    <path d="M17.5209 2.71022C16.5609 1.77422 15.1569 1.26222 13.8289 1.26222C12.9889 1.26222 12.1849 1.52622 11.6689 2.03022C11.1529 2.53422 10.8809 3.32622 10.8809 4.13422V19.8662C10.8809 20.6742 11.1529 21.4662 11.6689 21.9662C12.1849 22.4662 12.9889 22.7342 13.8289 22.7342C15.1569 22.7342 16.5609 22.2222 17.5209 21.2902C18.4809 20.3582 19.0049 19.0822 19.0049 17.8382V6.16222C19.0049 4.91822 18.4809 3.64222 17.5209 2.71022Z"/>
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:support@bookachef.com" className="text-primary hover:underline">support@bookachef.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
                    <a href="tel:+918108432256" className="text-primary hover:underline">+91 81084 32256</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/918108432256" className="text-primary hover:underline">+91 81084 32256</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Culinary Street, Foodie City, FC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 