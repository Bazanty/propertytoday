"use client";

import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  const client = {
    name: "SkyProperty",
    description: `Welcome to SkyProperty, where dreams meet reality. We specialize in connecting individuals and families with properties that perfectly suit their needs and aspirations. With years of experience, our team is committed to guiding you through every step of the journey, offering unparalleled expertise and personalized solutions.`,
    mission: `Whether you're searching for a cozy family home, a luxurious estate, or a smart investment opportunity, we ensure a seamless, stress-free experience tailored to your unique style and preferences.`,
    image: "/about-us-image.jpg",
    cta: "Learn More",
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="Property5.jpeg"
            alt={`About ${client.name}`}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-blue-600 mb-6 leading-tight">
            About {client.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {client.description}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {client.mission}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 text-lg rounded-md shadow hover:bg-blue-700 transition duration-300">
            {client.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
