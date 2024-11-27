import { Metadata } from 'next';
import Hero from '@/components/layout/Hero';
import ContactForm from '@/components/layout/ContactForm';
import { defaultMetadata } from '@/metadata.config';

// Page-Specific Metadata
export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: 'Contact Us | Suits 20/20',
    template: '%s | Suits 20/20',
  },
  alternates: {
    canonical: 'https://www.suits2020.com/contact',
  },
  description:
    "Contact Suits 20/20 for expert tailoring services, fashion consultation, or general inquiries. We're here to help you look your best.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Contact Us',
    description:
      'Reach out to Suits 20/20 for tailoring services, fashion consultation, and style guidance. Get in touch with our expert team today.',
    url: 'https://www.suits2020.com/contact',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Contact Suits 20/20',
  image: 'https://www.suits2020.com/home/suits-logo-social-preview.png',
  '@id': 'https://www.suits2020.com/contact',
  description: 'Contact page for Suits 20/20 tailoring and fashion services',
  url: 'https://www.suits2020.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Suits 20/20',
    telephone: '+1-847-676-2020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7651 N Caldwell Ave',
      addressLocality: 'Niles',
      addressRegion: 'IL',
      postalCode: '60714',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      name: 'Customer Service',
      telephone: '+1-847-676-2020',
      email: 'info@suits2020.com',
      contactType: 'customer service',
      availableLanguage: ['English'],
      areaServed: 'US',
    },
  },
  potentialAction: {
    '@type': 'CommunicateAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.suits2020.com/contact',
      name: 'Submit a Contact Form',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <div>
        <h2 className="sr-only">Contact Suits 20/20</h2>
        {/* Hero Section */}
        <Hero
          title="Contact Us"
          subtitle="We'd love to hear from you! Reach out with any questions or inquiries."
          imagePath="/images/contact/contact-hero.png"
          imageAlt="Suits 2020 Tailoring Shop Interior"
          height="large"
          className="object-top object-cover"
          overlayOpacity={20}
        />

        {/* Contact Section */}
        <section
          className="container bg-white mx-auto pt-16 pb-20 sm:pt-24 sm:pb-20 px-6 max-w-7xl"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="text-center text-3xl sm:text-5xl font-bold text-black sm:mb-12"
          >
            Get In Touch
          </h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
