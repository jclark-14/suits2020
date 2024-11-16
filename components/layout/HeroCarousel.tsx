'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  image: string;
  alt: string;
  overlayOpacity: number;
  title?: string;
  title2?: string;
  subtitle?: string;
  description?: string[];
  className?: string;
  className2?: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: '/images/carousel/suit-rack6.png',
    alt: 'Fashion Outlet',
    overlayOpacity: 0.3,
    title: "CHICAGOLAND'S \nMEN'S & BOY'S",
    title2: 'FASHION WAREHOUSE.',
    description: [
      'Name Brand Suits, Tuxedos, Slacks, Sportcoats, Blazers',
      'Personal Service - Tailored to Fit On-site.',
    ],
    className:
      'text-2xl lg:text-5xl md:font-semibold tracking-wide m-0 tracking-wider whitespace-pre-line sm:whitespace-normal',
    className2:
      'hidden sm:block text-base sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide mb-0 mt-0',
  },
  {
    id: 2,
    image: '/images/carousel/suit-measuring.png',
    alt: 'Full service style',
    overlayOpacity: 0.5,
    title: 'FULL SERVICE STYLE',
    description: ['Expert Fashion Advice and Custom', 'Tailoring On-site.'],
    className: 'text-4xl sm:text-5xl md:text-5xl lg:text-8xl pt-10 mb-0',
  },
  {
    id: 3,
    image: '/images/carousel/suits-wedding.png',
    alt: 'Wedding Party Savings',
    overlayOpacity: 0.5,
    title: 'CHEERS TO 30%',
    description: ['SAVINGS FOR YOUR WEDDING PARTY!'],
    className: 'text-4xl sm:text-5xl md:text-5xl lg:text-8xl pt-10 mb-0',
    className2:
      'text-xl md:text-3xl lg:text-4xl font-normal tracking-wide mt-0 mb-3',
  },
];

// Carousel Navigation Button Component
const CarouselButton = ({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === 'left' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'
    } top-1/2 -translate-y-1/2 bg-black/20 md:bg-black/50 p-1 py-2 rounded-lg text-white hover:text-gray-200 transition-colors z-10`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
    ) : (
      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
    )}
  </button>
);

// Slide Component
const Slide = ({ data }: { data: SlideData }) => (
  <div className="w-full h-full flex-shrink-0">
    <div className="relative w-full h-full">
      <Image
        src={data.image}
        alt={data.alt}
        fill
        priority
        sizes="100vw"
        style={{
          objectPosition: 'center',
          objectFit: 'cover',
        }}
      />
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: data.overlayOpacity }}
      />
      <div className="absolute inset-0 flex flex-col justify-center mt-10 sm:mt-0 sm:justify-end h-full">
        <div className="relative flex flex-col items-center justify-end text-white px-4 text-center pb-4 md:pb-16">
          <div className="md:space-y-3 max-w-4xl">
            {data.title && (
              <>
                <h2 className={data.className}>{data.title}</h2>
                {data.title2 && (
                  <h2 className="text-4xl sm:text-8xl font-semibold">
                    {data.title2}
                  </h2>
                )}
              </>
            )}
            {data.subtitle && (
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold m-0">
                {data.subtitle}
              </h3>
            )}
            {data.description && (
              <div className="sm:space-y-4">
                {data.description.map((text, index) => (
                  <p
                    key={index}
                    className={
                      data.className2 ||
                      'text-base sm:text-lg md:text-4xl font-normal tracking-wide mb-0 mt-0'
                    }
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [canNavigate, setCanNavigate] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleTransitionEnd = useCallback(() => {
    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(SLIDES.length);
    } else if (currentSlide === SLIDES.length + 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    } else {
      setIsTransitioning(false);
    }
  }, [currentSlide]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }, 6000);
  }, []);

  const handleNavigation = useCallback(
    (direction: 'next' | 'prev') => {
      if (!canNavigate) return;
      setCanNavigate(false);
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + (direction === 'next' ? 1 : -1));
      startTimer();
      setTimeout(() => setCanNavigate(true), 500);
    },
    [canNavigate, startTimer]
  );

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(handleTransitionEnd, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, handleTransitionEnd]);

  return (
    <div className="relative h-[275px] sm:h-[350px] md:h-[415px] lg:h-[500px] w-full overflow-hidden bg-gray-800">
      <div
        className={`flex h-full ${
          isTransitioning
            ? 'transition-transform duration-500 ease-in-out'
            : 'transition-none'
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <Slide data={SLIDES[SLIDES.length - 1]} />
        {SLIDES.map(slide => (
          <Slide key={slide.id} data={slide} />
        ))}
        <Slide data={SLIDES[0]} />
      </div>

      <CarouselButton
        direction="left"
        onClick={() => handleNavigation('prev')}
      />
      <CarouselButton
        direction="right"
        onClick={() => handleNavigation('next')}
      />
    </div>
  );
}

export default HeroCarousel;
