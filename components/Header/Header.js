import React from 'react';
import Link from 'next/link';
import { style } from 'next/css';
import { NavItem, Toolbar, Space } from 'rebass';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Toolbar
        className={style(styles.toolbar)} 
      >
        <NavItem is="a" href="/" className={style(styles.logo)}>
          nextjs-rebass
        </NavItem>
        <Space
          auto
          x={1}
        />
        <NavItem is="a" href="/about-us">
          About
        </NavItem>
        <NavItem is="a" href="/contact-us">
          Contact
        </NavItem>
      </Toolbar>
    ); 
  }
};

const styles = {
  toolbar: {
    boxShadow: '0 0px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24)'
  },
  logo: {
  }
}
