import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';

it('Header exists', () => {
  expect(shallow(<Header />).is('.Toolbar')).toBe(true);

});


