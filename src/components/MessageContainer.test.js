import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MessageContainer } from './MessageContainer';

describe('MessageContainer', () => {
  it('Should be rendered', () => {
    const { baseElement } = render(<MessageContainer messages={{}} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('Should print provided messages.', () => {
    const messages = [
      {
        key: '+XTURjrhy8SyGqYkv8mJC',
        text: 'Type something to start chatbotting!',
        author: 'bot',
        timestamp: 0,
        type: 'text',
      },
    ];
    const { queryByText } = render(<MessageContainer messages={messages} />);
    expect(queryByText(messages[0].text)).toBeTruthy();
  });
});
