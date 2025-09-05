"use client";

import { useState } from "react";

const Hero = () => {
  const images = ["images/rt-01.jpg", "images/rt-02.jpg", "images/rt-03.jpg"];

  const [currentIndex, setCurrentIndex] = useState(5); // Start with Amok dish

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative max-w-[1200px] mx-auto px-4 py-8 bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] rounded-lg overflow-hidden bg-white">
        {/* Image Carousel */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />

        {/* Overlay - now white with slight opacity */}
        <div className="absolute inset-0 bg-white bg-opacity-70" />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 z-10"
          aria-label="Previous"
        >
          <img
            src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
            alt="Back Arrow"
            className="w-5 h-5"
          />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 z-10"
          aria-label="Next"
        >
          <img
            src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
            alt="Next Arrow"
            className="w-5 h-5"
          />
        </button>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-black">
          <h1
            className="text-5xl font-bold mb-4 tracking-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              fontVariationSettings: '"opsz" 32, "wght" 700',
            }}
          >
            Kingdom of Cambodia
          </h1>
          <h3
            className="text-xl mb-6 tracking-tight"
            style={{
              fontFamily: "Inter Display, sans-serif",
            }}
          >
            The land of smile, kind, and deep culture rooted.
          </h3>

          <div className="w-24 h-px bg-gray-300 mb-6"></div>

          <p
            className="text-lg mb-8 tracking-tight"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
            }}
          >
            Begin your adventure with accurate information here
          </p>

          <div className="flex items-center justify-center space-x-3 bg-gray-100 text-black px-6 py-3 rounded-full font-serif text-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer shadow">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://framerusercontent.com/images/IujkFU3ymxNozWVgG8b2fqCmY.jpeg"
                alt="CAMTour Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif">CAMTour</span>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-8 text-center px-4">
        <h3
          className="text-xl md:text-2xl font-bold italic text-gray-800"
          style={{
            fontFamily: "Inter, sans-serif",
            fontVariationSettings: '"opsz" 32, "wght" 700',
          }}
        >
          "Discover ancient temples, vibrant culture, and warm hospitality in
          the heart of Southeast Asia."
        </h3>
      </div>
    </div>
  );
};

export default Hero;
