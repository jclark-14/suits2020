'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-9RKB9096ED`}
        strategy="beforeInteractive"
      />
      <Script
        id="ga-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9RKB9096ED', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
