import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Metadata } from 'next';
import { defaultMetadata } from '@/metadata.config';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
        <GoogleAnalytics />
        <link rel="canonical" href={metadata.metadataBase?.toString()} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen bg-black lg:bg-white">
        <Header />
        <main role="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
