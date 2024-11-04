import React from 'react';
import styles from './MenuComponent.module.css';

const MenuItem = ({ children, className }) => (
  <div className={`${styles.menuItem} ${className || ''}`}>
    {children}
  </div>
);

export default MenuItem;