import React from 'react';
import Link from 'next/link';
import { style } from 'next/css';
import Head from 'next/head';
import { PageHeader } from 'rebass';
import App from '../containers/App.js';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title> Index </title>
        </Head>
        <div>
          <PageHeader
            heading="Index Page"
            description="I am an index page"
          />
        </div>
      </div>
    );
  }

}

export default App(IndexPage);
