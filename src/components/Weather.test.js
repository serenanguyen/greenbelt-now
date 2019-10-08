import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather';

describe('Weather', () => {
  const wrapper = shallow(<Weather />);

  test('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  })
})