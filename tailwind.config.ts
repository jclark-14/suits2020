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
        // Primary colors
        primary: {
          DEFAULT: '#1C3879', // Deep navy blue - good for main actions and headers
          light: '#3B5BA5',
          dark: '#102048',
        },
        // Secondary colors
        secondary: {
          DEFAULT: '#8B7355', // Warm brown - good for accents
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
      },
      fontFamily: {
        // Classic, professional fonts
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Nunito', 'ui-serif', 'Georgia'],
        // Special font for logos and headings
        display: ['Josefin_Sans', 'sans-serif'],
      },
      fontSize: {
        // Custom size scale
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      spacing: {
        // Custom spacing scale
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        // Custom border radius
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        // Custom shadows
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        card: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
