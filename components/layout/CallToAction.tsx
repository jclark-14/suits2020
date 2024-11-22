import React from 'react';
import Link from 'next/link';

interface CTAProps {
  href: string;
  label: string;
  ariaLabel?: string;
  isExternal?: boolean;
  title: string;
  subtitle: string;
  className?: string;
}

export default function CallToAction({
  href,
  label,
  ariaLabel,
  title,
  subtitle,
  isExternal = false,
  className = '',
}: CTAProps) {
  const buttonBaseStyles =
    'py-4 px-6 text-xl inline-block font-medium border-2 shadow-lg rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl bg-white text-black border-footerBrown hover:bg-footerBrown hover:text-white';

  const linkProps = {
    href,
    className: `${buttonBaseStyles} ${className}`,
    'aria-label': ariaLabel || label,
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };

  return (
    <div
      className="py-24 px-2 text-center bg-white relative bottom-1"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl mb-4 font-bold text-black"
        >
          {title}
        </h2>
        <p className="text-xl mx-auto mb-8 text-gray-700 max-w-144">
          {subtitle}
        </p>
        <Link {...linkProps}>{label}</Link>
      </div>
    </div>
  );
}
