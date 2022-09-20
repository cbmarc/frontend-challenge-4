import React, { useState } from 'react';
import { ChatInput } from './ChatInput';
import { SendButton } from './SendButton';

export const InputContainer = ({ submit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    submit(input);
    setInput('');
  };

  return (
    <div className="landbot-input-container">
      <div className="field">
        <div className="control">
          <ChatInput
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
