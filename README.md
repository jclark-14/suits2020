# Suits 20/20 - Client Website

Premium men's fashion website showcasing designer brands, expert tailoring services, and store information.

## Overview

Suits 20/20 offers expert tailoring services, premium designer brands, and personalized fashion consulting in Niles, IL. Our website provides a seamless experience for customers to explore our services, brands, and location details.

## Features

- Designer brand showcase (Hugo Boss, Michael Kors, Ted Baker, etc.)
- Expert tailoring and alteration services
- Store location with interactive map
- Contact form with EmailJS integration
- Responsive, mobile-first design
- SEO and accessibility optimized

## Technologies

- **Framework:** Next.js 15
- **Styling:** TailwindCSS
- **Forms:** Formik + Yup
- **Email:** EmailJS
- **Images:** MidJourney AI, Next/Image
- **SEO:** Schema.org, OpenGraph

## Pages

- **Home:** Service overview and style offerings
- **Services:** Tailoring and design services
- **Brands:** Premium designer brand showcase
- **Location:** Store details and interactive map
- **Contact:** ARIA-compliant form with live validation

## Setup

### Prerequisites
- Node.js v16+
- PNPM
- EmailJS account

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/suits2020.git

# Install dependencies
cd suits2020
pnpm install

# Configure environment variables
# Create .env.local with:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Start development server
pnpm dev
