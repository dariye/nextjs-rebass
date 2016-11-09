import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default class AppShell extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(children) {
    return (
      <app-shell>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta id="theme-color" name="theme-color" content="#4527A0" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="icon" href="static/chrome-touch-icon-192x192.png" sizes="192x192" type="image/png" />
        </Head>
        <h2> header </h2>
        <Link href="/about-us"> About Us </Link>
        <Link href="/contact-us"> Contact Us </Link>
        <main>
          { children }
        </main>
        <h2> footer </h2>
      </app-shell>
    );
  }
}
