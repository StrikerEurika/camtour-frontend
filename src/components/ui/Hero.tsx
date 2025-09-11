"use client";
import Quote from "../Quote";
import Carousel from "../Carousel";

const Hero = () => {
  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="mt-8 px-4 w-full">
          <Carousel />
        </div>

        {/* Quote Section */}
        <div className="my-5 px-4 w-full">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Hero;
