import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./constants/constants', () => ({
  get REACT_APP_BASE_API_URL() {
      return 'http://localhost:3000' // web specific
  },
  get ENVIRONMENT(){
      return 'development'
  }
}))

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
