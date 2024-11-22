import { SocialLinks } from '../ui/SocialLinks';
import SuitsLogo from '../ui/SuitsLogo';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-footerBrown text-white pt-10 pb-6 md:py-10"
    >
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-2">
          <SuitsLogo
            className="w-[130px] h-[88px] md:w-[180px] md:h-[120px]"
            backgroundColor="white"
            strokeColor="white"
            textColor="footerBrown"
          />
        </div>

        {/* Address */}
        <address className="not-italic text-lg leading-relaxed mb-8">
          7651 N Caldwell Ave, <br />
          Niles, IL 60714 <br />
          <a href="tel:+18476762020" className="hover:underline">
            (847) 676-2020
          </a>
        </address>

        {/* Social Links */}
        <div className="mb-3 sm:mb-4 mx-auto">
          <SocialLinks color="white" />
        </div>

        {/* Copyright */}
        <div className="text-base">
          © 2022 - Suits 20/20. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
