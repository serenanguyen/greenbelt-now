import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Results />);
    expect(wrapper.exists()).toEqual(true);
  })
})