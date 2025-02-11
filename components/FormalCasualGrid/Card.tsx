'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface CardProps {
  title: string;
  subTitle?: string;
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
  const [isLargeMobile, setIsLargeMobile] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Check if on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLargeMobile(window.innerWidth < 850);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleCardClick = () => {
    if (isMobile || isLargeMobile) {
      setIsOverlayOpen(true);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOverlayOpen(false);
  };

  const showOverlay = isMobile || isLargeMobile ? isOverlayOpen : isHovered;
  const currentImageSrc = `${
    isMobile && imageSrcMobile ? imageSrcMobile : imageSrc
  }?v=${isMobile ? 'mobile' : 'desktop'}`;

  return (
    <div
      className="relative w-full h-full overflow-hidden group rounded-md shadow-xl md:shadow-lg"
      onClick={handleCardClick}
      onMouseEnter={() => !isMobile && !isLargeMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && !isLargeMobile && setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={currentImageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-300 ${
            isMobile || isLargeMobile
              ? 'group-hover:scale-100'
              : 'group-hover:scale-105'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
        />
      </div>

      {/* Default Black Overlay at Bottom - Only for cards without hasOverlay */}
      {!hasOverlay && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-footerBrown bg-opacity-85 text-white p-4 transform transition-all duration-300 ${
            showOverlay ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h3 className="text-xl font-semibold tracking-wider relative top-1">
            {title}
          </h3>
        </div>
      )}

      {/* Default Black Overlay at Bottom - all card for mobile */}
      {hasOverlay && (isMobile || isLargeMobile) && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-footerBrown bg-opacity-85 text-white p-4 transform transition-all duration-300 ${
            showOverlay ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h3 className="text-xl font-semibold tracking-wider relative top-1">
            {subTitle}
          </h3>
        </div>
      )}

      {/* Special Half-Width Overlay for Cards 3 and 6 */}
      {hasOverlay && !showOverlay && !isMobile && !isLargeMobile && (
        <div
          className={`absolute inset-0 bg-footerBrown bg-opacity-90 flex w-[40%] transition-all duration-300 ease-in-out ${
            overlayPosition === 'right' ? 'right-0 ml-auto' : 'left-0'
          }`}
        >
          <div className="w-full h-full mx-4 flex justify-center lg:justify-start flex-col">
            <h3
              className={`text-2xl sm:text-[35px] lg:text-[3rem] lg:mt-6 font-semibold text-white lg:tracking-wide ${
                overlayPosition === 'right' ? 'text-right' : 'text-left'
              }`}
            >
              {overlayText?.split('\n').map((line, index) => (
                <div key={index} className="mb-3 lg:mb-6">
                  {line}
                </div>
              ))}
            </h3>
            <p
              className={`mb-1 mt-2 text-xl lg:text-2xl ${
                overlayPosition === 'right' ? 'text-right' : 'text-left'
              }`}
            >
              {title}
            </p>
          </div>
        </div>
      )}

      {/* onClick Overlay - Applied to All Cards */}
      <div
        className={`absolute inset-0 h-full bg-stone-800 bg-opacity-90 text-white flex flex-col justify-center items-center text-center transform transition-all duration-300 ${
          showOverlay
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        {showOverlay && (
          <button
            onClick={handleClose}
            className={`block close-button absolute top-1 right-1 p-2 text-white hover:text-gray-300 transition-colors
            ${!isLargeMobile && 'md:hidden'}`}
            aria-label="Close overlay"
          >
            <X size={26} />
          </button>
        )}
        <h3 className="md:text-4xl px-2 font-semibold tracking-wider sm:tracking-normal lg:tracking-wider text-xl mb-1">
          {subTitle ?? title}
        </h3>
        <div className="w-10/12 max-w-xl mx-auto px-2">
          <p
            className="md:text-xl font-light tracking-wide leading-relaxed text-center text-base"
            style={{ lineHeight: '1.2' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
