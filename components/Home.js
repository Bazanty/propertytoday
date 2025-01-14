import React from "react";

const Home = () => {
  const properties = Array.from({ length: 6 }).map((_, idx) => ({
    id: idx,
    title: "New Apartment Nice View",
    location: "Belmont Gardens, Chicago",
    details: "3 Bed | 2 Bath | 3450 Sq Ft",
    price: "$34,900/Month",
    img: "Property5.jpeg",
  }));

  const filters = {
    propertyTypes: ["House", "Single Family", "Apartment", "Luxury Home"],
    amenities: ["Gym", "Parking", "Pool", "Elevator"],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-orange-500">Quarter</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Section */}
          <aside className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Advance Information</h2>
            <div className="space-y-6">
              {/* Property Type */}
              <div>
                <h3 className="font-medium mb-2">Property Type</h3>
                <ul className="space-y-2">
                  {filters.propertyTypes.map((type, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={type}
                        className="w-4 h-4 text-blue-600 rounded"
                        aria-label={type}
                      />
                      <label htmlFor={type} className="text-gray-700">
                        {type}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-medium mb-2">Amenities</h3>
                <ul className="space-y-2">
                  {filters.amenities.map((amenity, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={amenity}
                        className="w-4 h-4 text-blue-600 rounded"
                        aria-label={amenity}
                      />
                      <label htmlFor={amenity} className="text-gray-700">
                        {amenity}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <input
                  type="range"
                  min="50"
                  max="500"
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>$50k</span>
                  <span>$500k</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Property Listings */}
          <section className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Properties</h2>
              <div className="flex space-x-4">
                <select className="border px-4 py-2 rounded">
                  <option>Default Sorting</option>
                </select>
                <select className="border px-4 py-2 rounded">
                  <option>Per Page: 12</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600">{property.location}</p>
                    <p className="text-sm text-gray-600">{property.details}</p>
                    <p className="text-orange-500 font-semibold mt-2">
                      {property.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
