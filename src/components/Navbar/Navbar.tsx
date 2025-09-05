"use client";

import Link from "next/link";
import NavItem from "./NavItems";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto px-4 py-8 bg-white">
      <nav className="flex items-center justify-between w-full px-5 py-5 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center">
          <Link href="/" className="font-['Palette_Mosaic'] text-3xl">
            Camtour
          </Link>
        </div>

        <div className="flex items-center justify-end flex-1 gap-5">
          {/* Home */}
          <NavItem href="/" label="Home" />

          {/* Destination */}
          <NavItem href="/destinations" label="Destination" />

          {/* Experiences */}
          <NavItem href="/experiences" label="Experiences" />

          {/* Events */}
          <NavItem href="/events" label="Events" />

          {/* Accommodation */}
          <NavItem href="/accommodations" label="Accommodation" />

          {/* About Us */}
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 font-medium text-[15px]"
          >
            About us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
