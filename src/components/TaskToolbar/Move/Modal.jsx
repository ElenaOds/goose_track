import { useDate } from 'hooks/useDate';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { get, update } from 'redux/tasks/tasks.operations';
import { ReactComponent as Icon } from '../../../icons/move.svg';
import styles from './Modal.module.css';
const { format, addMonths } = require('date-fns');

export const Modal = ({ onClose, id, task }) => {
  const urlDate = useDate();
  const modalRef = useRef(null);

  const from = format(urlDate, 'yyyy-MM-dd');
  const to = format(addMonths(urlDate, 1), 'yyyy-MM-dd');

  const dispatch = useDispatch();
  const data = {
    from,
    to,
  };

  const columns = ['To do', 'In progress', 'Done'];
  const otherColumns = columns.filter(column => column !== task.column);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const handleUpdate = async updateData => {
     dispatch(update(updateData));
     dispatch(get(data));
  };

  return (
    <div className={styles.modalContent} ref={modalRef}>
      {otherColumns.map(column => {
        const updatedTask = {
          column,
        };

        const updateData = {
          id,
          updatedTask,
        };

        return (
          <button
            key={column}
            className={styles.btn}
            onClick={() => {
              handleUpdate(updateData);
              onClose();
            }}
          >
            {column}
            <Icon className={styles.icon} />
          </button>
        );
      })}
    </div>
  );
};
