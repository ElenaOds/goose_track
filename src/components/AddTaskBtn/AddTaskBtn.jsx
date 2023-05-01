import {useState} from "react";
import {TaskModal } from "../TaskModal/TaskModal";
import styles from './AddTaskBtn.module.css';


export const AddTaskBtn = ({ date, inColumnHeadBar }) => {

  const [isOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button className={inColumnHeadBar ? styles.circle : styles.button} onClick={() => setIsModalOpen(true)}>
        {!inColumnHeadBar &&
          <>
            <div className={styles.plus}></div>
            Add task
          </>}
      </button>

      {isOpen && (<TaskModal onClose={() => setIsModalOpen(false)} date={date} />)}
    </>
  );
};