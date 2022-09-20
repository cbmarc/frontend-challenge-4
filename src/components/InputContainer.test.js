import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { InputContainer } from './InputContainer';

describe('InputContainer', () => {
  it('Should be rendered', () => {
    const { baseElement } = render(<InputContainer submit={jest.fn()} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('Should call submit when submitted.', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<InputContainer submit={onSubmit} />);
    const input = getByTestId('chat-input');
    const value = 'something';
    fireEvent.change(input, { target: { value: value } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(value);
  });
});
