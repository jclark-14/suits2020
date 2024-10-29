'use client';

import Link from 'next/link';
import { SocialLinks } from '../ui/SocialLinks';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12 font-serif">
          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 flex-shrink">
              <Link href="/services">
                <span className="text-white hover:text-gray-300 transition-colors">
                  SERVICES
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[20px]"></div>
              <Link href="/location">
                <span className="text-white hover:text-gray-300 transition-colors">
                  LOCATION
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[20px]"></div>
              <Link href="/brands">
                <span className="text-white hover:text-gray-300 whitespace-nowrap inline-block transition-colors">
                  DESIGNER BRANDS
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[20px]"></div>
              <Link href="/contact">
                <span className="text-white hover:text-gray-300">CONTACT</span>
              </Link>
            </div>
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/services">
              <span className="block text-gray-800 hover:text-green-600">
                Services
              </span>
            </Link>
            <Link href="/location">
              <span className="block text-gray-800 hover:text-green-600">
                Location
              </span>
            </Link>
            <Link href="/brands">
              <span className="block text-gray-800 hover:text-green-600">
                Designer Brands
              </span>
            </Link>
            <Link href="/contact">
              <span className="block text-gray-800 hover:text-green-600">
                Contact
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
