import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should have a form element', () => {
  const app = mount(<App />);
  expect(app.find('form').length).toBe(1);
});
