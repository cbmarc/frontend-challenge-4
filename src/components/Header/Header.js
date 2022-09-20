import React from 'react';
import styles from './Header.module.css';

export const Header = ({ children }) => (
  <div className={styles.LandbotHeader}>
    <h1 className="subtitle">{children}</h1>
  </div>
);
