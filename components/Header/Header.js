import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link href="/about-us"> About Us </Link>
        <Link href="/contact-us"> Contact Us </Link>
      </header>
    ); 
  }
};
