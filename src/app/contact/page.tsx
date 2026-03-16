'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are you open on weekends?',
      a: 'Yes! We are open every day from 9 AM to 11 PM, including all weekends and most public holidays.',
    },
    {
      q: 'Do you accept table bookings for large groups?',
      a: 'Absolutely! For groups larger than 6, we recommend booking explicitly in advance using our chatbot or by calling us directly.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit/debit cards, UPI, Google Pay, Apple Pay, and cash.',
    },
    {
      q: 'Do you have vegan and gluten-free options?',
      a: 'Yes, our menu features several vegan and gluten-free items, clearly marked. Please let our staff know about any allergies.',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-surface-950">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-top mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-3 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Contact & Location
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Book a table, plan an event, or simply drop by for a perfect cup of coffee.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-surface-50 py-24 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-primary-100/40 rounded-full mix-blend-multiply opacity-50 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                 <h2 className="text-4xl font-serif font-bold mb-8 text-foreground">Find Us Here</h2>
                 <p className="text-foreground/70 leading-relaxed mb-10">
                   Our flagship cafe is situated in the vibrant neighborhood of Koramangala. An oasis of calm and great taste.
                 </p>

                 <div className="space-y-8">
                   <div className="flex gap-5 group">
                     <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary-50 transition-colors">
                       <MapPin size={24} className="text-primary-800" />
                     </div>
                     <div>
                       <h3 className="font-bold text-lg text-foreground mb-1">Our Location</h3>
                       <p className="text-foreground/70 leading-relaxed">
                         Marcopolo Cafe, 80 Feet Road<br />
                         Koramangala, Bangalore 560095
                       </p>
                     </div>
                   </div>

                   <div className="flex gap-5 group">
                     <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary-50 transition-colors">
                       <Phone size={24} className="text-primary-800" />
                     </div>
                     <div>
                       <h3 className="font-bold text-lg text-foreground mb-1">Contact Details</h3>
                       <a href="tel:+919876543210" className="text-primary-800 font-medium hover:text-primary-600 transition-colors block mb-1">
                         +91 9876543210
                       </a>
                       <a href="mailto:hello@marcopolocafe.com" className="text-foreground/70 hover:text-primary-800 transition-colors block">
                         hello@marcopolocafe.com
                       </a>
                     </div>
                   </div>

                   <div className="flex gap-5 group">
                     <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary-50 transition-colors">
                       <Clock size={24} className="text-primary-800" />
                     </div>
                     <div>
                       <h3 className="font-bold text-lg text-foreground mb-1">Hours of Operation</h3>
                       <p className="text-foreground/70 mb-1"><span className="font-semibold text-foreground">Mon - Sun:</span> 9:00 AM — 11:00 PM</p>
                       <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mt-2">Open Every Day</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Map & Booking Form Section */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-black/5 relative overflow-hidden h-full flex flex-col justify-center">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-900" />
                 
                 <div className="mb-10 text-center">
                    <div className="w-16 h-16 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                       <MessageSquare size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Reserve Your Experience</h3>
                    <p className="text-foreground/70 max-w-md mx-auto">
                      Avoid the wait. Book your table instantly using our AI concierge, or call us directly during business hours.
                    </p>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-chatbot'));
                        // Fallback hack if event is not listened to
                        const chatbotBtn = document.querySelector('button.bg-primary-900');
                        if (chatbotBtn) (chatbotBtn as HTMLButtonElement).click();
                      }}
                      className="bg-primary-900 text-white rounded-xl py-4 font-bold hover:bg-primary-800 hover:-translate-y-1 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={20} />
                      Chat with Concierge
                    </button>
                    <a
                      href="tel:+919876543210"
                      className="bg-surface-100 text-foreground border border-black/10 rounded-xl py-4 font-bold hover:bg-white hover:border-black/20 hover:-translate-y-1 hover:shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Phone size={20} />
                      Call Us Now
                    </a>
                 </div>

                 <div className="mt-12 rounded-2xl overflow-hidden h-64 relative group border border-black/10">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-surface-950/60 flex flex-col items-center justify-center text-white p-6 transition-colors duration-300 group-hover:bg-surface-950/40">
                       <MapPin size={32} className="mb-3 text-primary-400" />
                       <span className="font-bold text-lg">Interactive Map Coming Soon</span>
                       <span className="text-sm text-white/70">80 Feet Road, Koramangala</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Got Questions?</span>
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-primary-200 bg-surface-50 shadow-sm' : 'border-black/5 bg-white hover:border-primary-200/50'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <h3 className={`font-bold pr-8 transition-colors ${openFaq === index ? 'text-primary-900' : 'text-foreground'}`}>{faq.q}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${openFaq === index ? 'bg-primary-100 text-primary-800 rotate-180' : 'bg-surface-100 text-foreground/50 rotate-0'}`}>
                     <ChevronDown size={18} />
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-foreground/70 leading-relaxed border-t border-black/5 pt-4">
                     {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot Navigation Fix (since it's common to trigger it externally) */}
      <Chatbot />
    </main>
  );
}
