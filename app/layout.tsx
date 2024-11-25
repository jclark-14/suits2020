import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Metadata } from 'next';
import { defaultMetadata } from '@/metadata.config';
import Head from 'next/head';

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
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9RKB9096ED"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9RKB9096ED', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <link rel="canonical" href={metadata.metadataBase?.toString()} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
