import React, { useState } from 'react';
import { ChatInputText } from '../ChatInputText/ChatInputText';
import { SendButton } from '../SendButton/SendButton';

export const ChatInput = ({ submit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    submit(input);
    setInput('');
  };

  return (
    <div className="landbot-input-container">
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
          <SendButton onClick={handleSubmit} disabled={input === ''} />
        </div>
      </div>
    </div>
  );
};
