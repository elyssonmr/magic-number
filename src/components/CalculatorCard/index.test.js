import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import CalculatorCard from './index';

describe('Components Render', () => {
  test('should render the main card', () => {
    render(<CalculatorCard />);
    const card = screen.getByText('Descubra o Magic Number dos seus FIIs');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card-header');
  });

  describe('help card', () => {
    test('should render help card', () => {
      render(<CalculatorCard />);
      const link = screen.getByText('Clique aqui para obter ajuda');

      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('btn btn-link');
    });

    test('should render help card text', () => {
      render(<CalculatorCard />);
      const helpText = screen.getByText(/Magic Number é a quantidade de papeis/);

      expect(helpText).toBeInTheDocument();
      expect(helpText).toHaveClass('card-body');
    });
  });

  describe('calculator line', () => {
    test('should render only one delete btn', () => {
      const { container } = render(<CalculatorCard />);
      const lines = container.getElementsByClassName('bi bi-x-circle-fill');

      expect(lines.length).toBe(1);
    });
  });

  describe('Card Footer', () => {
    test('should render add line btn', () => {
      render(<CalculatorCard />);
      const addLineBtn = screen.getByText('Adicionar Linha');

      expect(addLineBtn).toBeInTheDocument();
    });

    test('should render save btn', () => {
      render(<CalculatorCard />);
      const saveBtn = screen.getByText('Salvar');

      expect(saveBtn).toBeInTheDocument();
      expect(saveBtn).toBeDisabled();
    });
  });
});

describe('Component actions', () => {
  test('should add line', () => {
    const { container } = render(<CalculatorCard />);
    const addLineBtn = screen.getByText('Adicionar Linha');
    fireEvent.click(addLineBtn);
    const calculatorLines = screen.getAllByPlaceholderText('Magic Number');
    const deleteBtns = container.querySelectorAll('button.btn-danger');

    expect(calculatorLines.length).toBe(2);
    expect(deleteBtns.length).toBe(2);
    deleteBtns.forEach((deleteBtn) => {
      expect(deleteBtn).not.toBeDisabled();
    });
  });

  test('should remove line', () => {
    const { container } = render(<CalculatorCard />);
    const addLineBtn = screen.getByText('Adicionar Linha');
    fireEvent.click(addLineBtn);
    const deleteBtns = container.querySelectorAll('button.btn-danger');

    fireEvent.click(deleteBtns[0]);
    const calculatorLines = screen.getAllByPlaceholderText('Magic Number');

    expect(calculatorLines.length).toBe(1);
  });
});
