
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p className={styles.message}>{message}</p>
        <button className={styles.okButton} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;