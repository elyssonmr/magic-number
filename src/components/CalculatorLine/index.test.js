import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CalculatorLine from './index';

describe('Input Render', () => {
  test('should renders Name Input', () => {
    render(<CalculatorLine />);
    const input = screen.getByPlaceholderText(/Nome do Fii/i);
    expect(input).toBeInTheDocument();
  });

  test('should renders price input', () => {
    render(<CalculatorLine />);
    const input = screen.getByPlaceholderText(/Preço/i);
    expect(input).toBeInTheDocument();
  });

  test('should renders dividends input', () => {
    render(<CalculatorLine />);
    const input = screen.getByPlaceholderText(/Dividendos \/ Proventos/i);
    expect(input).toBeInTheDocument();
  });

  test('should renders magic number input', () => {
    render(<CalculatorLine />);
    const input = screen.getByPlaceholderText(/Magic Number/i);
    expect(input).toBeInTheDocument();
    expect(input.hasAttribute('readonly')).toBe(true);
  });
});

describe('Input validation', () => {
  describe.each([
    ['11', 'numbers'],
    ['MXRF', 'letters'],
    ['MXRF11', 'letter and numbers'],
  ])('input name should accept', (value, name_test) => {
    test(`${name_test} values`, () => {
      render(<CalculatorLine />);
      const input = screen.getByPlaceholderText(/Nome do Fii/i);
      fireEvent.change(input, { target: { value } });
      expect(input.value).toBe(value);
    });
  });
});

describe.each([
  ['10.50', '1', '11'],
  ['35.99', '5.50', '7'],
  ['5.90', '10.50', '1'],
])('Magic Number Logic', (price, dividends, expected) => {
  test('should calculate magic number for price %f', () => {
    render(<CalculatorLine />);
    const priceInput = screen.getByPlaceholderText(/Preço/i);
    const dividendsInput = screen.getByPlaceholderText(/Dividendos \/ Proventos/i);
    const magicNumberInput = screen.getByPlaceholderText(/Magic Number/i);

    fireEvent.change(priceInput, { target: { value: price } });
    fireEvent.change(dividendsInput, { target: { value: dividends } });

    expect(magicNumberInput.value).toBe(expected);
  });
});
