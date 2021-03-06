import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../../Components/Header/Header';

// test('Should render Header component', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });


test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});