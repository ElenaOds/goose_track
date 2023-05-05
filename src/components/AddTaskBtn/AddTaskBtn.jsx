import { useState } from "react";
import { TaskModal } from "../TaskModal/TaskModal";
import styles from './AddTaskBtn.module.css';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { ReactComponent as PlusCircle } from '../../icons/plus-circle.svg';


export const AddTaskBtn = ({ inColumnHeader, date, column }) => {

  const [isOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {inColumnHeader
        ?
        <PlusCircle className={styles.circle} onClick={() => setIsModalOpen(true)} />
        :
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          <Plus className={styles.plus_icon} />
          Add task
        </button>}
      {isOpen && (<TaskModal onClose={() => setIsModalOpen(false)} date={date} column={column} />)}
    </>
  );
};