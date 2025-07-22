'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/work" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
            >
              Services
            </Link>
            <Link 
              href="/why-us" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
            >
              Why us
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="underline text-2xl font-bold text-gray-900">
              proplaycreatives.org™
            </Link>
          </div>

          {/* Right Section - Social Icons and Contact */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                </svg>
              </Link>
            </div>

            {/* Contact Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-poppins text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Contact
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link 
                href="/work" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/why-us" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-poppins"
                onClick={() => setIsMenuOpen(false)}
              >
                Why us
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center space-x-4 px-3">
                  <Link 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                  <Link 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-poppins text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 