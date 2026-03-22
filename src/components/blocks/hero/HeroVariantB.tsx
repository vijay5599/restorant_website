'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config';

export function HeroVariantB() {
  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${siteConfig.hero.image}')` }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text readability */}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center pt-20"
        >
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {siteConfig.hero.badge}
          </span>
          
          <h1 className="text-6xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8">
            {siteConfig.hero.heading1} <br/>
            <span className="italic text-primary-400">{siteConfig.hero.heading2}</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <Link
              href="/menu"
              className="inline-flex justify-center items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-none font-medium hover:bg-primary-700 transition-colors uppercase tracking-wider text-sm"
            >
              Explore Menu
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 rounded-none font-medium text-white border border-white/30 hover:bg-white/10 transition-colors uppercase tracking-wider text-sm"
            >
              Book a Table
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
