import React from 'react';
import Image from 'next/image';
import CallToAction from '@/components/layout/CallToAction';
import Hero from '@/components/layout/Hero';

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
      <Hero
        title="DESIGNER BRANDS"
        subtitle="Discover the finest brands in men's fashion, all in one place."
        imagePath="/images/brands/hero-brands.png"
        imageAlt="Luxury men's fashion display"
        height="medium"
        overlayOpacity={25}
      />
      <main className="container mx-auto max-w-7xl bg-white">
        <section className="pt-20 px-6 sm:px-10 max-w-7xl">
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-16">
            Our Brands
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 h-[215px] sm:h-[250px] bg-white border-[1px] border-footerBrown border-opacity-20 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={200}
                  height={250}
                  objectFit="contain"
                  className="hover:brightness-110"
                />
              </div>
            ))}
          </div>
        </section>
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
