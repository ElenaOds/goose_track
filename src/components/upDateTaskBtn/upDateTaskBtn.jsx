import styles from './upDateTaskBtn.module.css';
import { TaskModalUpDate } from '../TaskModalUpDate/TaskModalUpDate';
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';
import { useState } from 'react';

export const UpDateTaskBtn = ({ id }) => {
  const [isOpenModal, setIsTaskModalUpDate] = useState(false);

  return (
    <>
      {/* <button className={styles.btn} > */}
      <Pencil
        className={styles.logo}
        onClick={() => setIsTaskModalUpDate(true)}
      />
      {/* </button> */}
      {isOpenModal && (
        <TaskModalUpDate onClose={() => setIsTaskModalUpDate(false)} id={id} />
      )}
    </>
  );
};
