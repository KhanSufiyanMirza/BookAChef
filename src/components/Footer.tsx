'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-6">BookAChef</h3>
            <p className="text-gray-300 mb-6">
              Connecting food lovers with talented private chefs for exceptional dining experiences at home or any venue of your choice.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="#why-choose-us" className="text-gray-300 hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="#chefs" className="text-gray-300 hover:text-primary transition-colors">Our Chefs</Link></li>
              <li><Link href="#faq" className="text-gray-300 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Chef Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Chef Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Private Dinner Parties</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Corporate Events</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Cooking Classes</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Meal Prep Services</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Special Occasions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Personal Chef Hire</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Download App */}
          <div>
            <h3 className="text-xl font-bold mb-6">Download Our App</h3>
            <p className="text-gray-300 mb-6">
              Get the BookAChef app on your mobile device for the best chef booking experience.
            </p>
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.5645 7.14458C17.5643 6.41458 17.7542 5.69688 18.1187 5.06367C18.4832 4.43046 19.0113 3.90566 19.6485 3.54458C19.0113 3.0131 18.2523 2.64357 17.4412 2.46333C16.6302 2.28309 15.7903 2.29705 14.9873 2.50399C14.1843 2.71094 13.4412 3.10523 12.8222 3.65431C12.2032 4.20339 11.7284 4.89252 11.4385 5.66458C11.1486 6.43665 11.0524 7.26803 11.1578 8.08621C11.2631 8.90439 11.5673 9.68602 12.0445 10.3546C12.8125 8.9146 14.0965 7.83058 15.6305 7.33558C16.2625 7.1346 16.9145 7.0346 17.5645 7.04458V7.14458Z"/>
                  <path d="M20.6404 11.6731C19.5944 11.1931 18.4564 10.9471 17.2644 10.9471C16.5324 10.9471 15.8244 11.0471 15.1164 11.2471C12.9564 11.8691 11.2404 13.4291 10.4344 15.4851C10.1167 16.3252 10.019 17.2267 10.1509 18.1105C10.2828 18.9942 10.6404 19.8335 11.1918 20.5533C11.7432 21.2731 12.4718 21.8504 13.3109 22.2339C14.1501 22.6175 15.0747 22.7958 16.0044 22.7531C16.4164 21.8131 16.6164 20.8131 16.6164 19.7531C16.6164 17.7531 15.7444 15.9531 14.4244 14.6351C15.254 15.9134 15.6384 17.4191 15.5204 18.9291C15.4024 20.4391 14.7878 21.8693 13.7644 23.0031C13.5604 23.0471 13.3444 23.0711 13.1284 23.0831C12.0884 23.0111 11.0834 22.7022 10.1824 22.1814C9.28137 21.6606 8.5074 20.9412 7.91635 20.0776C7.3253 19.214 6.93442 18.2295 6.76987 17.1978C6.60532 16.1662 6.67079 15.1123 6.96247 14.1091C7.25415 13.106 7.76493 12.1817 8.45643 11.4041C9.14793 10.6265 10.0016 10.0158 10.9572 9.61598C11.9127 9.21615 12.9453 9.03627 13.9844 9.0851C15.0235 9.13393 16.0371 9.40994 16.9484 9.89307C17.8596 10.3762 18.6468 11.0532 19.2524 11.8731C19.7484 11.7891 20.2204 11.6731 20.6644 11.5331L20.6404 11.6731Z"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M5.26895 3.15002C5.03495 3.45202 4.85495 3.84802 4.85495 4.36402C4.85495 4.87402 5.03895 5.28002 5.26895 5.57402C5.49895 5.86802 5.83495 6.06402 6.24095 6.06402C6.64695 6.06402 6.97895 5.86402 7.21295 5.57402C7.44695 5.28402 7.62695 4.88402 7.62695 4.36802C7.62695 3.85202 7.44295 3.44602 7.21295 3.15202C6.98295 2.85802 6.64695 2.66202 6.24095 2.66202C5.83495 2.66202 5.50295 2.86202 5.26895 3.15002Z"/>
                  <path d="M14.233 9.73801L9.445 7.35001C9.017 7.13401 8.565 7.00601 8.125 7.00601C7.413 7.00601 6.729 7.32001 6.217 7.88001C5.709 8.44001 5.445 9.24801 5.445 10.232V10.248V14.756V14.772C5.445 15.756 5.705 16.56 6.213 17.12C6.721 17.68 7.409 17.994 8.125 17.994C8.565 17.994 9.017 17.866 9.445 17.65L14.233 15.262C15.021 14.87 15.565 14.02 15.565 13.496V11.504C15.565 10.98 15.021 10.13 14.233 9.73801Z"/>
                  <path d="M17.5209 2.71022C16.5609 1.77422 15.1569 1.26222 13.8289 1.26222C12.9889 1.26222 12.1849 1.52622 11.6689 2.03022C11.1529 2.53422 10.8809 3.32622 10.8809 4.13422V19.8662C10.8809 20.6742 11.1529 21.4662 11.6689 21.9662C12.1849 22.4662 12.9889 22.7342 13.8289 22.7342C15.1569 22.7342 16.5609 22.2222 17.5209 21.2902C18.4809 20.3582 19.0049 19.0822 19.0049 17.8382V6.16222C19.0049 4.91822 18.4809 3.64222 17.5209 2.71022Z"/>
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} BookAChef. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
      
      {/* SEO Content - Hidden visually but accessible to search engines */}
      <div className="sr-only">
        <h2>Hire a Private Chef for Your Next Event</h2>
        <p>
          BookAChef connects you with professional chefs for private dinners, parties, and events.
          Our platform offers chef services for intimate dinners, birthday parties, anniversaries, corporate events,
          and special occasions. Find personal chefs specializing in various cuisines including Italian, French,
          Japanese, Mediterranean, vegan, and more. Available for in-home cooking, meal prep, and catering services.
        </p>
        <h3>Popular Chef Services</h3>
        <ul>
          <li>In-home private chef dining experience</li>
          <li>Corporate event catering</li>
          <li>Special occasion chef services</li>
          <li>Personal chef for weekly meal preparation</li>
          <li>Cooking classes and culinary workshops</li>
          <li>Wedding reception catering</li>
        </ul>
        <h3>Locations Served</h3>
        <p>
          Our chef network covers major cities and surrounding areas. Book a private chef in your city today!
        </p>
      </div>
    </footer>
  );
} 