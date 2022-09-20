import React from 'react';
import { SendButton } from './SendButton';

const story = {
  title: 'SendButton',
  component: SendButton,
};
export default story;

export const Default = (args) => <SendButton {...args} />;

Default.args = {
  onClick: () => {},
  disabled: false,
};
