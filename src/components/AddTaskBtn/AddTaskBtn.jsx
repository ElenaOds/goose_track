import {useState} from "react";
import {TaskModal } from "../TaskModal/TaskModal";
import styles from './AddTaskBtn.module.css';
import { ReactComponent as Plus } from '../../icons/plus.svg';



export const AddTaskBtn = ({ date }) => {

  const [isOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button className={styles.button} onClick={() => setIsModalOpen(true)}>
      <Plus className={styles.plus_icon}/>
            Add task
      </button>
      {isOpen && (<TaskModal onClose={() => setIsModalOpen(false)} date={date} />)}
    </>
  );
};