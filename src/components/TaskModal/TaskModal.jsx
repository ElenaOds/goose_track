import { Modal } from '../Modal/Modal';
import {TaskForm} from '../TaskForm/TaskForm';


export const TaskModal =({date,onClose})=> {  
  return (
    <Modal onClose={onClose}>      
      <TaskForm date={date} onClose={onClose}/>                      
    </Modal>
  );     
};