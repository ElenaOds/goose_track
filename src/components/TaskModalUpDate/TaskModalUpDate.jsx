import { ModalUpDate } from '../ModalUpDate/ModalUpDate';
import { TaskFormUpDate } from '../TaskFormUpDate/TaskFormUpDate';

export const TaskModalUpDate = ({ id, onClose, task }) => {
  return (
    <ModalUpDate onClose={onClose}>
      <TaskFormUpDate id={id} onClose={onClose} task={task} />
    </ModalUpDate>
  );
};
