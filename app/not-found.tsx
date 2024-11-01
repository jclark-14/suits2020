import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-800 my-2">
          Oops! The page you&apos;re looking for doesn&apos;t exist...yet
        </p>
        <p className="text-gray-800 text-lg">
          Back to{' '}
          <Link href="/" className="font-extrabold text-xl hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
