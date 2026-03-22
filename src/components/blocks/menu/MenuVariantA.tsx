'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  icon?: string;
  imageUrl?: string; // Added this line
  desc?: string;
  category?: string;
}

export function MenuVariantA({ menuItems }: { menuItems?: MenuItem[] }) {
  const { menuOverview } = siteConfig;
  const items = menuItems && menuItems.length > 0 ? menuItems : menuOverview.items;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="bg-[#131313] py-32 relative overflow-hidden text-[#e5e2e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <span className="text-[#9c928f] font-sans tracking-[0.2em] uppercase text-xs mb-4 block">
            Discover Our Flavors
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-[#e5e2e1] mb-6 tracking-tight">
            {menuOverview.heading}
          </h2>
          <p className="text-xl text-[#b7b5b4] font-sans font-medium max-w-2xl">
            {menuOverview.description}
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemAnim}
              className="bg-[#1c1b1b] rounded-2xl p-8 border border-[#504442] hover:bg-[#201f1f] hover:border-[#cfc4c0]/50 hover:-translate-y-2 transition-all duration-500 group relative"
            >
              {/* Subtle top gradient */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#cfc4c0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#e5e2e1] group-hover:text-[#cfc4c0] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <span className="text-xs font-sans font-bold text-[#9c928f] tracking-widest uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#2a2a2a] flex items-center justify-center shrink-0 border border-[#353534] group-hover:border-[#cfc4c0]/50 transition-colors shadow-sm">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                       {item.icon || '🍽️'}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-[#b7b5b4] text-sm leading-relaxed mb-6 font-sans">
                {item.desc}
              </p>
              
              <div className="mt-auto border-t border-[#353534] pt-4 flex justify-between items-end">
                <span className="text-[#9c928f] text-xs uppercase tracking-widest font-bold">Price</span>
                <span className="text-2xl font-serif font-bold text-[#cfc4c0]">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 pt-10 border-t border-[#353534] flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[#b7b5b4] font-sans text-sm max-w-sm text-center md:text-left">
             Are you looking for our seasonal specials? The full menu is available physically at the cafe.
           </p>
           <Link href="/menu" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold rounded-lg text-[#cfc4c0] bg-transparent border border-[#504442] hover:bg-[#2a2a2a] transition-all uppercase tracking-wider font-sans">
             View Extracted Menu <ArrowUpRight size={18} />
           </Link>
        </div>
      </div>
    </div>
  );
}
