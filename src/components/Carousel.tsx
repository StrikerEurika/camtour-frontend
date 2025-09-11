"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { carouselImages } from "../data/images";

const slides = carouselImages.map((image) => ({
  src: image.src,
  alt: image.alt,
}));

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const showSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const startSlideShow = useCallback(() => {
    const interval = setInterval(nextSlide, 5000);
    setSlideInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    showSlide(0);
    startSlideShow();

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [showSlide, startSlideShow]); // Removed slideInterval from dependencies

  const handleIndicatorClick = (index: number) => {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    showSlide(index);
    startSlideShow();
  };

  const handleArrowClick = (direction: "next" | "prev") => {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    direction === "next" ? nextSlide() : prevSlide();
    startSlideShow();
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover rounded-lg"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Kingdom of Cambodia
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
          The land of smile, kind, and deep culture rooted.
        </p>
        <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-lg mb-10 max-w-xl mx-auto">
          Begin your adventure with accurate information here
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all"
        onClick={() => handleArrowClick("prev")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all"
        onClick={() => handleArrowClick("next")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full bg-white cursor-pointer transition-opacity duration-200 ${
              index === currentSlide ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
