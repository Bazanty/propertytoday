import React from 'react';

export default function Property() {
  // Sample data for houses
  const houses = [
    {
      id: 1,
      image: 'kenya_.jpeg',
      title: 'Modern Family Home',
      location: 'New York, NY',
      price: '$1,200,000',
    },
    {
      id: 2,
      image: 'world.jpeg',
      title: 'Cozy Cottage',
      location: 'Nashville, TN',
      price: '$850,000',
    },
    {
      id: 3,
      image: 'Offer.jpeg',
      title: 'Luxury Villa',
      location: 'Los Angeles, CA',
      price: '$2,500,000',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {houses.map((house) => (
          <div
            key={house.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={house.image}
              alt={house.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{house.title}</h2>
              <p className="text-gray-600">{house.location}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">{house.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
