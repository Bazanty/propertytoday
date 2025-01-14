export default function WhatWeDo() {
    const services = [
      {
        title: "Buy a Home",
        description:
          "We help you find the perfect home according to your preferences and budget.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10l1-2m7-6h4m6 8l-2 2m-4 0h-2m0 4h-4m0 0l1 3m-6-6l-1-3m6-6h4m0 0l3 3"
            />
          </svg>
        ),
      },
      {
        title: "Sell a Property",
        description:
          "List your property with us to connect with potential buyers quickly and efficiently.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 0L6 10m6-6l6 6m-6-6v16"
            />
          </svg>
        ),
      },
      {
        title: "Rent a Property",
        description:
          "Explore rental properties with ease and find a place that feels like home.",
        icon: (
          <svg
            img="Another_.jpeg"
            className="w-10 h-10 text-blue-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l-4 4m0 0l4 4m-4-4h16"
            />
          </svg>
        ),
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <p className="text-gray-600 mb-12">
          Our mission is to provide exceptional services to help you buy, sell, or rent properties with ease and confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded shadow-md bg-white text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }