import styles from './upDateTaskBtn.module.css';
import {TaskModalUpDate} from "../TaskModalUpDate/TaskModalUpDate";
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';
import { useState } from "react";

export const  UpDateTaskBtn =({date,id})=> { 

  const [isOpenModal,setIsTaskModalUpDate]= useState(false);

  return (
    <div >       
        <button className={styles.btn} onClick={() => setIsTaskModalUpDate(true)}>
          <Pencil className={styles.logo} />           
        </button> 
      {isOpenModal && (<TaskModalUpDate onClose={() => setIsTaskModalUpDate(false)} date={date} id={id}/>)}            
    </div>  
  );     
};