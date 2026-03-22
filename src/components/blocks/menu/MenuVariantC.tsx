'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function MenuVariantC() {
  const { menuOverview } = siteConfig;

  // We split the items to highlight the first two items
  const highlightedItems = menuOverview.items.slice(0, 2);
  const otherItems = menuOverview.items.slice(2, 6);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-extrabold text-foreground tracking-tight mb-4 text-primary-600">
               {menuOverview.heading}
            </h2>
            <p className="text-lg text-foreground/60 max-w-xl font-medium">
               {menuOverview.description}
            </p>
          </div>
          <Link href="/menu" className="hidden md:flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full font-bold hover:bg-primary-600 transition-colors">
            See All Items <ArrowRight size={18} />
          </Link>
        </div>

        {/* Highlighted Items (e.g. Chef's Specials) */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {highlightedItems.map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-primary-50 rounded-3xl p-8 flex flex-col justify-between border-2 border-transparent hover:border-primary-200 transition-colors"
             >
                <div>
                   <span className="bg-primary-200 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                     Chef's Special
                   </span>
                   <h3 className="text-3xl font-bold text-foreground mb-3">{item.name}</h3>
                   <p className="text-foreground/70 font-medium">{item.desc}</p>
                </div>
                <div className="mt-8 flex justify-between items-end">
                   <div className="text-5xl">{item.icon}</div>
                   <div className="text-4xl font-extrabold text-primary-700">{item.price}</div>
                </div>
             </motion.div>
          ))}
        </div>

        {/* Regular Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {otherItems.map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-surface-50 rounded-2xl p-6 hover:bg-primary-600 hover:text-white transition-colors group"
             >
                <div className="text-3xl mb-4 opacity-80 group-hover:opacity-100">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                <p className="text-sm opacity-60 group-hover:opacity-90 mb-6">{item.desc}</p>
                <div className="font-extrabold text-xl text-primary-600 group-hover:text-primary-100">{item.price}</div>
             </motion.div>
           ))}
        </div>

        <Link href="/menu" className="md:hidden mt-8 flex items-center justify-center gap-2 bg-foreground text-white px-6 py-4 rounded-full font-bold w-full">
            See All Items <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
