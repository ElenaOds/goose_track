import {useState} from "react";
import {TaskModal } from "../TaskModal/TaskModal";
import styles from './AddTaskBtn.module.css';
import { ReactComponent as Plus } from '../../icons/plus.svg';

export const  AddTaskBtn =({date})=> {  
  const [isOpen,setIsModalOpen]=useState(false);  
  return (
    <div >       
      <button className={styles.btn} onClick={() => setIsModalOpen(true)}>
      <Plus className={styles.logo} />
        Add task</button> 
      {isOpen && (<TaskModal onClose={() => setIsModalOpen(false)} date={date} />)}            
    </div>  
  );     
};