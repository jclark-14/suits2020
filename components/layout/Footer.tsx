import { SocialLinks } from '../ui/SocialLinksFooter';
import SuitsLogo from '../ui/SuitsLogoHeader';

export default function Footer() {
  return (
    <footer className="bg-footerBrown text-white pt-10 pb-8 md:pt-14 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-4">
          <SuitsLogo
            className="w-[130px] h-[88px] md:w-[180px] md:h-[125px]"
            backgroundColor="white"
            strokeColor="white"
            textColor="black"
          />
        </div>

        {/* Address */}
        <address className="not-italic text-lg sm:text-lg leading-relaxed mb-8 sm:mb-10">
          7651 N Caldwell Ave, <br />
          Niles, IL 60714 <br />
          <a href="tel:+18476762020" className="hover:underline">
            (847) 676-2020
          </a>
        </address>

        {/* Social Links */}
        <div className="mb-4 mx-auto">
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div className="text-md">© 2022 - Suits 2020. All rights reserved.</div>
      </div>
    </footer>
  );
}
