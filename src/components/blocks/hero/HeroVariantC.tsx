'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config';

export function HeroVariantC() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side: Soft color, bold text */}
      <div className="flex-1 bg-surface-100 flex items-center justify-center p-8 lg:p-20 pt-32 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full"
        >
          <div className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            {siteConfig.hero.badge}
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-8">
            {siteConfig.hero.heading1} <br/>
            <span className="text-primary-600">{siteConfig.hero.heading2}</span>
          </h1>
          
          <p className="text-xl text-foreground/70 mb-10 leading-relaxed font-medium">
            {siteConfig.hero.description}
          </p>
          
          <div className="flex items-center gap-6">
            <Link
              href="/menu"
              className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              View Menu
              <ArrowUpRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="text-foreground font-bold hover:text-primary-600 transition-colors"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Right side: Full image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 relative min-h-[50vh] lg:min-h-full"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center lg:rounded-l-3xl shadow-2xl"
          style={{ backgroundImage: `url('${siteConfig.hero.image}')` }}
        >
           <div className="absolute inset-0 bg-black/10 lg:rounded-l-3xl" />
        </div>
      </motion.div>
    </div>
  );
}
