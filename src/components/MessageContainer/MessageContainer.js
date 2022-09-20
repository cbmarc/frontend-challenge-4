import React from 'react';
import { Message } from '../Message';
import styles from './MessageContainer.module.css';

export const MessageContainer = ({ messages }) => {
  return (
    <div
      id="landbot-messages-container"
      className={styles.LandbotMessagesContainer}
    >
      {Object.values(messages)
        .filter(messagesFilter)
        .sort((a, b) => a.timestamp - b.timestamp)
        .map((message) => (
          <Message key={message.key} {...message} />
        ))}
    </div>
  );
};

function messagesFilter(data) {
  /** Support for basic message types */
  return ['text', 'dialog'].includes(data.type);
}
