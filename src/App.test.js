import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ReactJS from 0 to Hero', () => {
  render(<App />);
  const linkElement = screen.getByText(/ReactJS from 0 to Hero/i);
  expect(linkElement).toBeInTheDocument();
});
