import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { PageHeader } from 'rebass';
import App from '../containers/App.js';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title> About Us </title>
        </Head>
        <PageHeader
          heading="About Page"
          description="I'll tell you about myself"
        />
      </div>
    );
  }

};

export default App(AboutPage);


