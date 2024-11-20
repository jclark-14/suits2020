import React from 'react';
import Hero from '@/components/layout/Hero';
import ContactForm from '@/components/forms/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <main>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you! Reach out with any questions or inquiries."
        imagePath="/images/contact/contact-hero.png"
        imageAlt="Contact Hero Image"
        height="large"
        className="object-top object-cover"
        overlayOpacity={20}
      />
      <section className="container bg-white mx-auto py-16 sm:pt-24 sm:pb-20 px-6 max-w-7xl">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-black sm:mb-12">
          Get In Touch
        </h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
