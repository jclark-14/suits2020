import Link from 'next/link';

export function SocialLinks() {
  return (
    <nav className="flex gap-[8px] md:ml-32">
      <Link
        href="https://www.instagram.com/suits2020chicago/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black md:text-white hover:text-gray-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[24] h-[24] md:w-[29px] md:h-[29px]"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </Link>
      <Link
        href="https://www.facebook.com/suits2020chicago"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black md:text-white hover:text-gray-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="w-[24] h-[24] md:w-[29px] md:h-[29px] scale-x-[1.2]"
        >
          <path d="M16.5 2H14C11.5147 2 9.5 4.01472 9.5 6.5V9H7V12H9.5V22H12.5V12H15L16 9H12.5V6.5C12.5 5.67157 13.1716 5 14 5H16.5V2Z" />
        </svg>
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black md:text-white hover:text-gray-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[24] h-[24] md:w-[29px] md:h-[29px]"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      </Link>
    </nav>
  );
}
