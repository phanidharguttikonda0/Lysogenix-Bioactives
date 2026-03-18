'use client';

import Image from 'next/image';

export function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
                Pure, Unbleached Bioactives for Indie Skincare Brands
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                We supply premium, manually sorted Mulberry Silk Cocoons and Raw Beeswax directly from Andhra Pradesh to your formulation lab. Zero dyes. Zero chemical processing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={scrollToForm}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center cursor-pointer"
              >
                Get Your Free 10-Piece Elite Sample Box
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop"
              alt="Premium silk cocoons and natural beeswax"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
