import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';

it('renders without crashing', () => {
  shallow(<Form />);
});

it('submits without crashing', () => {
  const getRecipe = jest.fn();
  const formComponent = mount(<Form getRecipe={getRecipe} />);
  formComponent.find('form').simulate('submit', { preventDefault: jest.fn() });
});
