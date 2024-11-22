import { Metadata } from 'next';
import FormalCasualGrid from '../components/FormalCasualGrid/FormalCasualGrid';
import HeroCarousel from '@/components/layout/HeroCarousel';
import CallToAction from '@/components/layout/CallToAction';

export const metadata: Metadata = {
  title: 'Suits 20/20 | Elegant Formal & Casual Wear for Men & Boys',
  description:
    "Discover Suits 20/20's wide range of formal and casual wear. Personalized service and expert consultants to help you find the perfect look for any occasion.",
  keywords:
    "formal wear, casual wear, men's fashion, boys' fashion, suits, personalized fashion consulting, Niles IL",
  openGraph: {
    title: 'Suits 20/20 | Elegant Formal & Casual Wear',
    description:
      'Explore premium formal and casual wear for men and boys at Suits 20/20. Visit us for personalized service and expert fashion advice.',
    images: [{ url: '/images/home/home-hero.jpg' }],
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Suits 20/20 - Premium Formal and Casual Wear',
  description: 'Premium formal and casual wear for men and boys',
  url: 'https://suits2020.com',
  image: 'https://suits2020.com/images/home/home-hero.jpg',
  mainEntity: {
    '@type': 'ClothingStore',
    name: 'Suits 20/20',
    description: 'Premium formal and casual wear for men and boys',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Men's and Boy's Fashion Collection",
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Formal Wear',
          description: 'Premium suits and formal attire for all occasions',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Casual Wear',
          description: 'Stylish casual clothing and accessories',
        },
        {
          '@type': 'OfferCatalog',
          name: "Boy's Collection",
          description: "Premium boys' formal and casual wear",
        },
      ],
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />

      <HeroCarousel />
      <FormalCasualGrid />

      <CallToAction
        title="Come Visit Us in Person"
        subtitle="Experience our personalized service and browse our wide selection of men's and boy's fashion. Our expert consultants are ready to help you find the perfect look."
        href="/location"
        label="Find Our Location"
        ariaLabel="Find our store location and visit us for personalized service"
      />
    </>
  );
}
