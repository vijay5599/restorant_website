'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Marcopolo Cafe
            </h1>
            <p className="text-lg md:text-xl mb-2">📍 Koramangala, Bangalore</p>
            <p className="text-lg md:text-xl mb-6 text-amber-100">
              Delicious cafes & fast food since day one
            </p>
            <div className="flex gap-4">
              <Link
                href="/menu"
                className="bg-amber-100 text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-200 transition"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="border-2 border-amber-100 px-8 py-3 rounded-lg font-bold hover:bg-amber-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="bg-amber-800 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <div className="text-center text-amber-100">
              <div className="text-6xl mb-4">☕</div>
              <p>Beautiful Cafe Ambience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
