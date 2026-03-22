'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config';

export function HeroVariantA() {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-[#131313] overflow-hidden pt-20 border-b border-[#201f1f]">
      {/* Background Accent Gradient - Deep Coffee/Neutral */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-[#352f2d] blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#1c1b1b] blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start pt-10"
          >
            <div className="inline-flex items-center tracking-[0.1em] px-4 py-1.5 rounded-full bg-[#201f1f] text-[#cfc4c0] text-xs font-sans uppercase mb-8 w-fit border border-[#353534]">
              <span>{siteConfig.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-black text-[#e5e2e1] leading-[1.05] tracking-tight mb-6">
              {siteConfig.hero.heading1} <br/>
              <span className="text-[#cfc4c0] italic font-serif">
                {siteConfig.hero.heading2}
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-[#b7b5b4] mb-12 max-w-lg leading-relaxed font-sans font-medium">
              {siteConfig.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Primary Solid Button */}
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-10 py-4 rounded-lg font-sans font-bold text-[#352f2d] hover:text-[#131313] bg-gradient-to-tr from-[#cfc4c0] to-[#ece0dc] hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(207,196,192,0.15)] uppercase tracking-wider text-sm"
              >
                Book a Table
              </Link>
              {/* Ghost Glass Button */}
              <Link
                href="/menu"
                className="inline-flex justify-center items-center gap-2 bg-[#353534]/60 backdrop-blur-md text-[#e5e2e1] px-10 py-4 rounded-lg font-sans font-bold hover:bg-[#353534]/80 transition-all border border-[#504442] uppercase tracking-wider text-sm"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[650px] h-[450px] w-full max-w-lg mx-auto lg:max-w-none pt-12 lg:pt-0"
          >
             <div className="absolute inset-x-4 lg:inset-x-0 bottom-0 h-4/5 bg-[#201f1f] rounded-2xl border border-[#353534] transform -rotate-2" />
             
             <div className="absolute inset-0 z-10 bg-[#0e0e0e] rounded-2xl overflow-hidden shadow-2xl border border-[#353534]/50 group">
               <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent z-10 opacity-80" />
               <div 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${siteConfig.hero.image}')` }}
               />
               
               {/* Glassmorphic Floating Card */}
               <div className="absolute bottom-8 left-8 right-8 z-20 bg-[#2a2a2a]/60 backdrop-blur-[12px] p-6 rounded-xl border border-[#504442]/50 text-[#e5e2e1] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                 <div className="flex items-center gap-4">
                   <div className="w-4 h-12 bg-[#cfc4c0] rounded-sm" />
                   <div>
                     <p className="font-serif font-bold text-2xl mb-1 tracking-wide">Signature Selection</p>
                     <p className="text-[#b7b5b4] text-sm font-sans uppercase tracking-[0.1em]">Experience the Velvet & Crema vibe.</p>
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
