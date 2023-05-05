import styles from './upDateTaskBtn.module.css';
import { TaskModalUpDate } from '../TaskModalUpDate/TaskModalUpDate';
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';
import { useState } from 'react';

export const UpDateTaskBtn = ({ id, task }) => {
  const [isOpenModal, setIsTaskModalUpDate] = useState(false);

  return (
    <>
      <Pencil
        className={styles.logo}
        onClick={() => setIsTaskModalUpDate(true)}
      />
      {isOpenModal && (
        <TaskModalUpDate
          onClose={() => setIsTaskModalUpDate(false)}
          id={id}
          task={task}
        />
      )}
    </>
  );
};
