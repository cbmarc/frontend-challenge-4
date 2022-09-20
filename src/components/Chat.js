import React from 'react';
import { useEffect, useState } from 'react';

import { core } from '../config';
import { useScrollBottom } from '../hooks/useScrollBottom';
import { Header } from './Header';
import { ChatInput } from './ChatInput';
import { MessageContainer } from './MessageContainer';

/**
 * Chat component. Contains all of the pieces of the puzzle to create the chat.
 * @returns a chat component.
 */
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

  /**
   * Submit handler passed to the ChatInput component.
   * Get's called when the text is submitted from an intro or a enter keyPress
   * @param {string} value
   */
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

/**
 * Parses the messages from firebase into a form useful for the chat app
 * @param messages to be reduced
 * @returns reduced messages with the inbound format. It would be very useful to have this
 * in a type so the code was more self-documented and a joy to read
 */
function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {});
}

/**
 *  Parses a message into the form used within the application
 * @param data: a single message
 * @returns an object with the extracted data from the api
 */
function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? 'bot' : 'user',
    timestamp: data.timestamp,
    type: data.type,
  };
}
