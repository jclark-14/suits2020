import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.suits2020.com/sitemap.xml',
    host: 'https://www.suits2020.com',
  };
}
