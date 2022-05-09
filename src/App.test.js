import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CalculatorCard Header', () => {
  render(<App />);
  const header = screen.getByText(/Descubra o Magic Number dos seus FIIs/i);
  expect(header).toBeInTheDocument();
});
