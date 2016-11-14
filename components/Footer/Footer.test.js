import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('Footer has copyright text and current year', () => {
  const copyright = shallow(
    <Footer />
  );
  
  expect(copyright.find('footer').text()).toEqual(`Copyright © ${new Date().getFullYear()}`)

});

