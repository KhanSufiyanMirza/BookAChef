'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <header className="bg-white dark:bg-dark-surface py-4 sticky top-0 z-50 shadow-sm transition-colors duration-200">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-display font-bold text-primary">
            BookA<span className="text-secondary">Chef</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#how-it-works" className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#why-choose-us" className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
            Why Choose Us
          </Link>
          <Link href="#chefs" className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
            Featured Chefs
          </Link>
          <Link href="#faq" className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
            FAQs
          </Link>
          
          {/* Dark mode toggle */}
          <button 
            onClick={toggleDarkMode}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          
          <Link href="#contact" className="btn-primary">
            Download App
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Dark mode toggle for mobile */}
          <button 
            onClick={toggleDarkMode}
            className="theme-toggle-btn mr-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          
          <button 
            className="text-dark dark:text-dark-text p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-surface shadow-md p-4 z-50 transition-colors duration-200">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#how-it-works" 
              className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#why-choose-us" 
              className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link 
              href="#chefs" 
              className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Featured Chefs
            </Link>
            <Link 
              href="#faq" 
              className="text-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="#contact" 
              className="btn-primary w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Download App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 