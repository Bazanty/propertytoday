export default function HeroSection() {
  return (
    <section
      className="text-center py-60 "
      style={{
        backgroundImage: 'url("Real Estate.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Optional, for a parallax effect
      }}
    >
      <div className="bg-black bg-opacity-50 text-white py-12">
        <h1 className="text-4xl font-bold mb-4">
          Let's Find a Home That's Perfect for You
        </h1>
        <p className="mb-6">
          Each property design has its unique meaning, and we're ready to help you.
        </p>
        <form className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="City, State, or Zip"
            className="border rounded px-4 py-2 w-1/3"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
