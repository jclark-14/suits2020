'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  subTitle?: string | undefined;
  description: string;
  imageSrc: string;
  imageSrcMobile?: string;
  hasOverlay?: boolean;
  overlayText?: string;
  overlayPosition?: 'left' | 'right';
}

export default function Card({
  title,
  subTitle,
  description,
  imageSrc,
  imageSrcMobile,
  hasOverlay,
  overlayText,
  overlayPosition = 'left',
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
    };

    // Check immediately and add listener
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Handle card interaction based on device
  const handleInteraction = () => {
    if (isMobile) {
      setIsPressed(!isPressed);
    }
  };

  const showOverlay = isMobile ? isPressed : isHovered;
  // Determine which image to display
  const currentImageSrc =
    isMobile && imageSrcMobile ? imageSrcMobile : imageSrc;

  return (
    <div
      className={`relative w-full h-full overflow-hidden group rounded-md shadow-xl md:shadow-lg`}
      onClick={handleInteraction}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={currentImageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-300 ${
            isMobile ? 'group-hover:scale-100' : 'group-hover:scale-105'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Default Black Overlay at Bottom - Only for cards without hasOverlay */}
      {!hasOverlay && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform transition-all duration-300 ${
            showOverlay ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h3 className="text-xl font-semibold tracking-wider relative top-1">
            {title}
          </h3>
        </div>
      )}

      {/* Default Black Overlay at Bottom - all card for mobile */}
      {hasOverlay && isMobile && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform transition-all duration-300 ${
            showOverlay ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h3 className="text-xl font-semibold tracking-wider relative top-1">
            {subTitle}
          </h3>
        </div>
      )}

      {/* Special Half-Width Overlay for Cards 3 and 6 */}
      {hasOverlay && !showOverlay && !isMobile && (
        <div
          className={`absolute inset-0 bg-black bg-opacity-80 flex w-[50%] transition-all duration-300 ease-in-out ${
            overlayPosition === 'right' ? 'right-0 ml-auto' : 'left-0'
          }`}
        >
          <div className="w-full h-full mx-4 flex justify-center flex-col">
            <h3
              className={`text-2xl md:text-5xl font-semibold text-white tracking-wider ${
                overlayPosition === 'right' ? 'text-right' : 'text-left'
              }`}
            >
              {overlayText?.split('\n').map((line, index) => (
                <div key={index} className="mb-2">
                  {line}
                </div>
              ))}
            </h3>
            <p
              className={`mb-1 pt-8 text-2xl ${
                overlayPosition === 'right' ? 'text-right' : 'text-left'
              }`}
            >
              {title}
            </p>
          </div>
        </div>
      )}

      {/* Blue Hover/Press Overlay - Applied to All Cards */}
      <div
        className={`absolute inset-0 h-full bg-blue-950 bg-opacity-80 text-white flex flex-col justify-center items-center text-center transform transition-all duration-300 ${
          showOverlay
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        <h3
          className={`md:text-4xl px-2 font-semibold tracking-wider ${
            isMobile ? 'text-xl mb-1' : 'text-xl mb-1'
          }`}
        >
          {subTitle ?? title}
        </h3>
        <div className="w-10/12 max-w-xl mx-auto px-2">
          <p
            className={` md:text-xl font-light tracking-wide leading-relaxed text-center
              ${isMobile ? 'text-sm' : 'text-xl'}`}
            style={{ lineHeight: '1.15' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
