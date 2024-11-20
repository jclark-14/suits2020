import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Suits 20/20',
  description: `Built with Next.js to showcase the elegance of Suits 20/20's formal attire collection.`,
  metadataBase: new URL('https://suits2020.com'),
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zkz8svf.css" />
      </head>
      <body className="flex flex-col min-h-screen bg-black lg:bg-white ">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
