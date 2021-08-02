import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App'



test('the app', async() => {
  render(<App />);
  const element = screen.getByTestId(/myapp/i);
  expect(element).toMatchSnapshot();
});
