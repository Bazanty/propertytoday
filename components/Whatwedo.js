import Contact from "@/app/ContactSection/contactUs";

export default function WhatWeDo() {
  const services = [
    {
      title: "Buy a Home",
      description:
        "We help you find the perfect home tailored to your preferences, budget, and lifestyle. Our team ensures a seamless and stress-free buying experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-blue-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Buy a Home Icon"
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
        "List your property with us to reach potential buyers through our vast network. We offer expert guidance and marketing strategies for a quick sale.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-blue-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Sell a Property Icon"
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
        "Explore a variety of rental properties that fit your needs and budget. Whether you're looking for a short-term or long-term rental, we've got you covered.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-blue-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Rent a Property Icon"
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
    {
      title: "Property Management",
      description:
        "Let us handle the day-to-day management of your property. From tenant communication to maintenance and rent collection, we ensure peace of mind.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-blue-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Property Management Icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m4 0l2-2m0 8h4m0-6h4m4 6l-2-2m-6 6H9m0-6H3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">What We Do</h2>
      <p className="text-gray-600 mb-12">
        Our mission is to provide exceptional services to help you buy, sell, rent, or manage properties with ease and confidence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded shadow-md bg-white text-center hover:shadow-lg transition-shadow duration-200"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="px-6 py-3 text-white bg-blue-500 rounded shadow hover:bg-blue-600 transition-colors duration-200">
          Contact Us
         
        </button>
        
      </div>
    </section>
  );
}
