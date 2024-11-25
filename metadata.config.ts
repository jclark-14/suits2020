export const defaultMetadata = {
  metadataBase: new URL('https://www.suits2020.com'),
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
