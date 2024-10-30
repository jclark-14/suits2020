// Card.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  hasOverlay?: boolean;
  overlayText?: string;
  overlayPosition?: 'left' | 'right'; // New prop for overlay position
}

export default function Card({
  title,
  description,
  imageSrc,
  hasOverlay,
  overlayText,
  overlayPosition = 'left', // Default to left if not specified
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden group rounded-md shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/*Overlay Div*/}
      {hasOverlay ? (
        <div
          className={`absolute inset-0 bg-black bg-opacity-75 flex w-1/2 
            ${overlayPosition === 'right' ? 'right-0 ml-auto' : 'left-0'}`}
        >
          {/*Overlay Main text*/}
          <div className="w-full h-full mx-4 flex justify-center flex-col">
            <h3
              className={`text-4xl md:text-6xl font-semibold text-white tracking-wider 
                ${overlayPosition === 'right' ? 'text-right' : 'text-left'}`}
            >
              {overlayText?.split('\n').map((line, index) => (
                <div key={index} className="mb-2">
                  {line}
                </div>
              ))}
            </h3>
            {/*Overlay secondary text*/}
            <p
              className={`my-1 text-3xl ${
                overlayPosition === 'right' ? 'text-right' : 'text-left'
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Default title overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform transition-all duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-semibold tracking-wider relative top-1">
              {title}
            </h3>
          </div>
          {/* Hover overlay */}
          <div
            className={`absolute inset-0 h-full bg-blue-900 bg-opacity-80 text-white flex flex-col justify-center items-center text-center transform transition-all duration-300 ${
              isHovered
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
          >
            <h3 className="text-2xl md:text-4xl px-4 mb-2 font-semibold tracking-wider">
              {title}
            </h3>
            <div className="w-5/6 mx-auto ">
              <p
                className="text-lg md:text-2xl font-light tracking-wide pt-6"
                style={{ lineHeight: '1.5' }}
              >
                {description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
