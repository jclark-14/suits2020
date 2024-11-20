import React from 'react';
import Head from 'next/head';
import Hero from '@/components/layout/Hero';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const ServicesPage: React.FC = () => {
  // Schema markup for services
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suits 20/20',
    description:
      "Expert tailoring and design services for men's and boy's fashion in Niles, IL",
    image: '/images/services/services-hero.png',
    url: 'https://www.suits2020.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7651 N Caldwell Ave',
      addressLocality: 'Niles',
      addressRegion: 'IL',
      postalCode: '60714',
      addressCountry: 'US',
    },
    telephone: '+1-847-676-2020',
    offers: [
      {
        '@type': 'Offer',
        name: 'In-Store Tailoring',
        description:
          'Professional tailoring services including measurements, alterations, and custom suit fitting',
      },
      {
        '@type': 'Offer',
        name: 'Design Consultation',
        description:
          'Personalized style guidance, premium fabric selection, and custom design options',
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Expert Tailoring & Design Services | Suits 20/20 | Niles, IL
        </title>
        <meta
          name="description"
          content="Professional tailoring services and design consultations at Suits 20/20. Expert alterations, custom suits, and personalized style guidance in Niles, IL."
        />
        <meta
          name="keywords"
          content="suit tailoring, custom suits, alterations, design consultation, men's fashion, Niles IL, Chicago suburbs"
        />
        <meta
          property="og:title"
          content="Expert Tailoring & Design Services | Suits 20/20"
        />
        <meta
          property="og:description"
          content="Professional tailoring services and design consultations. Expert alterations, custom suits, and personalized style guidance."
        />
        <meta
          property="og:image"
          content="/images/services/services-hero.png"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://suits2020.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main id="main-content" role="main">
        <Hero
          title="EXPERT TAILORING & DESIGN SERVICES"
          subtitle="Walk-in or schedule an appointment for our premium services."
          imagePath="/images/services/services-hero.png"
          imageAlt="Customer getting measured for a suit."
          height="large"
          overlayOpacity={35}
        />

        {/* Services Section */}
        <section
          className="container mx-auto py-16 sm:pt-32 sm:pb-20 px-6 max-w-7xl bg-white"
          role="region"
          aria-labelledby="services-heading"
        >
          {/* Introduction Text */}
          <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
            <h2
              id="services-heading"
              className="text-4xl sm:text-5xl font-bold text-black mb-6"
            >
              On-Site Services
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              Experience the perfect blend of traditional craftsmanship and
              modern style with our expert tailoring and design services.
            </p>
          </div>

          {/* Services Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20"
            role="list"
            aria-label="Our services"
          >
            {/* In-Store Tailoring Service */}
            <div role="listitem" className="flex flex-col space-y-10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/services/alterations.png"
                  alt="Tailor working on suit alterations"
                  className="object-cover rounded-xl shadow-lg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 px-6">
                <h3
                  id="tailoring-heading"
                  className="text-4xl font-bold text-black"
                >
                  In-Store Tailoring
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Get the perfect fit with our expert tailoring services. From
                  simple alterations to full suit customization, we ensure your
                  clothes fit perfectly.
                </p>
                <ul
                  className="text-gray-700 space-y-2 mt-4"
                  aria-label="Tailoring service features"
                  role="list"
                >
                  <li className="flex items-center" role="listitem">
                    <span className="mr-2" aria-hidden="true">
                      •
                    </span>
                    Professional measurements and fitting
                  </li>
                  <li className="flex items-center" role="listitem">
                    <span className="mr-2" aria-hidden="true">
                      •
                    </span>
                    Custom suit alterations
                  </li>
                  <li className="flex items-center" role="listitem">
                    <span className="mr-2" aria-hidden="true">
                      •
                    </span>
                    Quick turnaround times
                  </li>
                </ul>
              </div>
            </div>

            {/* Design Consultation Service */}
            <div role="listitem" className="flex flex-col space-y-10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/services/consultation.png"
                  alt="Style consultant discussing fabric options with a customer"
                  className="object-cover rounded-xl shadow-lg brightness-85"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 px-6">
                <h3
                  id="consultation-heading"
                  className="text-4xl font-bold text-black"
                >
                  Design Consultation
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Work with our expert consultants to create a personalized
                  style that matches your taste and needs. We help with fabric
                  selection, design, and fit.
                </p>
                <ul
                  className="text-gray-700 space-y-2 mt-4"
                  aria-label="Design consultation features"
                  role="list"
                >
                  <li className="flex items-center" role="listitem">
                    <span className="mr-2" aria-hidden="true">
                      •
                    </span>
                    Personalized style guidance
                  </li>
                  <li className="flex items-center" role="listitem">
                    <span className="mr-2" aria-hidden="true">
                      •
                    </span>
                    Premium fabric selection
                  </li>
                  <li className="flex items-center" role="listitem">
                    <span className="mr-2" aria-hidden="true">
                      •
                    </span>
                    Custom design options
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="mt-20 sm:mt-32 text-center"
            aria-labelledby="cta-heading"
          >
            <div className="max-w-2xl mx-auto  sm:space-y-8">
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl font-bold  text-black"
              >
                Interested In Our Services?
              </h2>
              <p className="text-xl mb-6 sm:mb-0 text-gray-700">
                Schedule a consultation with our expert tailors and design
                consultants today.
              </p>
              <Button
                href="/contact"
                label="Schedule a Consultation"
                ariaLabel="Schedule a consultation for tailoring or design services"
                size="large"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
