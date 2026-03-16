'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:bg-primary-700 transition-colors">
              <Coffee size={24} />
            </div>
            <span className={`font-serif font-bold text-2xl tracking-tight ${scrolled ? 'text-foreground' : 'text-primary-900'} drop-shadow-sm transition-colors`}>
              Marcopolo
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-medium text-sm tracking-wide hover:text-primary-600 transition-colors ${scrolled ? 'text-foreground/80' : 'text-primary-900/90'}`}>
              Home
            </Link>
            <Link href="/menu" className={`font-medium text-sm tracking-wide hover:text-primary-600 transition-colors ${scrolled ? 'text-foreground/80' : 'text-primary-900/90'}`}>
              Menu
            </Link>
            <Link href="/contact" className={`font-medium text-sm tracking-wide hover:text-primary-600 transition-colors ${scrolled ? 'text-foreground/80' : 'text-primary-900/90'}`}>
              Contact
            </Link>
            <Link href="/contact" className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Book a Table
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${scrolled ? 'text-foreground' : 'text-primary-900'} hover:bg-black/5 transition-colors`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              <Link href="/" className="font-medium text-lg text-foreground hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/menu" className="font-medium text-lg text-foreground hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
              <Link href="/contact" className="font-medium text-lg text-foreground hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="/contact" className="bg-primary-600 text-white text-center px-5 py-3 rounded-xl font-medium" onClick={() => setIsOpen(false)}>
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
