import Link from "next/link";
import React, { useState } from "react";

const NavItem = ({ href, label }: { href: string; label: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <Link
        href={href}
        className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-[15px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          className="w-4 h-4 ml-1 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <path
            d="M 3 5.5 L 7 9.5 L 11 5.5"
            fill="transparent"
            strokeWidth="2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Dropdown menu - you can implement this based on your needs */}
      {/* {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {/* Dropdown items go here */}
      {/* )} */}
    </div>
  );
};

export default NavItem;
