import React from 'react';
import styles from './ChatInputText.module.css';

export const ChatInputText = ({ value, onChange, onKeyUp }) => (
  <input
    data-testid="chat-input"
    className={styles.LandbotInput}
    type="text"
    placeholder="Type here..."
    value={value}
    onChange={(event) => onChange(event.target.value)}
    onKeyUp={onKeyUp}
  />
);
