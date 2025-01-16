export default function MakeDream() {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          We Are Ready to Make Your Dream Come True
        </h2>

        {/* Text and Image Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          {/* Text Content */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl lg:text-right">
            At SkyProperty, our expert team is dedicated to turning your property dreams into reality. Whether you're looking for a luxurious home, a cozy retreat, or a smart investment, we are here to guide you through every step of the journey. Each property design tells a unique story, and we are committed to helping you find the one that speaks to you. Let us bring your vision to life with a seamless and confident experience, tailored to your personal style and needs.
          </p>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="property2_.jpeg"
              alt="Property Image"
              className="w-80 h-80 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Call-to-Action Button */}
        <a href="/get-started" className="inline-block">
          <button className="bg-blue-500 text-white text-lg px-8 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
}
