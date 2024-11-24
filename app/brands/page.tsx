import { Metadata } from 'next';
import Image from 'next/image';
import CallToAction from '@/components/layout/CallToAction';
import Hero from '@/components/layout/Hero';
import { defaultMetadata, globalSchema } from '@/metadata.config';

// Page-Specific Metadata
export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: 'Designer Brands Collection | Suits 20/20',
    template: '%s | Suits 20/20',
  },
  alternates: {
    canonical: 'https://suits2020.com/brands',
  },
  description:
    'Discover premium designer brands including Hugo Boss, Calvin Klein, Tommy Hilfiger, and more at Suits 20/20. Shop our curated collection of luxury menswear.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Designer Brands Collection',
    description:
      'Explore our collection of premium designer brands including Hugo Boss, Calvin Klein, Tommy Hilfiger, and more.',
    url: 'https://suits2020.com/brands',
  },
};

const brands = [
  { name: 'Hugo Boss', logo: '/images/brands/boss-hugo-boss.svg' },
  { name: 'Johnston & Murphy', logo: '/images/brands/johnston-murphy.svg' },
  { name: 'Calvin Klein', logo: '/images/brands/calvin-klein-logo.svg' },
  { name: 'Tommy Hilfiger', logo: '/images/brands/tommy-hilfiger-1.svg' },
  { name: 'Cole Haan', logo: '/images/brands/cole-haan.svg' },
  { name: 'Ted Baker', logo: '/images/brands/ted-baker.svg' },
  { name: 'Michael Kors', logo: '/images/brands/michael-kors.svg' },
  {
    name: 'Hart Schaffner Marx',
    logo: '/images/brands/hart-schaffner-marx.svg',
  },
  { name: 'Cigar Couture', logo: '/images/brands/cigar.png' },
  { name: 'Stacy Adams', logo: '/images/brands/stacy-adams-logo-vector.svg' },
];

// Page-Specific Schema
const brandsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Suits 20/20 Designer Brands Collection',
  '@id': 'https://suits2020.com/brands',
  url: 'https://suits2020.com/brands',
  description: 'Premium designer menswear brands available at Suits 20/20',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7651 N Caldwell Ave',
    addressLocality: 'Niles',
    addressRegion: 'IL',
    postalCode: '60714',
    addressCountry: 'US',
  },
  brand: brands.map(brand => ({
    '@type': 'Brand',
    name: brand.name,
    logo: brand.logo,
  })),
  offers: {
    '@type': 'AggregateOffer',
    offerCount: brands.length,
    availability: 'https://schema.org/InStock',
  },
  department: {
    '@type': 'Department',
    name: "Men's Designer Fashion",
    description: 'Premium menswear from top designer brands',
  },
};

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([globalSchema, brandsSchema]),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="DESIGNER BRANDS"
        subtitle="Discover the finest brands in men's fashion, all in one place."
        imagePath="/images/brands/hero-brands.png"
        imageAlt="Luxury men's fashion display showcasing designer suits and accessories"
        height="large"
        overlayOpacity={30}
      />

      {/* Brands Section */}
      <section
        className=" pt-20 px-6 pb-2 sm:px-10 max-w-7xl mx-auto bg-white"
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
              aria-label={`Brand logo of ${brand.name}, available at Suits 20/20`}
            >
              <Image
                src={brand.logo}
                alt={`Logo of ${brand.name}, a premium designer brand in men's fashion`}
                width={200}
                height={250}
                objectFit="contain"
                className="hover:brightness-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Discover Top Designer Brands"
        subtitle="From Hugo Boss to Michael Kors, find the perfect style in our premium designer collections."
        href="/location"
        label="Visit Our Store"
        ariaLabel="Visit Suits 20/20's location to explore top designer brands"
      />
    </>
  );
}
