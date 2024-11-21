import React from 'react';
import Image from 'next/image';
import CallToAction from '@/components/layout/CallToAction';
import Hero from '@/components/layout/Hero';
import Head from 'next/head';

const BrandsPage: React.FC = () => {
  const brands = [
    { name: 'Hugo Boss', logo: '/images/brands/boss-hugo-boss.svg' },
    { name: 'Johnston & Murphy', logo: '/images/brands/johnston-murphy.svg' },
    { name: 'Calvin Klein', logo: '/images/brands/calvin-klein-logo.svg' },
    { name: 'Cole Haan', logo: '/images/brands/cole-haan.svg' },
    { name: 'Ted Baker', logo: '/images/brands/ted-baker.svg' },
    { name: 'Michael Kors', logo: '/images/brands/michael-kors.svg' },
    {
      name: 'Hart Schaffner Marx',
      logo: '/images/brands/hart-schaffner-marx.svg',
    },
    { name: 'Stacy Adams', logo: '/images/brands/stacy-adams-logo-vector.svg' },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Designer Brands | Men's Fashion | Suits 20/20</title>
        <meta
          name="description"
          content="Discover top designer brands in men's fashion at Suits 20/20. From Hugo Boss to Michael Kors, explore premium styles and find the perfect look for any occasion."
        />
        <meta
          name="keywords"
          content="men's fashion, designer brands, Hugo Boss, Calvin Klein, Cole Haan, Ted Baker, Michael Kors, Suits 20/20"
        />
        <meta property="og:title" content="Designer Brands | Men's Fashion" />
        <meta
          property="og:description"
          content="Explore a wide range of designer brands in men's fashion. Find everything from formal to casual styles at Suits 20/20."
        />
        <meta property="og:image" content="/images/brands/hero-brands.png" />
        <meta property="og:url" content="https://suits2020.com/brands" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.suits2020.com/designer-brands"
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ClothingStore',
            name: 'Suits 20/20',
            description: "Premium men's fashion and designer brands",
            brand: brands.map(brand => ({
              '@type': 'Brand',
              name: brand.name,
            })),
            address: {
              '@type': 'PostalAddress',
              streetAddress: '7651 N Caldwell Ave',
              addressLocality: 'Niles',
              addressRegion: 'IL',
              postalCode: '60714',
              addressCountry: 'US',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="DESIGNER BRANDS"
        subtitle="Discover the finest brands in men's fashion, all in one place."
        imagePath="/images/brands/hero-brands.png"
        imageAlt="Luxury men's fashion display showcasing designer suits and accessories"
        height="medium"
        overlayOpacity={25}
      />

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl bg-white">
        {/* Brands Section */}
        <section
          className="pt-20 px-6 sm:px-10 max-w-7xl"
          role="region"
          aria-labelledby="brands-heading"
        >
          <h1
            id="brands-heading"
            className="text-center text-4xl sm:text-5xl font-bold text-black mb-16"
          >
            Our Designer Brands
          </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
            role="list"
            aria-label="List of designer brands available at Suits 20/20"
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                role="listitem"
                className="flex items-center justify-center p-6 h-[215px] sm:h-[250px] bg-white border-[1px] border-footerBrown border-opacity-20 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105"
                aria-label={`Brand logo of ${brand.name}`}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} brand logo`}
                  width={200}
                  height={250}
                  objectFit="contain"
                  className="hover:brightness-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <CallToAction
          title="Discover Your Favorite Designer Brands"
          subtitle="Explore our collection of top designer brands in men's fashion. Find the perfect style that suits your personality. Visit us today."
          href="/location"
          label="Visit Our Store"
          ariaLabel="Visit our store to explore designer brands and collections"
        />
      </main>
    </>
  );
};

export default BrandsPage;
