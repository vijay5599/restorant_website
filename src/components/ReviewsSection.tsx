'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      role: 'Local Guide',
      rating: 5,
      text: 'An absolute gem in Koramangala! The artisanal coffee is consistently brilliant, and the truffle pizza is out of this world. The staff make you feel right at home.',
      initial: 'R',
    },
    {
      name: 'Priya Sharma',
      role: 'Food Blogger',
      rating: 5,
      text: 'The ambience is stunning—perfect blend of cozy and premium. I love bringing my laptop here to work. Highly recommend their signature cold brew!',
      initial: 'P',
    },
    {
      name: 'Akshay Singh',
      role: 'Regular Customer',
      rating: 5,
      text: 'Weekend evenings here are magical. The attention to detail in every dish and drink is what sets Marcopolo apart from the rest. 10/10 experience.',
      initial: 'A',
    },
  ];

  return (
    <div className="bg-surface-950 text-white py-24 relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-800/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Words From Our Guests
          </h2>
          <p className="text-lg text-white/70">
            Don&apos;t just take our word for it—hear what the community has to say about their experience at Marcopolo Cafe.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={index}
              className="glass-dark rounded-3xl p-8 relative group hover:bg-surface-900/80 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-primary-800/40 w-12 h-12 transform group-hover:scale-110 group-hover:text-primary-700/50 transition-all" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-xl font-bold font-serif shadow-lg">
                  {review.initial}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-primary-300 transition-colors">{review.name}</h3>
                  <p className="text-primary-400 text-sm">{review.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              <p className="text-white/80 leading-relaxed relative z-10 font-light">
                &quot;{review.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
