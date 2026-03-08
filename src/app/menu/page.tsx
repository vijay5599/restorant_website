'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'Pizzas',
      items: [
        { name: 'Veg Pizza', price: '₹250', description: 'Fresh vegetables with mozzarella cheese' },
        { name: 'Chicken Pizza', price: '₹300', description: 'Crispy chicken with special sauce' },
      ],
    },
    {
      name: 'Snacks',
      items: [
        { name: 'French Fries', price: '₹120', description: 'Golden crispy fries with salt' },
        { name: 'Veg Burger', price: '₹180', description: 'Fresh vegetable burger with mayo' },
      ],
    },
    {
      name: 'Drinks',
      items: [
        { name: 'Cold Coffee', price: '₹150', description: 'Chilled coffee with ice cream' },
        { name: 'Cappuccino', price: '₹120', description: 'Creamy cappuccino with rich foam' },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Full Menu</h1>
          <p className="text-lg text-amber-100">
            Explore all our delicious offerings
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-amber-600 pb-4">
                {category.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                      <span className="text-3xl font-bold text-amber-600">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Book a Table?</h2>
          <p className="text-lg mb-8 text-amber-100">
            Have any questions? Chat with our AI assistant or call us!
          </p>
          <a
            href="tel:+919876543210"
            className="bg-amber-100 text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-200 transition inline-block"
          >
            Call Us: +91 9876543210
          </a>
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
