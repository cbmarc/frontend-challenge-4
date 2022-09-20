import React from 'react';
import { concatenateClassNames } from '../../classNameUtils';
import styles from './SendButton.module.css';

/**
 * SendButton component is the button used send messages.
 *
 * @param {Object} props
 * onClick is a handler for the click event of the button
 * disabled if true, the button will be disabled. It will be enabled otherwise.
 * className is any additonal class name we want to externally provide to the button
 * @returns a SendButton component.
 */
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
