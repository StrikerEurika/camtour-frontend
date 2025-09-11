"use client";
import React, { useState } from "react";

interface Cube3DProps {
  frontImage?: string;
  backImage?: string;
  rightImage?: string;
  leftImage?: string;
  topImage?: string;
  bottomImage?: string;
}

const defaultProps: Cube3DProps = {
  frontImage: "/images/amok_01.jpg",
  backImage: "/images/amok_01.jpg",
  rightImage: "/images/amok_01.jpg",
  leftImage: "/images/amok_01.jpg",
  topImage: "/images/amok_01.jpg",
  bottomImage: "/images/amok_01.jpg",
};

const Cube3D: React.FC<Cube3DProps> = (props) => {
  const {
    frontImage,
    backImage,
    rightImage,
    leftImage,
    topImage,
    bottomImage,
  } = { ...defaultProps, ...props };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex justify-center items-center bg-gray-50 text-white font-sans perspective-1000 border border-gray-300">
      <div className="flex justify-center items-center transform-style-3d">
        <div
          className={`relative w-40 h-40 md:w-36 md:h-36 transform-style-3d transition-transform duration-1000 cursor-pointer ${
            isHovered ? "animate-spin3d" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full rounded-xl border-1 bg-cover bg-center"
            style={{
              transform: "translateZ(75px)",
              backgroundImage: `url(${frontImage})`,
            }}
          ></div>

          {/* Back */}
          <div
            className="absolute w-full h-full rounded-xl border-1 bg-cover bg-center"
            style={{
              transform: "translateZ(-75px) rotateY(180deg)",
              backgroundImage: `url(${backImage})`,
            }}
          ></div>

          {/* Right */}
          <div
            className="absolute w-full h-full rounded-xl border-1 bg-cover bg-center"
            style={{
              transform: "translateX(75px) rotateY(90deg)",
              backgroundImage: `url(${rightImage})`,
            }}
          ></div>

          {/* Left */}
          <div
            className="absolute w-full h-full rounded-xl border-1 bg-cover bg-center"
            style={{
              transform: "translateX(-75px) rotateY(-90deg)",
              backgroundImage: `url(${leftImage})`,
            }}
          ></div>

          {/* Top */}
          <div
            className="absolute w-full h-full rounded-xl border-1 bg-cover bg-center"
            style={{
              transform: "translateY(-75px) rotateX(90deg)",
              backgroundImage: `url(${topImage})`,
            }}
          ></div>

          {/* Bottom */}
          <div
            className="absolute w-full h-full rounded-xl border-1 bg-cover bg-center"
            style={{
              transform: "translateY(75px) rotateX(-90deg)",
              backgroundImage: `url(${bottomImage})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Cube3D;
