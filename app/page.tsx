'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ProblemSolution } from '@/components/problem-solution';
import { Products } from '@/components/products';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Products />
      <ContactForm />
      <Footer />
    </main>
  );
}
