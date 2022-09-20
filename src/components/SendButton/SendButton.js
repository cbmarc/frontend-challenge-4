import React from 'react';
import { concatenateClassNames } from '../../classNameUtils';
import styles from './SendButton.module.css';

export const SendButton = ({ onClick, disabled, className }) => {
  return (
    <button
      data-testid="send-button"
      className={concatenateClassNames(
        styles.Button,
        styles.LandbotInputSend,
        'button',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="icon is-large">
        <i className="fas fa-paper-plane fa-lg"></i>
      </span>
    </button>
  );
};
