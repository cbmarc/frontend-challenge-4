import React from 'react';
import { MessageContainer } from './MessageContainer';

const story = {
  title: 'MessageContainer',
  component: MessageContainer,
};
export default story;

export const Default = (args) => <MessageContainer {...args} />;

Default.args = {
  messages: [
    {
      key: '+XTURjrhy8SyGqYkv8mJC',
      text: 'Type something to start chatbotting!',
      author: 'bot',
      timestamp: 0,
      type: 'text',
    },
  ],
};
