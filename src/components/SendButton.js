import React from 'react';

export const SendButton = ({ onClick, disabled }) => {
  return (
    <button
      data-testid="send-button"
      className="button landbot-input-send"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="icon is-large">
        <i className="fas fa-paper-plane fa-lg"></i>
      </span>
    </button>
  );
};
