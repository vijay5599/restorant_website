'use client';

import { motion } from 'framer-motion';

export default function MenuSection() {
  const menuItems = [
    { name: 'Artisan Veg Pizza', price: '₹250', category: 'Pizzas', icon: '🍕', desc: 'Hand-tossed base, fresh basil, heirloom tomatoes, and mozzarella.' },
    { name: 'Truffle Chicken Pizza', price: '₹350', category: 'Pizzas', icon: '🍗', desc: 'Smoked chicken, truffle oil, woodland mushrooms, and parmesan.' },
    { name: 'Truffle Parmesan Fries', price: '₹180', category: 'Snacks', icon: '🍟', desc: 'Crispy cut fries tossed in truffle oil and aged parmesan dust.' },
    { name: 'Gourmet Veg Slider', price: '₹220', category: 'Snacks', icon: '🍔', desc: 'Brioche bun, grilled portobello, caramelized onions, vegan aioli.' },
    { name: 'Signature Cold Brew', price: '₹180', category: 'Drinks', icon: '🧊', desc: 'Slow-steeped for 18 hours, served over craft ice with a splash of cream.' },
    { name: 'Classic Cappuccino', price: '₹160', category: 'Drinks', icon: '☕', desc: 'Double shot espresso, velvety microfoam, dusted with rich cocoa.' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-surface-50 py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full mix-blend-multiply opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Discover Our Flavors</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            A Taste of Perfection
          </h2>
          <p className="text-lg text-foreground/70">
            Carefully curated ingredients, expertly crafted to bring you the finest cafe experience in the city.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemAnim}
              className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-xl hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-primary-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-foreground group-hover:text-primary-800 transition-colors">{item.name}</h3>
                     <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>
                <span className="text-xl font-serif font-bold text-primary-800 bg-primary-50 px-3 py-1 rounded-lg">{item.price}</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed pl-15">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
           <a href="/menu" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-primary-900 bg-transparent border border-primary-300 hover:bg-primary-50 transition-colors">
             View Full Menu
           </a>
        </div>
      </div>
    </div>
  );
}
