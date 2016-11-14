import React from 'react';
import { style } from 'next/css';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={style(styles.footer)} >
        <div className={style(styles.footerItem)}> 
          Copyright &copy; { new Date().getFullYear() }
        </div>
      </footer>
    );
  }
};


const styles = {

  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50px',
    textAlign: 'center',
    background: '#fafafa'
  },

  footerItem: {
    padding: '5px',
    lineHeight: '50px'
  }

}
