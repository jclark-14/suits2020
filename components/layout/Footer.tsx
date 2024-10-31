import { SocialLinks } from '../ui/SocialLinksFooter';
import SuitsLogo from '../ui/SuitsLogoHeader';

export default function Footer() {
  return (
    <footer className="bg-footerBrown text-white pt-10 pb-6 md:py-10">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-2">
          <SuitsLogo
            className="w-[130px] h-[88px] md:w-[180px] md:h-[120px]"
            backgroundColor="white"
            strokeColor="white"
            textColor="black"
          />
        </div>

        {/* Address */}
        <address className="not-italic text-md leading-relaxed mb-8">
          7651 N Caldwell Ave, <br />
          Niles, IL 60714 <br />
          <a href="tel:+18476762020" className="hover:underline">
            (847) 676-2020
          </a>
        </address>

        {/* Social Links */}
        <div className="mb-3 sm:mb-4 mx-auto">
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div className="text-sm md:text-md">
          © 2022 - Suits 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
