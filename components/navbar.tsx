'use client';

import { useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 20);
    });
  }

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="15" fill="none" stroke="#1E293B" strokeWidth="2" />
            <circle cx="50" cy="50" r="3" fill="#1E293B" />
            <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="#1E293B" strokeWidth="1.5" />
            <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="#1E293B" strokeWidth="1.5" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="#1E293B" strokeWidth="1.5" transform="rotate(120 50 50)" />
            <circle cx="80" cy="50" r="3.5" fill="#1E293B" />
            <circle cx="20" cy="67" r="3.5" fill="#1E293B" />
            <circle cx="20" cy="33" r="3.5" fill="#1E293B" />
          </svg>
          <span className="font-bold text-lg text-slate-800">LysoGenix</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Products
          </a>
          <a href="#process" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Our Process
          </a>
          <a href="#why-us" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Why Us
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2 rounded-lg transition-colors cursor-pointer"
        >
          Request Free Sample
        </button>
      </div>
    </nav>
  );
}
