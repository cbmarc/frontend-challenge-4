import React from 'react';

export const ChatInputText = ({ value, onChange, onKeyUp }) => (
  <input
    data-testid="chat-input"
    className="landbot-input"
    type="text"
    placeholder="Type here..."
    value={value}
    onChange={(event) => onChange(event.target.value)}
    onKeyUp={onKeyUp}
  />
);
