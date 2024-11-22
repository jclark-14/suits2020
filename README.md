# Suits 20/20 - Client Website

Premium men's fashion website showcasing designer brands, expert tailoring services, and store information.

## Overview

Suits 20/20 offers expert tailoring services, premium designer brands, and personalized fashion consulting in Niles, IL. Our website provides a seamless experience for customers to explore our services, brands, and location details.

## Features

- Designer Brands Showcase: Highlighting premium brands like Hugo Boss, Michael Kors, Ted Baker, and more.
- Expert Tailoring Services: Comprehensive tailoring and alteration options.
- Store Location: Includes an interactive map for easy navigation.
- Contact Form: Integrated with EmailJS for message submission.
- Responsive Design: Mobile-first, ensuring great UX across all devices.
- SEO & Accessibility Optimized: Includes Schema.org markup and ARIA-compliant features.

## Technologies

- **Framework:** Next.js 15
- **Styling:** TailwindCSS
- **Forms:** Formik + Yup for validation
- **Email Integration:** EmailJS
- **Images:** MidJourney AI-generated images and Next/Image optimization
- **SEO:** Schema.org, OpenGraph, and meta tags for enhanced search visibility

## Pages

- **Landing Page:** Service overview and style offerings
- **Services:** Tailoring and design services
- **Brands:** Premium designer brand showcase
- **Location:** Store details and interactive map
- **Contact:** ARIA-compliant form with live validation

## Getting Started

### Prerequisites
To work on this project, ensure the following tools are installed on your system:
- Node.js v16+
- PNPM: A faster, disk-efficient package manage
- EmailJS Account: For configuring the contact form email integration

### Installation

```bash
# Clone repository
git clone https://github.com/jclark-14/suits2020.git

# Install dependencies
cd suits2020
pnpm install

# Configure environment variables
# Create .env with:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Start development server
pnpm dev
```
This will install all required dependencies, including next, formik, yup, and emailjs.
Open http://localhost:3000 to view the app in the browser.

## Deployment
-The site is deployed on Vercel. To deploy updates, push changes to the main branch, and Vercel will automatically redeploy.

### Screenshots

## Home Page

![Landing Page Screenshot1](.github/screenshots/landingpage.png)

![Landing Page Screenshot2](.github/screenshots/landingpage2.png)


- **Gif**
  ![Landing Page Gif](.github/gif.gif)

## Services Page

![Services Screenshot1](.github/screenshots/services.png)


## Designer Brands Page

![Brands Screenshot1](.github/screenshots/brands.png)


## Location Page

![Location Screenshot1](.github/screenshots/location.png)


## Contact Page

![Contact Screenshot1](.github/screenshots/contact.png)


Thank you for visiting Suits 20/20! If you have any questions or suggestions, please feel free to reach out.

## Links

- [Visit Suits 20/20 Live](https://suits2020.com)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [EmailJS Integration Guide](https://www.emailjs.com/docs/)
