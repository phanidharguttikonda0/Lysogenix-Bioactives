export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="50" cy="50" r="3" fill="white" />
                <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="white" strokeWidth="1.5" />
                <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(120 50 50)" />
                <circle cx="80" cy="50" r="3.5" fill="white" />
                <circle cx="20" cy="67" r="3.5" fill="white" />
                <circle cx="20" cy="33" r="3.5" fill="white" />
              </svg>
              <span className="font-bold text-lg">LysoGenix Bioactives</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              A registered MSME enterprise. Direct-to-brand supplier of premium Mulberry Silk Cocoons and Raw Beeswax from Andhra Pradesh, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact-form" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Request Sample
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm">
                <span className="font-medium text-white">Email:</span><br />
                <a href="mailto:sales@lysogenix.in" className="hover:text-white transition-colors">
                  sales@lysogenix.in
                </a>
              </li>
              <li className="text-slate-300 text-sm">
                <span className="font-medium text-white">Location:</span><br />
                Govind Nagar, Ongole, Andhra Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © 2026 LysoGenix Bioactives. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Established 2026 | Direct Supplier to B2B Cosmetic Brands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
