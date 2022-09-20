import React from 'react';
import styles from './Header.module.css';

/**
 * Header component used to describe the title of the chat
 * @param {Object} props
 * @returns a Header component
 */
export const Header = ({ children }) => (
  <div className={styles.LandbotHeader}>
    <h1 className="subtitle">{children}</h1>
  </div>
);
