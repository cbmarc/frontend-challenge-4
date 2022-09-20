import React from 'react';
import styles from './ChatInputText.module.css';

/**
 * CharInputText component used to wrap and style the Chat input according to our needs
 * @param {Object} props
 * Value is the value the text will have
 * onChange is a handler for the input change events, it returns the text
 * onKeyUp is a handler for the onKeyUp event from the input
 * @returns CharInputText component
 */
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
