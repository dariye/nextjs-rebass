import React from 'react';
import Link from 'next/link';
import AppShell from '../containers/AppShell.js';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Howdy</h1>
      </div>
    );
  }

}

export default AppShell(IndexPage);
