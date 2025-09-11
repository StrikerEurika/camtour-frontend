import React from "react";

const CamTourHero = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4 overflow-hidden">
            <img
              src="/icons/camtour-logo.jpeg"
              alt="CamTour Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-gray-900">CamTour</span>
        </div>

        {/* Main Quote */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
            “Plan smarter, travel better. Chat with our Cambodia Tourism Bot and
            get instant answers to where to go, what to eat, and how to
            explore.”
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Sign Up
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default CamTourHero;
