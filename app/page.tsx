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
    canonical: 'https://www.suits2020.com',
  },
  description:
    "Chicago's premier destination for men's and boy's formal wear. Expert tailoring, designer brands, and personalized fashion consultation at Suits 20/20.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: defaultMetadata.title.default,
    description:
      "Chicago's leading men's and boy's formal wear store. Discover designer brands, expert tailoring, and personalized fashion consultation at Suits 20/20.",
    url: 'https://www.suits2020.com',
  },
};

// Home Page Schema
const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Suits 20/20 - Premier Men's Formal Wear Store",
  image: 'https://www.suits2020.com/home/suits-logo-social-preview.png',
  url: 'https://www.suits2020.com',
  description:
    "Chicago's premier destination for men's and boy's formal wear, offering expert tailoring, designer brands, and personalized fashion consultation.",
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.suits2020.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.suits2020.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Brands',
        item: 'https://www.suits2020.com/brands',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Location',
        item: 'https://www.suits2020.com/location',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://www.suits2020.com/contact',
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Suits 20/20',
    url: 'https://www.suits2020.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.suits2020.com/home/suits-logo-social-preview.png',
      width: 600,
      height: 60,
    },
    sameAs: [
      'https://www.facebook.com/suits2020',
      'https://www.instagram.com/suits2020',
      'https://www.tiktok.com/@suits2020chicago?lang=en',
    ],
  },
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Suits 20/20',
    url: 'https://www.suits2020.com',
    description:
      'Expert tailoring, designer brands, and personalized fashion consultation for men and boys.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7651 N Caldwell Ave',
      addressLocality: 'Niles',
      addressRegion: 'IL',
      postalCode: '60714',
      addressCountry: 'US',
    },
    telephone: '+1-847-676-2020',
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '11:00',
        closes: '17:00',
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Expert Tailoring Services',
          description: 'Professional suit alterations and custom tailoring.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fashion Consultation',
          description: 'Personalized style guidance for every occasion.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Formal Wear Fitting',
          description:
            'Expert fittings to ensure the perfect fit for any event.',
        },
      },
    ],
    sameAs: [
      'https://www.facebook.com/suits2020',
      'https://www.instagram.com/suits2020',
      'https://www.tiktok.com/@suits2020chicago?lang=en',
    ],
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
        subtitle="Experience our personalized service and browse our wide selection of men's and boy's fashion."
        href="/location"
        label="Find Our Location"
        ariaLabel="Find our store location and visit us for personalized service"
      />
    </>
  );
}
