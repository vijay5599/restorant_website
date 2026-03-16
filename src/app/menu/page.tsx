'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { motion } from 'framer-motion';
import { Coffee, ChevronRight } from 'lucide-react';

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'Artisanal Pizzas',
      icon: '🍕',
      items: [
        { name: 'Margherita Classico', price: '₹250', description: 'San Marzano tomato sauce, fresh buffalo mozzarella, and sweet basil leaves.' },
        { name: 'Truffle Mushroom', price: '₹350', description: 'White base with roasted wild mushrooms, truffle oil, and parmesan shavings.' },
        { name: 'Spicy Pepperoni', price: '₹380', description: 'Crispy pepperoni, hot honey drizzle, chili flakes, and aged mozzarella.' },
        { name: 'Burrata & Prosciutto', price: '₹420', description: 'Fresh creamy burrata, thinly sliced prosciutto, and arugula.' },
      ],
    },
    {
      name: 'Gourmet Snacks',
      icon: '🍟',
      items: [
        { name: 'Truffle Parmesan Fries', price: '₹180', description: 'Hand-cut crispy fries tossed in truffle oil and dusted with parmesan.' },
        { name: 'Wagyu Beef Slider', price: '₹280', description: 'Juicy mini patty, caramelized onions, gruyere cheese, brioche bun.' },
        { name: 'Crispy Calamari', price: '₹240', description: 'Lightly dusted calamari rings served with lemon garlic aioli.' },
        { name: 'Avocado Toast', price: '₹210', description: 'Smashed avocado, cherry tomatoes, feta cheese, and microgreens on sourdough.' },
      ],
    },
    {
      name: 'Specialty Drinks',
      icon: '☕',
      items: [
        { name: 'Signature Cold Brew', price: '₹180', description: '18-hour steeped cold brew served over a large craft ice cube.' },
        { name: 'Vanilla Bean Latte', price: '₹160', description: 'Double espresso, steamed milk, and real Madagascar vanilla bean.' },
        { name: 'Matcha Lemonade', price: '₹170', description: 'Ceremonial grade matcha lightly sweetened and combined with fresh lemonade.' },
        { name: 'Artisan Hot Chocolate', price: '₹190', description: 'Rich Colombian cocoa melted into steamed whole milk with toasted marshmallow.' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-primary-900 border-b border-white/10">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1495474472207-464a8d4ee7a4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-3 block">Discover Our Offerings</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Full Menu
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
               Expertly crafted beverages and gourmet dishes designed to delight your senses.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="bg-surface-50 py-24 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full mix-blend-multiply opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-200/40 rounded-full mix-blend-multiply opacity-50 blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              key={categoryIndex} 
              className="mb-24 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-10 border-b border-black/10 pb-6">
                <div className="text-4xl">{category.icon}</div>
                <h2 className="text-4xl font-serif font-bold text-foreground">
                  {category.name}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                       <h3 className="text-xl font-bold text-foreground group-hover:text-primary-800 transition-colors">{item.name}</h3>
                       <div className="flex-1 mx-4 border-b border-dashed border-black/20 relative top-[-6px]"></div>
                       <span className="text-xl font-serif font-bold text-primary-800">
                         {item.price}
                       </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed text-sm pr-10">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-surface-950 text-white py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
             <Coffee size={32} className="text-primary-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Experience Marcopolo?</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Reserve your table in advance and ensure the perfect spot for your next amazing coffee experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a
               href="/contact"
               className="inline-flex justify-center items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-medium hover:bg-primary-700 hover:scale-105 transition-all w-full sm:w-auto"
             >
               Book Now
               <ChevronRight size={18} />
             </a>
             <a
               href="tel:+919876543210"
               className="inline-flex justify-center items-center px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/5 transition-all w-full sm:w-auto"
             >
               Call: +91 9876543210
             </a>
          </div>
        </div>
      </div>

      <Chatbot />
    </main>
  );
}
