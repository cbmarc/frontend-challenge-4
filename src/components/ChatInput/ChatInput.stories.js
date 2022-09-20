import React from 'react';
import { ChatInput } from './ChatInput';

const story = {
  title: 'ChatInput',
  component: ChatInput,
};
export default story;

export const Default = (args) => <ChatInput {...args} />;

Default.args = {
  submit: () => {},
};
