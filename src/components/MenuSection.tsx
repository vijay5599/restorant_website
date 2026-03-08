'use client';

export default function MenuSection() {
  const menuItems = [
    { name: 'Veg Pizza', price: '₹250', category: 'Pizzas' },
    { name: 'Chicken Pizza', price: '₹300', category: 'Pizzas' },
    { name: 'French Fries', price: '₹120', category: 'Snacks' },
    { name: 'Veg Burger', price: '₹180', category: 'Snacks' },
    { name: 'Cold Coffee', price: '₹150', category: 'Drinks' },
    { name: 'Cappuccino', price: '₹120', category: 'Drinks' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Menu Preview
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore our delicious selection of pizzas, snacks, and drinks
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-2xl font-bold text-amber-600">{item.price}</span>
              </div>
              <p className="text-sm text-amber-700 bg-amber-100 inline-block px-3 py-1 rounded-full">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
