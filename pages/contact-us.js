import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppShell from '../containers/AppShell.js';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title> Andela - About Us </title>
        </Head>
        <h1>Contact Us</h1>
      </div>
    );
  }

};

export default AppShell(ContactPage);
