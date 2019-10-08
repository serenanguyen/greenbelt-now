import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.exists()).toEqual(true);
  });
  // test('clicking ul triggers handleSelect()', () => {
  //   const wrapper = shallow(<Dropdown />);

  //   const setLocation = jest.fn();
  //   const mockedEvent = {currentTarget: {
  //     dataset: {
  //       id: 'sculptureFalls'
  //     }
  //   }}
  //   const ul = wrapper.find('li').find({'data-id': 'sculptureFalls'});
  //   // ul.simulate('click', mockedEvent);w
  //   expect(setLocation).toHaveBeenCalled();
  // })
})