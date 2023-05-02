import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from 'redux/tasks/tasks.operations';
import { ReactComponent as Icon } from '../../../icons/move.svg';
import styles from './Modal.module.css';

export const Modal = ({ onClose, id, task }) => {
  const dispatch = useDispatch();

  const columns = ['To do', 'In progress', 'Done'];
  const otherColumns = columns.filter(column => column !== task.column);

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

  return (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {otherColumns.map(column => {
          const updatedTask = {
            column: column,
          };

          const updateData = {
            id: id,
            updatedTask: updatedTask,
          };

          return (
            <button
              key={column}
              className={styles.btn}
              onClick={() => {
                onClose();
                dispatch(update(updateData));
              }}
            >
              {column}
              <Icon className={styles.icon} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
