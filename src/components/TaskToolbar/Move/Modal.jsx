import React, { useEffect } from 'react';
import { ReactComponent as Icon } from '../../../icons/move.svg';
import styles from './Modal.module.css';

export const Modal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div onClick={handleBackdropClick} className={styles.Overlay}>
      <div className={styles.modalContent}>
        <button className={styles.btn} type="button" onClick={handleClose}>
          In progress
          <Icon className={styles.icon} />
        </button>
        <button className={styles.btn} type="button" onClick={handleClose}>
          Done
          <Icon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
