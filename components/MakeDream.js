export default function MakeDream() {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          We Are Ready to Make Your Dream Come True
        </h2>
        <div className="flex ml-7 p-4 m-8">
          <p className="text-gray-600 mb-8 w-full max-w-xl text-right">
            At SkyProperty, our expert team is dedicated to turning your
            property dreams into reality. Whether you're looking for a luxurious
            home, a cozy retreat, or a smart investment, we are here to guide
            you through every step of the journey. Each property design tells a
            unique story, and we are committed to helping you find the one that
            speaks to you. Let us bring your vision to life with a seamless and
            confident experience, tailored to your personal style and needs.
          </p>
        </div>
        <div className="h-50 w-50 flex ml-9">
          <img
              src="property2_.jpeg" 
              alt="property image"
              className="mr-8 w-70 h-70 object-cover rounded-full flex items-end m-10 p-2"
              />



        </div>
        <a href="/get-started" className="inline-block">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
}
