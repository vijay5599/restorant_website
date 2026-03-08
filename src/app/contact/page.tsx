'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Location</h1>
          <p className="text-lg text-amber-100">
            We'd love to hear from you
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-700">
                      Marcopolo Cafe<br />
                      Koramangala<br />
                      Bangalore, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="text-4xl">☎️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-amber-600 font-semibold hover:text-amber-700 transition"
                    >
                      +91 9876543210
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Monday - Sunday: 9 AM to 11 PM</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="text-4xl">⏰</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="text-gray-700">
                      <p className="mb-1"><span className="font-semibold">Monday - Friday:</span> 9 AM - 11 PM</p>
                      <p className="mb-1"><span className="font-semibold">Saturday - Sunday:</span> 9 AM - 11 PM</p>
                      <p className="text-sm text-gray-600 mt-2">We're open every day!</p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex gap-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Chat with Us</h3>
                    <p className="text-gray-700">
                      Use our AI chatbot to ask questions about menu, bookings, and more!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Find Our Cafe</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 font-semibold mb-2">
                    Location Map
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Koramangala, Bangalore
                  </p>
                  <p className="text-gray-500 text-xs">
                    (Embedded map with directions coming soon)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Table Booking</h2>
            <p className="text-gray-700 mb-8">
              Want to reserve a table with us? Use our chatbot to request a booking or call us directly!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  const chatbot = document.querySelector('button[data-chatbot]');
                  if (chatbot) (chatbot as HTMLButtonElement).click();
                }}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition"
              >
                💬 Chat to Book Table
              </button>
              <a
                href="tel:+919876543210"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition text-center"
              >
                ☎️ Call to Reserve
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Are you open on weekends?',
                a: 'Yes! We are open every day from 9 AM to 11 PM, including weekends.',
              },
              {
                q: 'Do you accept table bookings?',
                a: 'Absolutely! You can book a table using our chatbot or by calling us at +91 9876543210.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash and digital payments including UPI, cards, and wallets.',
              },
              {
                q: 'Can I host events at your cafe?',
                a: 'Yes, we can host small gatherings. Please call us for more details about event hosting.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-600"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; 2024 Marcopolo Cafe. All rights reserved.</p>
        </div>
      </footer>

      <Chatbot />
    </main>
  );
}
