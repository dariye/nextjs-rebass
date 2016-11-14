import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { PageHeader } from 'rebass';
import App from '../containers/App.js';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title> Contact Us </title>
        </Head>
        <PageHeader 
          heading="Contact Page"
          description="Call me ...maybe"
        />
      </div>
    );
  }

};

export default App(ContactPage);
