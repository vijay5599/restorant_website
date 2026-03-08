'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl">
              ☕ Marcopolo Cafe
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-200 transition">
              Home
            </Link>
            <Link href="/menu" className="hover:text-amber-200 transition">
              Full Menu
            </Link>
            <Link href="/contact" className="hover:text-amber-200 transition">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-amber-800 Space-y-2 pb-4">
            <Link href="/" className="block px-2 py-2 hover:bg-amber-700 rounded">
              Home
            </Link>
            <Link href="/menu" className="block px-2 py-2 hover:bg-amber-700 rounded">
              Full Menu
            </Link>
            <Link href="/contact" className="block px-2 py-2 hover:bg-amber-700 rounded">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
