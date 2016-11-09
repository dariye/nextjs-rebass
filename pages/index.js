import React from 'react';
import Link from 'next/link';
import AppShell from '../containers/AppShell.js';

export default class IndexPage extends AppShell {
  constructor(props) {
    super(props);
  }

  render() {
    return super.render(
      <div>
        <h1>Howdy</h1>
      </div>
    );
  }

}
