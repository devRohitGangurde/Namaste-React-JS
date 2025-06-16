import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactUs from './ContactUs';

test('renders MyComponent', () => {
  render(<ContactUs/>);
  const element = screen.getByRole('heading');
  expect(element).toBeInTheDocument();
});

test('renders Button', () => {
    render(<ContactUs/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });