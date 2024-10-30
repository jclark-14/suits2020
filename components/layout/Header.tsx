import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import SuitsLogo from '../ui/SuitsLogoHeader';

export default function Header() {
  return (
    <div>
      <Navigation />
      {/* Background */}
      <div className="relative bg-cover bg-center h-32 md:h-56">
        <Image
          src="/images/logo/suit-texture2.png"
          alt="Suits 20/20 Background"
          fill
          className="object-cover"
          quality={100}
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
        {/* Logo */}
        <div className="relative flex items-center space-x-8 md:space-x-12 justify-center h-full text-center text-white px-4">
          <SuitsLogo
            className="w-[130px] h-[88px] md:w-[190px] md:h-[140px] relative top-1 md:top-2"
            backgroundColor="white"
            strokeColor="white"
            textColor="black"
          />

          <div className="border-[1.5px] border-white h-[88px] md:h-[140px] rounded-full"></div>
          <div className="mt-2 text-md md:text-2xl lg:text-4xl font-medium text-left">
            MEN&apos;S & BOY&apos;S
            <br className="sm:hidden" /> FASHIONS{' '}
            <br className="hidden md:flex" />{' '}
            <span className="sm:font-bold">
              AT <br className="md:hidden" />
              <span className="font-bold">
                EXCEPTIONAL <br className="md:hidden" />
                VALUE
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
