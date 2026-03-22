import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';
import Chatbot from '@/components/Chatbot';
import { Coffee, Store, MapPin, Clock, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { HeroVariantA } from '@/components/blocks/hero/HeroVariantA';
import { MenuVariantA } from '@/components/blocks/menu/MenuVariantA';
import { HeroVariantB } from '@/components/blocks/hero/HeroVariantB';
import { MenuVariantB } from '@/components/blocks/menu/MenuVariantB';
import { MenuVariantC } from '@/components/blocks/menu/MenuVariantC';
import { client } from '@/sanity/lib/client';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const sanityItems = await client.fetch(`*[_type == "menuItem"]{name, price, icon, desc, "category": category->title} | order(category->order asc, name asc)`);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroVariantA />

      {/* About Section */}
      <div className="bg-surface-50 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 scale-105 transition-transform group-hover:rotate-6 duration-500 pointer-events-none" />
              <div className="bg-white rounded-3xl h-80 lg:h-[500px] flex flex-col items-center justify-center shadow-xl relative z-10 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2575&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="text-center relative z-20">
                  <div className="w-20 h-20 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-white">
                    <Store size={40} />
                  </div>
                  <p className="text-primary-900 font-serif font-bold text-2xl">Cozy & Elegant</p>
                  <p className="text-primary-700/80">The perfect atmosphere</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Est. 2024</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight">
                Our Story in Every Cup
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Marcopolo Cafe is your favorite destination in Koramangala for delicious artisanal coffee and gourmet fast food. Since our opening, we&apos;ve been committed to serving the finest quality products with exceptional customer service.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our cozy ambience and friendly staff make it the perfect place for meetings, studying, or just relaxing with a perfect cup of coffee.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-primary-100 shadow-sm">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                    <Coffee size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Premium Beans</h4>
                    <p className="text-sm text-foreground/60">Sourced globally, roasted locally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-primary-100 shadow-sm">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                    <Store size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Cozy Ambience</h4>
                    <p className="text-sm text-foreground/60">Designed for your comfort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <MenuVariantA menuItems={sanityItems} />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Location Section */}
      <div className="bg-surface-50 py-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Visit Us</h2>
            <p className="text-foreground/70 leading-relaxed mb-10 max-w-md">
              We&apos;re located in the heart of Koramangala. Come by for a coffee or stay for dinner.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-foreground/70 text-lg">Marcopolo Cafe, 80 Feet Road</p>
                  <p className="text-foreground/70 text-lg">Koramangala, Bangalore 560095</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-primary-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                  <p className="text-foreground/70 text-lg">Monday - Sunday</p>
                  <p className="text-foreground/70 text-lg font-medium text-primary-800">9:00 AM — 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-primary-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="text-foreground/70 text-lg">+91 9876543210</p>
                  <p className="text-foreground/70 text-lg">hello@marcopolocafe.com</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-200 rounded-3xl h-[400px] flex items-center justify-center shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
              <div className="text-center relative z-10 p-8 glass-dark rounded-2xl max-w-sm mx-4 text-white hover:scale-105 transition-transform duration-300">
                <MapPin size={32} className="mx-auto mb-4 text-primary-400" />
                <p className="font-bold text-xl mb-2">Interactive Map</p>
                <p className="text-white/70 text-sm">Google Maps integration ready.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface-950 text-white pt-20 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-500 transition-colors">
                  <Coffee size={24} />
                </div>
                <span className="font-serif font-bold text-2xl tracking-tight text-white">Marcopolo</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
                Your favorite destination for premium coffee, artisanal food, and memorable moments in the heart of Bangalore.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/menu" className="text-white/60 hover:text-white transition-colors">Our Menu</Link></li>
                <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact & Booking</Link></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Visit</h4>
              <p className="text-white/60 mb-2">9 AM to 11 PM</p>
              <p className="text-white/60 mb-6">Open Every Day</p>

              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <p className="text-white/60 mb-2">+91 9876543210</p>
              <p className="text-white/60">Koramangala, Bangalore</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Marcopolo Cafe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Widget */}
      <Chatbot />
    </main>
  );
}
