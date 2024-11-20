import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'white',
          light: '#3B5BA5',
          dark: 'black',
        },
        secondary: {
          DEFAULT: '#8B7355', // Warm brown
          light: '#A68E6A',
          dark: '#6A563F',
        },
        // Neutral colors for text and backgrounds
        neutral: {
          50: '#FAFAFA', // Lightest - background
          100: '#F5F5F5', // Light gray - alternate background
          200: '#E5E5E5', // Light borders
          300: '#D4D4D4', // Medium gray
          400: '#A3A3A3', // Medium text
          500: '#737373', // Default text
          600: '#525252', // Dark text
          700: '#404040', // Darker text
          800: '#262626', // Almost black
          900: '#171717', // Black text
        },
        footerBrown: '#231f20',
      },
      fontFamily: {
        sans: ['"futura-pt"', 'Poppins', 'sans-serif'],
        serif: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['5rem', { lineHeight: '1' }],
        '9xl': ['6rem', { lineHeight: '1' }],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        card: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [aspectRatio, forms],
};
