export const defaultMetadata = {
  metadataBase: new URL('https://suits2020.com'),
  title: {
    template: '%s | Suits 20/20',
    default: 'Suits 20/20 | Elegant Formal Wear',
  },
  description: "Explore Suits 20/20's premium collection of formal attire.",
  keywords: 'formal wear, suits, tailoring, fashion consulting',
  openGraph: {
    siteName: 'Suits 20/20',
    title: {
      template: '%s | Suits 20/20',
      default: 'Suits 20/20 | Elegant Formal Wear',
    },
    description:
      'Discover timeless formal wear for men and boys at Suits 20/20.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/home/home-hero.png',
        width: 1200,
        height: 630,
        alt: 'Suits 20/20 - Elegant Formal Wear',
      },
    ],
  },
};

export const globalSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ClothingStore'],
  name: 'Suits 20/20',
  url: 'https://suits2020.com',
  logo: 'https://suits2020.com/home/suits-logo-social-preview.png',
  image: [
    {
      '@type': 'ImageObject',
      url: 'https://suits2020.com/home/home-hero.png',
      width: 1200,
      height: 630,
      alternateName: 'Suits 20/20 - Elegant Formal Wear',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7651 N Caldwell Ave',
    addressLocality: 'Niles',
    addressRegion: 'IL',
    postalCode: '60714',
    addressCountry: 'US',
  },
  telephone: '+1-847-676-2020',
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
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/suits2020chicago/',
    'https://www.facebook.com/suits2020chicago',
    'https://www.tiktok.com/@suits2020chicago?lang=en',
  ],
};
