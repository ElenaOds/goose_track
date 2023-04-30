import { ModalUpDate } from '../ModalUpDate/ModalUpDate';
import {TaskFormUpDate} from '../TaskFormUpDate/TaskFormUpDate';


export const TaskModalUpDate =({id,onClose})=> {  
  return (
    < ModalUpDate onClose={onClose}>      
      <TaskFormUpDate id={id} onClose={onClose}/>                      
    </ModalUpDate>
  );     
};