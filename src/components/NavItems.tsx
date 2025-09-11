import Link from "next/link";
import React, { useRef, useState } from "react";

const NavItem = ({
  href,
  label,
  dropdownItems,
}: {
  href?: string;
  label: string;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
    setIsOpen(true); // Open the dropdown
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false); // Close the dropdown after a delay
    }, 200); // Delay of 200ms
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter} // Open on hover
      onMouseLeave={handleMouseLeave} // Close on hover out
    >
      <Link
        href={href || "#"}
        className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-[15px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {dropdownItems && (
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
        )}
      </Link>

      {dropdownItems && isOpen && (
        <div
          className={`absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          onMouseEnter={handleMouseEnter} // Open on hover
          onMouseLeave={handleMouseLeave} // Close on hover out
        >
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
