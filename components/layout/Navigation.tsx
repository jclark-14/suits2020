'use client';

import Link from 'next/link';
import { SocialLinks } from '../ui/SocialLinks';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white md:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:justify-center h-10 font-sans">
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-shrink items-center">
            <div className="hidden md:flex items-center text-lg md:pr-28 lg:pr-40 md:text-lg lg:text-lg space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 flex-shrink">
              <Link href="/services">
                <span className="text-white hover:text-gray-300 transition-colors">
                  SERVICES
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[19px]"></div>
              <Link href="/location">
                <span className="text-white hover:text-gray-300 transition-colors">
                  LOCATION
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[19px]"></div>
              <Link href="/brands">
                <span className="text-white hover:text-gray-300 whitespace-nowrap inline-block transition-colors">
                  DESIGNER BRANDS
                </span>
              </Link>
              <div className="border-l border-[1.5px] border-white h-[19px]"></div>
              <Link href="/contact">
                <span className="text-white hover:text-gray-300">CONTACT</span>
              </Link>
            </div>
            <SocialLinks color="white" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full mt-1">
            <SocialLinks color="black" />
            <button
              onClick={toggleMenu}
              className="text-black p-2 z-50 relative"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
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

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 md:hidden">
            <div className="w-full mt-1 px-4 py-[6px]">
              <SocialLinks color="black" />
            </div>
            <div className="border-t-2 border-gray-200 w-full"></div>

            <div className="flex flex-col items-center mt-20 space-y-16 text-2xl">
              <Link href="/services" onClick={handleNavigation}>
                <span className="block text-gray-900 font-medium">
                  SERVICES
                </span>
              </Link>
              <div className="border-t-2 border-gray-200 w-3/4"></div>
              <Link href="/location" onClick={handleNavigation}>
                <span className="block text-gray-900 font-medium">
                  LOCATION
                </span>
              </Link>
              <div className="border-t-2 border-gray-200 w-3/4"></div>
              <Link href="/brands" onClick={handleNavigation}>
                <span className="block text-gray-900 font-medium">
                  DESIGNER BRANDS
                </span>
              </Link>
              <div className="border-t-2 border-gray-200 w-3/4"></div>
              <Link href="/contact" onClick={handleNavigation}>
                <span className="block text-gray-900 font-medium">CONTACT</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
