'use client';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Amazing coffee and great ambience! The veg pizza is simply delicious. Highly recommended!',
      avatar: '👨',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Best place in Koramangala for coffee lovers. The staff is very friendly and service is excellent.',
      avatar: '👩',
    },
    {
      name: 'Akshay Singh',
      rating: 5,
      text: 'Perfect spot for meetings and hangouts. Food quality is consistently good. Worth every visit!',
      avatar: '👨',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Join hundreds of satisfied customers
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{review.avatar}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
