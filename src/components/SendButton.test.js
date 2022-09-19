import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { SendButton } from './SendButton';

describe('SendButton', () => {
  it('Should be rendered', () => {
    const { baseElement } = render(
      <SendButton onClick={jest.fn()} disabled={undefined} />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('Should call the onClick event when clicked.', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <SendButton onClick={onClick} disabled={undefined} />
    );
    fireEvent.click(getByTestId('send-button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled.', () => {
    const { getByTestId } = render(<SendButton onClick={jest.fn()} disabled />);
    expect(getByTestId('send-button')).toBeDisabled();
  });
});
