import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[500px] bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-800 my-2">
          Oops! The page you&apos;re looking for doesn&apos;t exist...yet
        </p>
        <Link href="/" className="font-bold text-xl hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
