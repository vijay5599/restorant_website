'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-amber-100 rounded-lg h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏪</div>
                <p className="text-gray-700 font-semibold">Cozy Cafe Atmosphere</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                About Marcopolo Cafe
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Marcopolo Cafe is your favorite destination in Koramangala for delicious coffee and fast food. Since our opening, we've been committed to serving the finest quality products with exceptional customer service.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our cozy ambience and friendly staff make it the perfect place for meetings, studying, or just relaxing with a perfect cup of coffee.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <p className="font-semibold text-gray-900 mb-2">✓ Premium Quality Ingredients</p>
                <p className="font-semibold text-gray-900 mb-2">✓ Friendly & Trained Staff</p>
                <p className="font-semibold text-gray-900">✓ Cozy & Comfortable Ambience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <MenuSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Location Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Find Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">📍 Location</h3>
              <p className="text-lg mb-4">Marcopolo Cafe, Koramangala, Bangalore</p>
              <h3 className="text-2xl font-bold mb-4">⏰ Opening Hours</h3>
              <p className="text-lg mb-2">Monday - Sunday: 9 AM to 11 PM</p>
              <h3 className="text-2xl font-bold mb-4">☎️ Contact</h3>
              <p className="text-lg">+91 9876543210</p>
            </div>
            <div className="bg-gray-700 rounded-lg h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl mb-2">🗺️</p>
                <p className="text-gray-300">Google Maps Integration Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Marcopolo Cafe</h4>
              <p className="text-sm">Your favorite cafe in Koramangala, Bangalore</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/menu" className="hover:text-white transition">Menu</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Hours</h4>
              <p className="text-sm">9 AM to 11 PM</p>
              <p className="text-sm">Every Day</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">+91 9876543210</p>
              <p className="text-sm">Koramangala, Bangalore</p>
            </div>
          </div>
          <hr className="border-gray-800 mb-4" />
          <div className="text-center text-sm">
            <p>&copy; 2024 Marcopolo Cafe. All rights reserved. Powered by Next.js</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <Chatbot />
    </main>
  );
}
