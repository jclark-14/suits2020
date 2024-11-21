'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionMessage, setSubmissionMessage] = React.useState<
    string | null
  >(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      services: [] as string[],
      favoriteColor: '', // Honeypot field
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      services: Yup.array().min(1, 'Select at least one service'),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (values.favoriteColor) {
        console.log('Bot detected');
        return;
      }

      setIsSubmitting(true);
      setSubmissionMessage(null);

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            name: values.name,
            email: values.email,
            message: values.message,
            services: values.services.join(', '),
          }
        );
        setSubmissionMessage('Thank you! Your message has been submitted.');
        resetForm();
      } catch (error) {
        console.error('Error sending message:', error);
        setSubmissionMessage('Oops! Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-6 bg-stone-50 p-6 rounded-lg shadow-md max-w-lg mx-auto"
      aria-label="Contact form"
      role="form"
      noValidate
    >
      <div role="group" aria-labelledby="personal-info" className="space-y-4">
        <span id="personal-info" className="sr-only">
          Personal Information
        </span>

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="block w-full text-lg p-2 border border-gray-300 rounded-md shadow-sm focus:ring-footerBrown focus:border-footerBrown"
            aria-required="true"
            aria-invalid={formik.touched.name && !!formik.errors.name}
            aria-describedby={formik.errors.name ? 'name-error' : undefined}
          />
          {formik.touched.name && formik.errors.name && (
            <div id="name-error" className="text-red-500 text-sm" role="alert">
              {formik.errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="block w-full text-lg p-2 border border-gray-300 rounded-md shadow-sm focus:ring-footerBrown focus:border-footerBrown"
            aria-required="true"
            aria-invalid={formik.touched.email && !!formik.errors.email}
            aria-describedby={formik.errors.email ? 'email-error' : undefined}
          />
          {formik.touched.email && formik.errors.email && (
            <div id="email-error" className="text-red-500 text-sm" role="alert">
              {formik.errors.email}
            </div>
          )}
        </div>
      </div>

      {/* Services field */}
      <div role="group" aria-labelledby="services-label">
        <span
          id="services-label"
          className="block text-lg font-semibold text-gray-700"
        >
          Services <span className="text-red-500">*</span>
        </span>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {[
            'Tailoring & Alterations',
            'Groups',
            'Fashion Consultation',
            'Prom',
            'Weddings',
            'Other',
          ].map(service => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                id={service}
                name="services"
                value={service}
                onChange={formik.handleChange}
                checked={formik.values.services.includes(service)}
                className="h-4 w-4 text-footerBrown border-gray-300 rounded focus:ring-footerBrown focus:ring-1"
                aria-label={service}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    formik.setFieldValue(
                      'services',
                      formik.values.services.includes(service)
                        ? formik.values.services.filter(s => s !== service)
                        : [...formik.values.services, service]
                    );
                  }
                }}
              />
              <label
                htmlFor={service}
                className="ml-2 text-base sm:text-lg font-medium text-gray-700"
              >
                {service}
              </label>
            </div>
          ))}
        </div>
        {formik.touched.services && formik.errors.services && (
          <div className="text-red-500 text-sm" role="alert">
            {formik.errors.services}
          </div>
        )}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="block text-lg font-semibold text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="mt-1 block text-lg w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-footerBrown focus:border-footerBrown"
          aria-label="Message"
        />
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="favoriteColor"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-lg bg-footerBrown text-white font-medium p-2 rounded-md border-2 border-transparent shadow hover:bg-white hover:text-footerBrown hover:border-2 hover:border-footerBrown focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 transition-all duration-300"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {submissionMessage && (
        <p
          className="mt-4 text-center text-lg font-medium text-stone-800"
          role="status"
        >
          {submissionMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
