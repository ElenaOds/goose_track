import styles from './ModalDelete.module.css';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

export const ModalDelete = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyClose);
    return () => {
      window.removeEventListener('keydown', handleKeyClose);
    };
  }, [onClose]);

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className={styles.Backdrop} />
      <div className={styles.Overlay} onClick={handleClose}>
        <div className={styles.Modal}>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
};
