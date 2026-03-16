'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-primary-50 overflow-hidden pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary-200/50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-primary-300/40 blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start pt-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-8 w-fit shadow-sm border border-primary-200">
              <MapPin size={16} />
              <span>Premium Cafe in Koramangala</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Where Every Cup <br/>
              <span className="text-primary-600 relative">
                Tells a Story
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-300/60" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-foreground/70 mb-10 max-w-lg leading-relaxed">
              Experience artisanal coffee, exquisite snacks, and a cozy atmosphere perfect for working, relaxing, or catching up with friends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/menu"
                className="inline-flex justify-center items-center gap-2 bg-primary-900 text-white px-8 py-4 rounded-full font-medium hover:bg-primary-800 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Explore Menu
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full font-medium text-primary-900 border-2 border-primary-200 hover:border-primary-900 hover:bg-primary-50 transition-all"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] h-[400px] w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Elegant Image Placeholder (Assuming a high-end photography aesthetic) */}
            <div className="absolute inset-0 bg-primary-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
              <div className="w-full h-full object-cover opacity-80 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop')] bg-cover bg-center" />
              
              <div className="absolute bottom-8 left-8 z-20 glass-dark px-6 py-4 rounded-2xl text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Signature Roast</p>
                    <p className="text-white/70 text-sm">Crafted with passion</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply opacity-50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
