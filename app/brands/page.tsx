import { Metadata } from 'next';
import Image from 'next/image';
import CallToAction from '@/components/layout/CallToAction';
import Hero from '@/components/layout/Hero';

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

export const metadata: Metadata = {
  title: "Top Designer Brands | Men's Fashion & Style",
  description:
    "Discover the finest designer brands at Suits 20/20. From Hugo Boss to Michael Kors, explore premium men's fashion and accessories for every occasion.",
  keywords:
    "designer brands, men's fashion, Hugo Boss, Calvin Klein, Cole Haan, Ted Baker, Michael Kors, premium suits, Suits 20/20",
  openGraph: {
    title: "Top Designer Brands | Men's Fashion & Style",
    description:
      'Explore a wide range of premium designer brands like Hugo Boss and Calvin Klein at Suits 20/20. Perfect suits for any occasion.',
    images: [{ url: '/images/brands/hero-brands.png' }],
  },
};

const brandsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Designer Brands at Suits 20/20',
  description: "Premium men's fashion and designer brands",
  url: 'https://suits2020.com/brands',
  image: 'https://suits2020.com/images/brands/hero-brands.png',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: brands.map((brand, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Brand',
        name: brand.name,
        logo: `https://suits2020.com${brand.logo}`,
      },
    })),
  },
};

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandsSchema),
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
