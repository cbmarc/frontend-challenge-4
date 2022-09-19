import { render } from '@testing-library/react';
import React from 'react';
import { Message } from './Message';

describe('Message should work fine', () => {
  it('Should render correctly', () => {
    const author = 'Test author';
    const message = 'Some message';
    const { queryByText, getByTestId } = render(
      <Message author={author} text={message} />
    );
    expect(queryByText(message)).toBeTruthy();
    expect(getByTestId('message-root').getAttribute('data-author')).toBe(
      author
    );
  });
});
