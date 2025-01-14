export default function Properties() {
    const properties = [
      { name: "Best Property One", price: "$95,000", img: "/property1.jpeg" },
      { name: "Best Property Two", price: "$95,000", img: "/property4.jpeg" },
      { name: "Best Property Three", price: "$95,000", img: "/property3.jpeg" },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-5xl font-bold text-center text-blue-700 mb-8">
            Discover Your Dream Property
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore the finest selection of properties tailored to meet your lifestyle. From luxurious homes to smart investments, we have it all.
          </p>
  
          {/* Filter Section */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <select className="border border-gray-300 rounded-lg px-5 py-3 bg-white shadow-md">
              <option>Choose Area</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-5 py-3 bg-white shadow-md">
              <option>Property Status</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-5 py-3 bg-white shadow-md">
              <option>Property Type</option>
            </select>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
              Find Now
            </button>
          </div>
  
          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={property.img}
                  alt={property.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{property.name}</h3>
                  <p className="text-lg text-gray-600">{property.price}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  