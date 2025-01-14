export default function Features() {
    const features = [
      { title: "9k+ Premium Properties", description: "Exclusive listings" },
      { title: "5k+ Happy Customers", description: "Trusted by many" },
      { title: "58+ Awards Winning", description: "Recognized excellence" },
    ];
  
    return (
      <section className="py-12 bg-gray-50 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded">
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }