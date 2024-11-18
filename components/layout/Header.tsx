import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import SuitsLogo from '../ui/SuitsLogoHeader';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Navigation />
      {/* Background */}
      <div className="relative bg-cover bg-center h-32 md:h-36">
        <Image
          src="/images/logo/pinstripe.png"
          alt="Suits 20/20 Background"
          fill
          className="object-cover"
          quality={100}
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center space-x-8 md:space-x-12 justify-center h-full text-center text-white px-4"
        >
          <SuitsLogo
            className="w-[112px] h-[88px] md:w-[140px] md:h-[110px] relative top-1 sm:top-2"
            backgroundColor="white"
            strokeColor="white"
            textColor="black"
          />

          <div className="relative border-[1.5px] border-white h-[77px] md:h-[97px] rounded-full bottom-[2px] sm:top-[1px]"></div>
          <div className="text-md md:text-2xl lg:text-[23px] font-medium text-left leading-5 sm:leading-5">
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
          </div>
        </Link>
      </div>
    </div>
  );
}
