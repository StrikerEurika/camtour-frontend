"use client";
import React, { useRef, useState } from "react";

interface Cube3DProps {
  frontImage?: string;
  backImage?: string;
  rightImage?: string;
  leftImage?: string;
  topImage?: string;
  bottomImage?: string;
}

const defaultProps: Cube3DProps = {
  frontImage: "/images/cambodia-angkor-wat-krong-siem-reap-architecture.jpg",
  backImage: "/images/central-market.jpg",
  rightImage: "/images/national-museum.jpg",
  leftImage: "/images/royal-palace-02.png",
  topImage: "/images/siem-reab.jpg",
  bottomImage: "/images/vitamin-sea.png",
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

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    setRotation((r) => {
      // Invert horizontal drag if cube is upside down
      const invert =
        Math.abs(((r.x % 360) + 360) % 360) > 90 &&
        Math.abs(((r.x % 360) + 360) % 360) < 270
          ? -1
          : 1;
      return {
        x: r.x - dy * 0.5,
        y: r.y + dx * 0.5 * invert,
      };
    });
    last.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 text-white font-sans perspective-1000">
      <div
        style={{
          width: "120px",
          height: "50px",
          background: "rgba(0,0,0,0.25)",
          filter: "blur(12px)",
          borderRadius: "50%",
          position: "absolute",
          bottom: "14px",
          zIndex: 0,
        }}
      />
      <div className="flex justify-center items-center transform-style-3d">
        <div
          className={`relative w-45 h-45 md:w-35 md:h-35 transform-style-3d transition-transform duration-1000 cursor-grab`}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              transform: "translateZ(70px)",
              backgroundImage: `url(${frontImage})`,
            }}
          ></div>

          {/* Back */}
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              transform: "translateZ(-70px) rotateY(180deg)",
              backgroundImage: `url(${backImage})`,
            }}
          ></div>

          {/* Right */}
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              transform: "translateX(70px) rotateY(90deg)",
              backgroundImage: `url(${rightImage})`,
            }}
          ></div>

          {/* Left */}
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              transform: "translateX(-70px) rotateY(-90deg)",
              backgroundImage: `url(${leftImage})`,
            }}
          ></div>

          {/* Top */}
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              transform: "translateY(-70px) rotateX(90deg)",
              backgroundImage: `url(${topImage})`,
            }}
          ></div>

          {/* Bottom */}
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              transform: "translateY(70px) rotateX(-90deg)",
              backgroundImage: `url(${bottomImage})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Cube3D;
