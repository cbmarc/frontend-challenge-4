import React from 'react';
import { ChatInputText } from './ChatInputText';

const story = {
  title: 'ChatInputText',
  component: ChatInputText,
};
export default story;

export const Default = (args) => <ChatInputText {...args} />;

Default.args = {
  onChange: () => {},
  onKeyUp: () => {},
  value: '',
};
