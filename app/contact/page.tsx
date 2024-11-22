import { Metadata } from 'next';
import Hero from '@/components/layout/Hero';
import ContactForm from '@/components/layout/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Suits 2020 | Expert Tailoring & Formalwear',
  description:
    'Reach out to Suits 2020 for expert tailoring services, alterations, fashion consultations, and premium formalwear. Located in Niles, IL, serving the greater Chicago area.',
  keywords:
    'tailoring, alterations, fashion consultation, formalwear, contact Suits 2020, Niles IL, Chicago tailoring services',
  openGraph: {
    title: 'Contact Suits 2020 | Expert Tailoring & Formalwear',
    description:
      'Get in touch with Suits 2020 for premium tailoring, fashion consultation, and alterations. Located in Niles, IL.',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Suits 2020',
  description: 'Contact page for Suits 2020 tailoring and formalwear services',
  url: 'https://suits2020.com/contact',
  mainEntity: {
    '@type': 'WebForm',
    name: 'Contact Form',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://suits2020.com/contact',
      inLanguage: 'en-US',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    description:
      'Contact form for inquiries about tailoring services, alterations, and fashion consultations',
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
