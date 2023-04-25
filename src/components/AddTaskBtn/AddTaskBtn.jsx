import {useState} from "react";
import {TaskModal } from "../TaskModal/TaskModal";

export const  AddTaskBtn =()=> {  
  const [isOpen,setIsModalOpen]=useState(false);  
  return (
    <div >       
      <button onClick={() => setIsModalOpen(true)}>AddTaskBtn</button> 
      {isOpen && (<TaskModal onClose={() => setIsModalOpen(false)} data={"Hello"}/>)}            
    </div>  
  );     
};