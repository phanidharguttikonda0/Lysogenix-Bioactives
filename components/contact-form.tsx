'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    email: '',
    website: '',
    phone: '',
    shippingAddress: '',
    productInterest: 'elite-cocoons',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          brandName: '',
          contactPerson: '',
          email: '',
          website: '',
          phone: '',
          shippingAddress: '',
          productInterest: 'elite-cocoons',
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-balance">
            Test the Quality Yourself
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are so confident in our processing that we'll send your formulation team a free sample box. Just tell us where to ship it.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Brand Name */}
              <div>
                <label htmlFor="brandName" className="block text-sm font-semibold text-slate-900 mb-2">
                  Brand Name *
                </label>
                <Input
                  id="brandName"
                  name="brandName"
                  type="text"
                  placeholder="Your brand name"
                  value={formData.brandName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  disabled={isLoading}
                />
              </div>

              {/* Contact Person */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-semibold text-slate-900 mb-2">
                  Contact Person *
                </label>
                <Input
                  id="contactPerson"
                  name="contactPerson"
                  type="text"
                  placeholder="Your name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  disabled={isLoading}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  disabled={isLoading}
                />
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-slate-900 mb-2">
                  Brand Website *
                </label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://yourbrand.com"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  disabled={isLoading}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  disabled={isLoading}
                />
              </div>

              {/* Shipping Address */}
              <div>
                <label htmlFor="shippingAddress" className="block text-sm font-semibold text-slate-900 mb-2">
                  Shipping Address *
                </label>
                <Textarea
                  id="shippingAddress"
                  name="shippingAddress"
                  placeholder="Street address, City, State, Postal Code"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  rows={3}
                  disabled={isLoading}
                />
              </div>

              {/* Product Interest */}
              <div>
                <label htmlFor="productInterest" className="block text-sm font-semibold text-slate-900 mb-2">
                  Product Interest *
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                  disabled={isLoading}
                >
                  <optgroup label="Silk Cocoons">
                    <option value="elite-cocoons">Elite Grade Silk Cocoons</option>
                    <option value="premium-cocoons">Premium Grade Silk Cocoons</option>
                    <option value="standard-cocoons">Standard Grade Silk Cocoons</option>
                  </optgroup>
                  <optgroup label="Beeswax">
                    <option value="beeswax">Raw Cleaned Cosmetic Beeswax</option>
                  </optgroup>
                  <optgroup label="Bundles">
                    <option value="elite-cocoons-beeswax">Elite Cocoons + Raw Beeswax</option>
                    <option value="premium-cocoons-beeswax">Premium Cocoons + Raw Beeswax</option>
                    <option value="standard-cocoons-beeswax">Standard Cocoons + Raw Beeswax</option>
                  </optgroup>
                </select>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer"
              >
                {isLoading ? 'Sending...' : 'Request Sample Now'}
              </button>

              <p className="text-xs text-slate-500 text-center mt-4">
                We respect your privacy. Your information will only be used to process your sample request.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-600">
                Your sample request has been received. We'll contact you within 24 hours to confirm your shipment details.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
