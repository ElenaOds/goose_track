import { ModalUpDate } from '../ModalUpDate/ModalUpDate';
import {TaskFormUpDate} from '../TaskFormUpDate/TaskFormUpDate';


export const TaskModalUpDate =({date,id,onClose})=> {  
  return (
    < ModalUpDate onClose={onClose}>      
      <TaskFormUpDate date={date} id={id} onClose={onClose}/>                      
    </ModalUpDate>
  );     
};