import React from 'react';
import Link from 'next/link';

const LocationPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[275px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full overflow-hidden bg-gray-800">
        <div
          className="w-full h-full flex flex-col justify-center items-center text-center text-white bg-cover bg-center pt-44"
          style={{
            backgroundImage: "url('/images/location/chicago-skyline3.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>{' '}
          <div className="flex flex-col mb-20 space-y-2 sm:space-y-4 lg:m-0 max-w-sm md:max-w-2xl lg:max-w-5xl z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold m-0">
              VISIT US TODAY
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-4xl font-normal tracking-wide m-0 sm:leading-normal md:leading-normal lg:leading-normal">
              Expert fashion advice and custom tailoring at our convenient
              location.
            </p>
          </div>
        </div>
      </section>

      {/* Address and Contact Information */}
      <section className="container mx-auto pt-8 pb-4 sm:py-10 md:pt-20 md:pb-10 lg:pt-20 lg:pb-10 px-8 sm:px-6 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Our Store Location */}
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-0 sm:mb-4 mt-4 sm:mt-0">
              Our Store Location
            </h2>
            <p className="text-base sm:text-lg text-black">
              7651 N Caldwell Ave
            </p>
            <p className="text-base sm:text-lg text-black">Niles, IL 60714</p>
            <p className="text-base sm:text-lg text-black">
              Phone:{' '}
              <a
                href="tel:+1234567890"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                +1 (847) 676-2020
              </a>
            </p>
            <p className="text-base sm:text-lg text-black">
              Email:{' '}
              <a
                href="mailto:info@suits2020.com"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                info@suits2020.com
              </a>
            </p>
          </div>
          {/* Store Hours */}
          <div className="flex flex-col space-y-2 mt-10 sm:mt-0 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-0 sm:mb-4 text-black">
              Store Hours
            </h2>
            <p className="text-base sm:text-lg text-black mb-0">
              Monday - Friday: 11:00 AM - 7:00 PM
            </p>
            <p className="text-base sm:text-lg text-black mb-0">
              Sunday - Sunday: 10:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto py-10 px-6 max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Our Location on the Map
        </h2>
        <div className="w-full h-96 sm:h-128">
          <iframe
            className="w-full h-full border rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.8438182346586!2d-87.81225558459422!3d42.01592507921062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbfa042c1fd67%3A0xeeb7e60e0a22c151!2s7651%20N%20Caldwell%20Ave%2C%20Niles%2C%20IL%2060714!5e0!3m2!1sen!2sus!4v1673456789012!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pt-6 pb-12 text-center">
        <h2 className="text-2xl font-bold text-black mb-4">
          Ready to Visit Us?
        </h2>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            '7651 N Caldwell Ave, Niles, IL 60714'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-medium bg-white text-black border-2 shadow-md border-footerBrown py-3 px-5 rounded-lg hover:bg-footerBrown hover:text-white hover:scale-105 transition-all duration-200 hover:shadow-xl"
        >
          Get Directions
        </Link>
      </section>
    </div>
  );
};

export default LocationPage;
