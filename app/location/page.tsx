import { Metadata } from 'next';
import Hero from '@/components/layout/Hero';
import CallToAction from '@/components/layout/CallToAction';
import { defaultMetadata, globalSchema } from '@/metadata.config';

// Page-Specific Metadata
export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: 'Visit Our Store | Suits 20/20',
    template: '%s | Suits 20/20',
  },
  alternates: {
    canonical: 'https://suits2020.com/location',
  },
  description:
    'Visit Suits 20/20 in Niles, IL. Expert tailoring and fashion consultation services available at our convenient location.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Visit Our Store',
    description:
      'Visit Suits 20/20 in Niles, IL. Expert tailoring and fashion consultation services at our convenient location.',
    url: 'https://suits2020.com/location',
  },
};

// Page-Specific Schema
const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Suits 20/20',
  image: 'https://suits2020.com/home/suits-logo-social-preview.png',
  '@id': 'https://suits2020.com/location',
  url: 'https://suits2020.com/location',
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
    latitude: 42.015925,
    longitude: -87.812256,
  },
};

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([locationSchema]),
        }}
      />
      <div className="bg-white">
        <Hero
          title="VISIT US TODAY"
          subtitle="Expert fashion advice and custom tailoring at our convenient location."
          imagePath="/images/location/location-hero.png"
          imageAlt="Chicago skyline backdrop"
          overlayOpacity={30}
          height="large"
        />

        {/* Address and Contact Information */}
        <section
          className="container mx-auto py-8 sm:py-10 md:pt-24 md:pb-14 px-8 sm:px-6 max-w-4xl"
          aria-label="Store contact and operating information"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between">
            {/* Store Address */}
            <div className="flex flex-col space-y-2 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-black sm:mb-4 mt-4 sm:mt-0">
                Our Store Location
              </h2>
              <address className="not-italic leading-none">
                <p className="text-lg sm:text-xl text-black">
                  7651 N Caldwell Ave
                </p>
                <p className="text-lg sm:text-xl text-black">Niles, IL 60714</p>
                <p className="text-lg sm:text-xl text-black">
                  Phone:{' '}
                  <a
                    href="tel:+18476762020"
                    className="text-black hover:text-gray-600 transition-colors duration-200"
                    aria-label="Call Suits 20/20 at +1-847-676-2020"
                  >
                    +1 (847) 676-2020
                  </a>
                </p>
                <p className="text-lg sm:text-xl text-black">
                  Email:{' '}
                  <a
                    href="mailto:info@suits2020.com"
                    className="text-black hover:text-gray-600 transition-colors duration-200"
                    aria-label="Email Suits 20/20 at info@suits2020.com"
                  >
                    info@suits2020.com
                  </a>
                </p>
              </address>
            </div>

            {/* Store Hours */}
            <div
              className="flex flex-col space-y-2 mt-6 sm:mt-0 text-center sm:text-left"
              aria-label="Store hours"
            >
              <h2 className="text-2xl sm:text-3xl font-bold sm:mb-4 text-black">
                Store Hours
              </h2>
              <p className="text-lg sm:text-xl text-black">
                Monday - Friday: 11:00 AM - 7:00 PM
              </p>
              <p className="text-lg sm:text-xl text-black">
                Saturday - Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto py-4 px-6 max-w-2xl md:max-w-3xl lg:max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-10 text-center">
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
        <CallToAction
          title="Ready to Visit Us?"
          subtitle="Get directions to our store and explore our collection of designer brands."
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            '7651 N Caldwell Ave, Niles, IL 60714'
          )}`}
          label="Get Directions"
          ariaLabel="Get directions to Suits 20/20 via Google Maps"
          isExternal={true}
        />
      </div>
    </>
  );
}
