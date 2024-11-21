import { Metadata } from 'next';
import Hero from '@/components/layout/Hero';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Suits 2020',
  description:
    'Contact Suits 2020 for expert tailoring services, fashion consultation, alterations, and formalwear. Based in [location], serving [area].',
  openGraph: {
    title: 'Contact Suits 2020 - Tailoring & Alterations',
    description:
      'Get in touch with our expert tailors for alterations, fashion consultation, and formalwear services.',
    type: 'website',
    url: 'https://suits2020.com/contact',
    images: [
      {
        url: '/images/contact/contact-hero.png',
        width: 1200,
        height: 630,
        alt: 'Suits 2020 Tailoring Shop Interior',
      },
    ],
  },
  alternates: {
    canonical: 'https://suits2020.com/contact',
  },
  keywords: 'tailoring, alterations, fashion consultation, formalwear, contact',
  robots: 'index, follow',
};

const ContactPage = () => {
  return (
    <main>
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
    </main>
  );
};

export default ContactPage;
