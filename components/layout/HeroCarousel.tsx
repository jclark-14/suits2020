'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define slide data interface
interface SlideData {
  id: number;
  image: string;
  alt: string;
  overlayOpacity: number;
  title?: string;
  subtitle?: string;
  description?: string[];
  className?: string;
}

// Define slide data outside component to prevent recreation
const SLIDES: SlideData[] = [
  {
    id: 1,
    image: '/images/carousel/suits-wedding.png',
    alt: 'Wedding Party Savings',
    overlayOpacity: 55,
    title: 'CHEERS TO 30%',
    description: ['SAVINGS FOR YOUR WEDDING PARTY!'],
    className: 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl',
  },
  {
    id: 2,
    image: '/images/carousel/suit-rack6.png',
    alt: 'Fashion Outlet',
    overlayOpacity: 30,
    title: "CHICAGOLAND'S MEN'S & BOY'S",
    subtitle: 'FASHION OUTLET.',
    description: [
      'Name Brand Suits, Tuxedos, Slacks Sportcoats, Blazers',
      'Personal Service - Tailored to Fit OnSite.',
    ],
  },
  {
    id: 3,
    image: '/images/carousel/suit-measuring.png',
    alt: 'Full service style',
    overlayOpacity: 55,
    title: 'FULL SERVICE STYLE',
    description: ['Expert Fashion Advice and Custom', 'Tailoring OnSite.'],
    className: 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl',
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
    } top-1/2 -translate-y-1/2 bg-black/20 md:bg-black/50 p-1 py-2 rounded-lg text-white hover:text-gray-200 hover:bg-black/65 transition-colors z-10`}
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
        style={{ opacity: data.overlayOpacity / 100 }}
      />
      <div className="absolute inset-0 flex flex-col justify-end h-full">
        <div className="relative flex flex-col items-center justify-end text-white px-4 text-center pb-4 md:pb-12">
          <div className="md:space-y-3 max-w-4xl">
            {data.title && (
              <h2
                className={
                  data.className ||
                  'text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide m-0'
                }
              >
                {data.title}
              </h2>
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
                    className="text-base sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide mb-0 mt-0"
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
      setTimeout(() => setCanNavigate(true), 1000);
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
      const timer = setTimeout(handleTransitionEnd, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, handleTransitionEnd]);

  return (
    <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full overflow-hidden">
      <div
        className={`flex h-full ${
          isTransitioning
            ? 'transition-transform duration-1000 ease-in-out'
            : 'transition-none'
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <Slide data={SLIDES[SLIDES.length - 1]} /> {/* Clone of last slide */}
        {SLIDES.map(slide => (
          <Slide key={slide.id} data={slide} />
        ))}
        <Slide data={SLIDES[0]} /> {/* Clone of first slide */}
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
