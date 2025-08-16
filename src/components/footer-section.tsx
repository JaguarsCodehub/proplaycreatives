'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [floatingElements, setFloatingElements] = useState<Array<{left: string, top: string, delay: string}>>([]);

  useEffect(() => {
    // Generate random positions for floating elements on client side only
    const elements = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    }));
    setFloatingElements(elements);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full font-poppins">
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-200/40 via-gray-300/30 to-transparent rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-300/40 via-gray-400/30 to-transparent rounded-full blur-3xl translate-x-40 translate-y-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-200/20 to-gray-300/20 rounded-full blur-2xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #374151 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Floating elements */}
          <div className="absolute inset-0">
            {floatingElements.map((element, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-gray-400/60 to-gray-500/60 rounded-full blur-sm"
                style={{
                  left: element.left,
                  top: element.top,
                  animationDelay: element.delay,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-semibold text-gray-900 tracking-wide mb-8">
              Let's Talk!
            </h2>
            
            {/* Elegant divider */}
            <div className="flex items-center justify-center space-x-3 mb-12">
              <div className="w-3 h-3 bg-gray-400 rounded-full shadow-sm"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full shadow-sm"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full shadow-sm"></div>
              <div className="w-8 h-8 bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </div>
              <div className="w-3 h-3 bg-gray-600 rounded-full shadow-sm"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full shadow-sm"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full shadow-sm"></div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-200/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-200/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  required
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-200/50 transition-all duration-300 shadow-sm hover:shadow-md resize-none"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-900 hover:to-black text-white font-medium tracking-wide rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gradient-to-r from-gray-100 via-white to-gray-50 border-t border-gray-200/60 text-gray-700 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <div className="font-semibold text-lg tracking-wide text-gray-900">
            Pro Play Creatives
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/" className="hover:text-gray-900 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-900 transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-900 transition-colors duration-200 font-medium">
              Services
            </Link>
            <Link href="/work" className="hover:text-gray-900 transition-colors duration-200 font-medium">
              Work
            </Link>
            <Link href="/contact" className="hover:text-gray-900 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-4 pt-4 border-t border-gray-200/60">
          <p className="text-xs text-gray-500 text-center">
            © 2024 Pro Play Creatives. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
