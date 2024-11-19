import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const LocationPage: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suits 20/20',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7651 N Caldwell Ave',
      addressLocality: 'Niles',
      addressRegion: 'IL',
      postalCode: '60714',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '42.015925',
      longitude: '-87.812256',
    },
    openingHours: ['Mo-Fr 11:00-19:00', 'Sa-Su 10:00-17:00'],
    telephone: '+1-847-676-2020',
    email: 'info@suits2020.com',
    url: 'https://suits2020.com/location',
    image: '/images/location/chicago-skyline.jpg',
  };

  return (
    <main>
      <Head>
        <title>
          Visit Suits 20/20 in Niles, IL | Men&apos;s & Boy&apos;s Fashion Store
        </title>
        <meta
          name="description"
          content="Visit Suits 20/20, conveniently located in Niles, IL, serving the greater Chicago area for all your custom tailoring and fashion needs. Open 7 days a week."
        />
        <meta
          name="keywords"
          content="suits store Niles, men's fashion Illinois, custom tailoring Chicago suburbs, Suits 20/20 location"
        />
        <script
          type="application/ld-json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[275px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full overflow-hidden bg-gray-800">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/location/chicago-skyline.jpg"
              alt="Chicago skyline backdrop"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4 pt-20 sm:pt-44">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold m-0">
              VISIT US TODAY
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-normal tracking-wide m-0 mt-4">
              Expert fashion advice and custom tailoring at our convenient
              location.
            </h3>
          </div>
        </section>

        {/* Address and Contact Information */}
        <section
          className="container mx-auto py-8 sm:py-10 md:pt-20 md:pb-10 lg:pt-20 lg:pb-10 px-8 sm:px-6 max-w-4xl"
          aria-label="Store contact information"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col space-y-2 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-black sm:mb-4 mt-4 sm:mt-0">
                Our Store Location
              </h2>
              <address className="not-italic leading-none">
                <p className="text-base sm:text-lg text-black leading-none">
                  7651 N Caldwell Ave
                </p>
                <p className="text-base sm:text-lg text-black leading-none">
                  Niles, IL 60714
                </p>
                <p className="text-base sm:text-lg text-black leading-none">
                  Phone:{' '}
                  <a
                    href="tel:+18476762020"
                    className="text-black hover:text-gray-600 transition-colors duration-200 leading-none"
                    aria-label="Call our store"
                  >
                    +1 (847) 676-2020
                  </a>
                </p>
                <p className="text-base sm:text-lg text-black">
                  Email:{' '}
                  <a
                    href="mailto:info@suits2020.com"
                    className="text-black hover:text-gray-600 transition-colors duration-200"
                    aria-label="Email our store"
                  >
                    info@suits2020.com
                  </a>
                </p>
              </address>
            </div>
            <div
              className="flex flex-col space-y-2 mt-6 sm:mt-0 text-center sm:text-left"
              aria-label="Store hours"
            >
              <h2 className="text-xl sm:text-2xl font-bold sm:mb-4 text-black">
                Store Hours
              </h2>
              <p className="text-base sm:text-lg text-black">
                Monday - Friday: 11:00 AM - 7:00 PM
              </p>
              <p className="text-base sm:text-lg text-black">
                Saturday - Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto py-4 px-6 max-w-2xl md:max-w-3xl lg:max-w-5xl">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Our Location on the Map
          </h2>
          <div className="w-full h-96 sm:h-128">
            <iframe
              title="Suits 20/20 store location map"
              className="w-full h-full border rounded-md shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.8438182346586!2d-87.81225558459422!3d42.01592507921062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbfa042c1fd67%3A0xeeb7e60e0a22c151!2s7651%20N%20Caldwell%20Ave%2C%20Niles%2C%20IL%2060714!5e0!3m2!1sen!2sus!4v1673456789012!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="pt-4 pb-10 sm:pt-10 sm:pb-16 text-center"
          aria-label="Get directions"
        >
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
            aria-label="Get directions to our store"
          >
            Get Directions
          </Link>
        </section>
      </div>
    </main>
  );
};

export default LocationPage;
