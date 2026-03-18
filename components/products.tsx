import Image from 'next/image';

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Our Primary Products
          </h2>
          <p className="text-lg text-slate-600">Premium bioactives sourced with precision and care</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Product 1: Elite Grade Silk Cocoons */}
          <div className="group overflow-hidden rounded-lg bg-white border border-slate-200 hover:border-amber-300 transition-colors">
            <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
              <Image
                src="/Premium_cocoon.png"
                alt="Elite Grade Silk Cocoons"
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Elite Grade Silk Cocoons</h3>
              <p className="text-xs text-amber-600 font-semibold mb-3 uppercase tracking-wide">Highest Quality</p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Very clean, highly hand-picked cocoons. Perfect for premium beauty brands requiring pristine materials.
              </p>
              <ul className="space-y-1 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>100% natural Mulberry Silk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>Zero chemical dyes or processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>Highly hand-picked & sorted</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Product 2: Premium Grade Silk Cocoons */}
          <div className="group overflow-hidden rounded-lg bg-white border border-slate-200 hover:border-amber-300 transition-colors">
            <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
              <Image
                src="/Premium_cocoon.webp"
                alt="Premium Grade Silk Cocoons"
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Grade Silk Cocoons</h3>
              <p className="text-xs text-amber-600 font-semibold mb-3 uppercase tracking-wide">High Quality</p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Clean, hand-picked cocoons with excellent consistency. Great balance of quality and value for growing brands.
              </p>
              <ul className="space-y-1 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>100% natural Mulberry Silk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>Zero chemical dyes or processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>Excellent value for volume</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Product 3: Standard Grade Silk Cocoons */}
          <div className="group overflow-hidden rounded-lg bg-white border border-slate-200 hover:border-amber-300 transition-colors">
            <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
              <Image
                src="/SilkCocoons.jpg"
                alt="Standard Grade Silk Cocoons"
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Standard Grade Silk Cocoons</h3>
              <p className="text-xs text-amber-600 font-semibold mb-3 uppercase tracking-wide">Budget-Friendly</p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Clean, sorted cocoons with natural dents. Ideal for bulk orders and cost-conscious formulations.
              </p>
              <ul className="space-y-1 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>100% natural Mulberry Silk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>Zero chemical dyes or processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span>Best wholesale pricing & bulk availability</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Product 4: Raw Cosmetic Beeswax */}
          <div className="group overflow-hidden rounded-lg bg-white border border-slate-200 hover:border-amber-300 transition-colors lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="relative h-48 md:h-56 w-full md:w-1/2 overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1615485676633-424666005e6d?w=500&h=500&fit=crop"
                  alt="Raw Cleaned Cosmetic Beeswax"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Raw Cleaned Cosmetic Beeswax</h3>
                <p className="text-xs text-amber-600 font-semibold mb-3 uppercase tracking-wide">Natural Base Material</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Locally sourced, unrefined yellow beeswax. The perfect organic base for lip balms and solid perfumes.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-0.5">✓</span>
                    <span>100% pure, unrefined beeswax</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-0.5">✓</span>
                    <span>Locally sourced from Andhra Pradesh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-0.5">✓</span>
                    <span>Perfect for lip care and fragrance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-0.5">✓</span>
                    <span>Certified quality standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
