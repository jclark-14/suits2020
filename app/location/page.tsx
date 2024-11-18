import React from 'react';

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
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>{' '}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 z-10">
            VISIT US TODAY
          </h1>
          <p className="text-base sm:text-lg md:text-4xl font-normal tracking-wide mb-0 mt-0 z-10 max-w-5xl">
            Expert fashion advice and custom tailoring at our convenient
            location.
          </p>
        </div>
      </section>

      {/* Address and Contact Information */}
      <section className="container mx-auto py-10 px-6">
        <div className="flex justify-center items-start flex-shrink-1 space-x-40">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">
              Our Store Location
            </h2>
            <p className="text-lg text-black">123 Fashion Avenue, Suite 101</p>
            <p className="text-lg text-black">Style City, ST 56789</p>
            <p className="text-lg text-black">
              Phone:{' '}
              <a href="tel:+1234567890" className="text-black">
                +1 (847) 676-2020
              </a>
            </p>
            <p className="text-lg text-black">
              Email:{' '}
              <a href="mailto:info@suits2020.com" className="text-black">
                info@suits2020.com
              </a>
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">
              Store Hours
            </h2>
            <p className="text-lg text-black">
              Monday - Friday: 11:00 AM - 7:00 PM
            </p>
            <p className="text-lg text-black">
              Sunday - Sunday: 10:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Find Us on the Map</h2>
        <div className="w-full h-96">
          <iframe
            className="w-full h-full border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.8438182346586!2d-87.81225558459422!3d42.01592507921062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbfa042c1fd67%3A0xeeb7e60e0a22c151!2s7651%20N%20Caldwell%20Ave%2C%20Niles%2C%20IL%2060714!5e0!3m2!1sen!2sus!4v1673456789012!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-8 text-center">
        <h2 className="text-2xl font-bold">Ready to Visit Us?</h2>
        <a
          href="https://maps.google.com?q=123+Fashion+Avenue"
          className="mt-4 inline-block bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200"
        >
          Get Directions
        </a>
      </section>
    </div>
  );
};

export default LocationPage;
