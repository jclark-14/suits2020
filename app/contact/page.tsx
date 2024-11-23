import { Metadata } from 'next';
import Hero from '@/components/layout/Hero';
import ContactForm from '@/components/layout/ContactForm';
import { defaultMetadata, globalSchema } from '@/metadata.config';

// Page-Specific Metadata
export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: 'Contact Us | Suits 20/20',
    template: '%s | Suits 20/20',
  },
  alternates: {
    canonical: '/contact',
  },
  description:
    "Contact Suits 20/20 for expert tailoring services, fashion consultation, or general inquiries. We're here to help you look your best.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Contact Us | Suits 20/20',
    description:
      'Reach out to Suits 20/20 for tailoring services, fashion consultation, and style guidance. Get in touch with our expert team today.',
    url: '/contact',
  },
};

// Page-Specific Schema
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Suits 20/20',
  description: 'Contact page for Suits 20/20 tailoring and fashion services',
  url: '/contact',
  mainEntity: {
    '@type': 'ContactPoint',
    telephone: '+1-847-676-2020',
    email: 'info@suits2020.com',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'US',
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([globalSchema, contactSchema]),
        }}
      />

      <div>
        <h1 className="sr-only">Contact Suits 2020</h1>
        <Hero
          title="Contact Us"
          subtitle="We'd love to hear from you! Reach out with any questions or inquiries."
          imagePath="/images/contact/contact-hero.png"
          imageAlt="Suits 2020 Tailoring Shop Interior"
          height="large"
          className="object-top object-cover"
          overlayOpacity={20}
        />
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
