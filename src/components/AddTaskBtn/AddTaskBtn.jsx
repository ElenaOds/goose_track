import { useState } from "react";
import { TaskModal } from "../TaskModal/TaskModal";
import styles from './AddTaskBtn.module.css';

export const AddTaskBtn = () => {
  const [isOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button className={styles.button} onClick={() => setIsModalOpen(true)}>
        <div className={styles.plus}></div>
        AddTaskBtn
      </button>
      {isOpen && (<TaskModal onClose={() => setIsModalOpen(false)} data={"Hello"} />)}
    </>
  );
};