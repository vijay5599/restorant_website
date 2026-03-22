'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import Link from 'next/link';

export function MenuVariantB() {
  const { menuOverview } = siteConfig;

  return (
    <div className="bg-[#FAF9F6] py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#2C2C2C] mb-4">
            {menuOverview.heading}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto opacity-50 mb-6" />
          <p className="text-[#6B6B6B] italic font-serif">
            {menuOverview.description}
          </p>
        </div>
        
        <div className="space-y-12">
          {["Pizzas", "Snacks", "Drinks"].map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-serif text-[#2C2C2C] border-b border-[#E5E0D8] pb-4 mb-6 uppercase tracking-widest text-center">
                {category}
              </h3>
              <div className="space-y-8">
                {menuOverview.items
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={index}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                       <h4 className="text-lg font-bold text-[#2C2C2C] uppercase tracking-wide group-hover:text-primary-700 transition-colors">
                         {item.name}
                       </h4>
                       <div className="flex-1 border-b-2 border-dotted border-[#E5E0D8] mx-4 relative top-[-6px]" />
                       <span className="text-xl font-serif font-bold text-primary-800">
                         {item.price}
                       </span>
                    </div>
                    <p className="text-[#6B6B6B] text-sm max-w-2xl">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
           <Link href="/menu" className="border-b-2 border-primary-500 text-[#2C2C2C] font-semibold tracking-widest uppercase hover:text-primary-600 hover:border-primary-600 transition-colors pb-1">
             Discover More
           </Link>
        </div>
      </div>
    </div>
  );
}
