"use client";

import Link from "next/link";
import NavItem from "./NavItems";
import React from "react";

const Navbar = () => {
  return (
    <header className="relative bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between w-full py-5">
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
            <NavItem
              label="About us"
              dropdownItems={[
                { href: "/about/team", label: "Our Team" },
                { href: "/about/mission", label: "Our Mission" },
              ]}
            ></NavItem>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
