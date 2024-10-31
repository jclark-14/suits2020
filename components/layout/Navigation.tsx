'use client';

import Link from 'next/link';
import { SocialLinks } from '../ui/SocialLinksHeader';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white md:bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:justify-center h-12 md:h-12 font-sans">
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-shrink">
            <div className="hidden md:flex items-center text-lg sm:mr-2 md:mr-40 md:text-lg lg:text-xl space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 flex-shrink">
              <Link href="/services">
                <span className="text-white hover:text-gray-300 transition-colors">
                  SERVICES
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[27px]"></div>
              <Link href="/location">
                <span className="text-white hover:text-gray-300 transition-colors">
                  LOCATION
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[27px]"></div>
              <Link href="/brands">
                <span className="text-white hover:text-gray-300 whitespace-nowrap inline-block transition-colors">
                  DESIGNER BRANDS
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[27px]"></div>
              <Link href="/contact">
                <span className="text-white hover:text-gray-300">CONTACT</span>
              </Link>
            </div>
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full mt-1">
            <SocialLinks />
            <button onClick={toggleMenu} className="text-black p-2">
              <svg
                className="w-8 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 32 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <g transform="translate(8, 0)">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </g>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h24M4 12h24M4 18h24"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div className="border-t-2 border-gray-150 -mx-4 mt-1"></div>
            <div className="md:hidden flex flex-col items-center mt-20 space-y-16 min-h-screen text-2xl bg-white">
              <Link href="/services">
                <span className="block text-gray-900 font-medium">
                  SERVICES
                </span>
              </Link>
              <div className="border-t-2 border-gray-200 w-3/4"></div>
              <Link href="/location">
                <span className="block text-gray-900 font-medium">
                  LOCATION
                </span>
              </Link>
              <div className="border-t-2 border-gray-200 w-3/4"></div>
              <Link href="/brands">
                <span className="block text-gray-900 font-medium">
                  DESIGNER BRANDS
                </span>
              </Link>
              <div className="border-t-2 border-gray-200 w-3/4"></div>
              <Link href="/contact">
                <span className="block text-gray-900 font-medium">CONTACT</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
