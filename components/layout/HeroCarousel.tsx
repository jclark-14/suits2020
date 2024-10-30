'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [canNavigate, setCanNavigate] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Timer and navigation functions remain the same
  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }, 6000);
  }, []);

  const nextSlide = useCallback(() => {
    if (!canNavigate) return;
    setCanNavigate(false);
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
    startTimer();
    setTimeout(() => setCanNavigate(true), 1000);
  }, [startTimer, canNavigate]);

  const prevSlide = useCallback(() => {
    if (!canNavigate) return;
    setCanNavigate(false);
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
    startTimer();
    setTimeout(() => setCanNavigate(true), 1000);
  }, [startTimer, canNavigate]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!canNavigate) return;
      setCanNavigate(false);
      setIsTransitioning(true);
      setCurrentSlide(index + 1);
      startTimer();
      setTimeout(() => setCanNavigate(true), 1000);
    },
    [startTimer, canNavigate]
  );

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  useEffect(() => {
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(3);
      }, 1000);
    } else if (currentSlide === 4) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }
  }, [currentSlide]);

  return (
    <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[525px] w-full overflow-hidden">
      <div
        className={`flex h-full ${
          isTransitioning
            ? 'transition-transform duration-1000 ease-in-out'
            : 'transition-none'
        }`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {/* Clone of Last Slide (Slide 3) */}
        <div className="w-full h-full flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/carousel/suits-wedding.png"
              alt="Wedding Party Savings"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative h-full flex flex-col items-center justify-end text-white px-4 text-center pb-8 sm:pb-16">
              <div className="sm:space-y-3 md:space-y-4 max-w-4xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold mb-0">
                  CHEERS TO 30%
                </h2>
                <p className="text-xl md:text-3xl lg:text-4xl font-normal tracking-wide">
                  SAVINGS FOR YOUR WEDDING PARTY!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 1 */}
        <div className="w-full h-full flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/carousel/suits-rack.png"
              alt="Fashion Outlet"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative h-full flex flex-col items-center justify-end text-white px-4 text-center pb-12 sm:pb-16">
              <div className=" sm:space-y-3 md:space-y-4 max-w-4xl">
                <div className="md:space-y-1">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide m-0">
                    CHICAGOLAND&apos;S <br className="sm:hidden" />
                    MEN&apos;S & BOY&apos;S
                  </h1>
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold m-0">
                    FASHION OUTLET.
                  </h2>
                </div>
                <div className="hidden sm:block space-y-1">
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide">
                    Name Brand Suits, Tuxedos, Slacks Sportcoats, Blazers
                  </p>
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide">
                    Personal Service - Tailored to Fit OnSite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-full h-full flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/carousel/suit-measuring.png"
              alt="Full Service Style"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative h-full flex flex-col items-center justify-end text-white px-4 text-center pb-6 sm:pb-16">
              <div className="sm:space-y-3 md:space-y-4 max-w-4xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold mb-0">
                  FULL SERVICE STYLE
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl font-normal tracking-wide">
                  Expert Fashion Advice and Custom <br className="sm:hidden" />
                  Tailoring OnSite.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="w-full h-full flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/carousel/suits-wedding.png"
              alt="Wedding Party Savings"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative h-full flex flex-col items-center justify-end text-white px-4 text-center pb-8 sm:pb-16">
              <div className="sm:space-y-3 md:space-y-4 max-w-4xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold mb-0">
                  CHEERS TO 30%
                </h2>
                <p className="text-xl md:text-3xl lg:text-4xl font-normal tracking-wide">
                  SAVINGS FOR YOUR WEDDING PARTY!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clone of First Slide (Slide 1) */}
        <div className="w-full h-full flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/carousel/suits-rack.png"
              alt="Fashion Outlet"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative h-full flex flex-col items-center justify-end text-white px-4 text-center pb-12 sm:pb-16">
              <div className=" sm:space-y-3 md:space-y-4 max-w-4xl">
                <div className="md:space-y-1">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide m-0">
                    CHICAGOLAND&apos;S <br className="sm:hidden" />
                    MEN&apos;S & BOY&apos;S
                  </h1>
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold m-0">
                    FASHION OUTLET.
                  </h2>
                </div>
                <div className="hidden sm:block space-y-1">
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide">
                    Name Brand Suits, Tuxedos, Slacks Sportcoats, Blazers
                  </p>
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide">
                    Personal Service - Tailored to Fit OnSite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/20 md:bg-black/50 p-1 sm:p-2 rounded-lg text-white hover:text-gray-200 hover:bg-black/75 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/20 md:bg-black/50 p-1 sm:p-2 rounded-lg text-white hover:text-gray-200 hover:bg-black/75 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
        {[0, 1, 2].map(index => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
              index === currentSlide - 1 ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
