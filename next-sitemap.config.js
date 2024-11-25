/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.suits2020.com',
  generateRobotsTxt: true,
  exclude: ['/not-found', '/icon.ico'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: (config, path) => ({
    loc: path,
    lastmod: new Date().toISOString(),
  }),
};
