import React from 'react';
import { Message } from './Message';

const story = {
  title: 'Message',
  component: Message,
};
export default story;

export const Default = (args) => (
  <>
    <Message author="bot" text="I am a bot" />
    <Message author="user" text="And I am a user, hi there :)" />
  </>
);

export const BotMessage = (args) => <Message {...args} />;

BotMessage.args = {
  author: 'bot',
  text: 'I am Landbot, behold!',
};

export const UserMessage = (args) => <Message {...args} />;

UserMessage.args = {
  author: 'user',
  text: 'I a user, hello!',
};
