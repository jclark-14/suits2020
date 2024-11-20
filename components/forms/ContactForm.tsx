import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      comment: '',
      services: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      comment: Yup.string().required('Comment is required'),
      services: Yup.array().min(1, 'Select at least one service'),
    }),
    onSubmit: (values, { resetForm }) => {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error('Missing EmailJS environment variables');
      }
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            comment: values.comment,
            services: values.services.join(', '),
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            alert('Message sent successfully!');
            resetForm();
          },
          () => {
            alert('Failed to send the message. Please try again later.');
          }
        );
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto"
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}
      </div>

      {/* Comment Field */}
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formik.touched.comment && formik.errors.comment && (
          <div className="text-red-500 text-sm">{formik.errors.comment}</div>
        )}
      </div>

      {/* Services Checkbox */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Services
        </label>
        <div className="space-y-2 mt-2">
          {['Tailoring', 'Design Consultation', 'Other'].map(service => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                id={service}
                name="services"
                value={service}
                onChange={formik.handleChange}
                checked={formik.values.services.includes(service)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor={service} className="ml-2 text-sm text-gray-700">
                {service}
              </label>
            </div>
          ))}
        </div>
        {formik.touched.services && formik.errors.services && (
          <div className="text-red-500 text-sm">{formik.errors.services}</div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
