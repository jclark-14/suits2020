import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import SuitsLogo from '../ui/SuitsLogo';
import Link from 'next/link';

export default function Header() {
  return (
    <header role="banner">
      <Navigation />
      {/* Background */}
      <div className="relative bg-cover bg-center h-32 md:h-40">
        <Image
          src="/images/logo/pinstripe.webp"
          alt="Suits 20/20 Background"
          fill
          className="object-cover"
          quality={100}
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Logo */}
        <div className="relative flex items-center space-x-8 md:space-x-12 justify-center h-full text-center text-white px-4 pb-1 pt-4 sm:pt-0">
          <SuitsLogo
            className="w-[112px] h-[88px] md:w-[140px] md:h-[110px] relative top-1 sm:top-2"
            backgroundColor="white"
            strokeColor="white"
            textColor="footerBrown"
            aria-label="Suits 20/20 logo"
          />
          <div className="relative border-[1.5px] border-white h-[77px] md:h-[97px] rounded-full bottom-[2px] sm:top-[1px]"></div>
          <Link
            href="/"
            className="text-md md:text-2xl lg:text-[23px] font-medium text-left leading-5 sm:leading-5"
          >
            MEN&apos;S & BOY&apos;S
            <br className="sm:hidden" /> FASHIONS{' '}
            <br className="hidden md:flex" />{' '}
            <span className="sm:font-bold">
              AT <br className="md:hidden" />
              <span className="font-bold">
                EXCEPTIONAL <br className="sm:hidden" />
                VALUE
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
