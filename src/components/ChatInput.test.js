import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ChatInput } from './ChatInput';

describe('ChatInput', () => {
  it('Should be rendered', () => {
    const { baseElement } = render(
      <ChatInput onChange={jest.fn} onKeyUp={null} value="" />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('Should call the onChange event when changed.', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <ChatInput onChange={onChange} onKeyUp={null} value="" />
    );
    fireEvent.change(getByTestId('chat-input'), {
      target: { value: 'whatever' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('whatever');
  });

  it('Should call the onKeyUp event when pressing a key.', () => {
    const onKeyUp = jest.fn();
    const { getByTestId } = render(
      <ChatInput onChange={jest.fn()} onKeyUp={onKeyUp} value="" />
    );
    fireEvent.keyUp(getByTestId('chat-input'), { key: 'A', code: 'A' });
    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });

  it('Should show the default provided value', () => {
    const defaultValue = 'Default value';
    const { queryByDisplayValue } = render(
      <ChatInput onChange={jest.fn} onKeyUp={null} value={defaultValue} />
    );
    expect(queryByDisplayValue(defaultValue)).toBeTruthy();
  });
});
