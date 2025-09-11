import React from "react";
import Cube3D from "../CubicThreeDimension";

const ExperiencesAdventure = () => {
  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <div className="text-left mb-8 self-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Top Destinations
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-500">
            Our most visited destinations…
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-10 max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-1 pr-10 text-center">
            <blockquote className="text-lg font-serif text-gray-900 mb-8">
              “Taste the flavors of Khmer cuisine, dive into thrilling
              adventures, and discover Cambodia's art and culture. Every journey
              is an experience to remember.”
            </blockquote>

            <button className="bg-black text-white rounded-full px-6 py-2.5 text-base hover:bg-gray-800 transition duration-300">
              Explore more
            </button>
          </div>

        {/* <Cube3D /> */}
          <Cube3D />
        </div>
      </div>
    </div>
  );
};

export default ExperiencesAdventure;
