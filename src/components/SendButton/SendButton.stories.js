import React from 'react';
import { SendButton } from './SendButton';

const story = {
  title: 'SendButton',
  component: SendButton,
};
export default story;

export const Default = (args) => (
  <div style={{ width: '50px', height: '50px' }}>
    <SendButton {...args} />
  </div>
);

Default.args = {
  onClick: () => {},
  disabled: false,
};
