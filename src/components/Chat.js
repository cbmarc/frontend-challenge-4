import React from 'react';
import { useEffect, useState } from 'react';

import { core } from '../config';
import { useScrollBottom } from '../hooks/useScrollBottom';
import { Header } from './Header';
import { ChatInput } from './ChatInput';
import { MessageContainer } from './MessageContainer';

export default function Chat() {
  const [messages, setMessages] = useState({});
  useScrollBottom('landbot-messages-container', [messages]);
  useEffect(() => {
    core.pipelines.$readableSequence.subscribe((data) => {
      setMessages((messages) => ({
        ...messages,
        [data.key]: parseMessage(data),
      }));
    });

    core.init().then((data) => {
      setMessages(parseMessages(data.messages));
    });
  }, []);

  const submit = (value) => {
    if (value !== '') {
      core.sendMessage({ message: value });
    }
  };

  return (
    <>
      <Header>Landbot</Header>
      <MessageContainer messages={messages} />
      <ChatInput submit={submit} />
    </>
  );
}

function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {});
}

function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? 'bot' : 'user',
    timestamp: data.timestamp,
    type: data.type,
  };
}
