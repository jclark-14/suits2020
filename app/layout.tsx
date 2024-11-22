import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://suits2020.com'),
  title: {
    template: '%s | Suits 20/20',
    default: 'Suits 20/20 | Elegant Formal Wear',
  },
  description: "Explore Suits 20/20's premium collection of formal attire.",
  keywords: 'formal wear, suits, tailoring, fashion consulting',
  openGraph: {
    type: 'website',
    siteName: 'Suits 20/20',
    title: {
      template: '%s | Suits 20/20',
      default: 'Suits 20/20 | Elegant Formal Wear',
    },
    description:
      'Discover timeless formal wear for men and boys at Suits 20/20.',
    url: 'https://suits2020.com',
    images: [
      {
        url: '/images/social-preview.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suits 20/20 | Elegant Formal Wear',
    description: 'Discover timeless formal wear for men and boys.',
    images: ['/images/social-preview.jpg'],
  },
};

const baseSchema = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Suits 20/20',
  url: 'https://suits2020.com',
  logo: 'https://suits2020.com/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7651 N Caldwell Ave',
    addressLocality: 'Niles',
    addressRegion: 'IL',
    postalCode: '60714',
    addressCountry: 'US',
  },
  telephone: '+1-847-676-2020',
  sameAs: [
    'https://www.instagram.com/suits2020chicago/',
    'https://www.facebook.com/suits2020chicago',
    'https://www.tiktok.com/@suits2020chicago?lang=en',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
        <link rel="canonical" href="https://suits2020.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(baseSchema),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-black lg:bg-white">
        <Header />
        <main role="main" className="flex-grow ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
