import { Metadata } from 'next';
import FormalCasualGrid from '../components/FormalCasualGrid/FormalCasualGrid';
import HeroCarousel from '@/components/layout/HeroCarousel';
import CallToAction from '@/components/layout/CallToAction';
import { defaultMetadata } from '@/metadata.config';

// Page-Specific Metadata
export const metadata: Metadata = {
  ...defaultMetadata,
  title: defaultMetadata.title.default,
  alternates: {
    canonical: 'https://suits2020.com',
  },
  description:
    "Chicago's premier destination for men's and boy's formal wear. Expert tailoring, designer brands, and personalized fashion consultation at Suits 20/20.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: defaultMetadata.title.default,
    description:
      "Chicago's leading men's and boy's formal wear store. Discover designer brands, expert tailoring, and personalized fashion consultation at Suits 20/20.",
    url: 'https://suits2020.com',
  },
};

// Home Page Schema
const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Suits 20/20 - Premier Men's Formal Wear Store",
  description:
    "Chicago's premier destination for men's and boy's formal wear, offering expert tailoring and designer brands.",
  url: 'https://suits2020.com',
  mainContentOfPage: {
    '@type': 'WebPageElement',
    offers: {
      '@type': 'AggregateOffer',
      itemOffered: [
        {
          '@type': 'Service',
          name: 'Expert Tailoring Services',
        },
        {
          '@type': 'Service',
          name: 'Fashion Consultation',
        },
        {
          '@type': 'Thing',
          name: 'Designer Brand Collection',
        },
        {
          '@type': 'Service',
          name: 'Formal Wear Fitting',
        },
      ],
    },
  },
  specialty: "Men's and Boy's Formal Wear",
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
        subtitle="Experience our personalized service and browse our wide selection of men's and boy's fashion."
        href="/location"
        label="Find Our Location"
        ariaLabel="Find our store location and visit us for personalized service"
      />
    </>
  );
}
