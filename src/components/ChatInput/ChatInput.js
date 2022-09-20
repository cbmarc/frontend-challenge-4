import React, { useState } from 'react';
import { ChatInputText } from '../ChatInputText/ChatInputText';
import { SendButton } from '../SendButton/SendButton';
import styles from './ChatInput.module.css';

export const ChatInput = ({ submit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    submit(input);
    setInput('');
  };

  return (
    <div className={styles.LandbotInputContainer}>
      <div className="field">
        <div className="control">
          <ChatInputText
            value={input}
            onChange={setInput}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <SendButton
            className={styles.LandbotInputSend}
            onClick={handleSubmit}
            disabled={input === ''}
          />
        </div>
      </div>
    </div>
  );
};
