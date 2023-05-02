import { UpDateTaskBtn } from 'components/upDateTaskBtn/upDateTaskBtn';
import { Delete } from './Delete/Delete';
import { Move } from './Move/Move';
import styles from './TaskToolbar.module.css';

export const TaskToolbar = ({ id, task }) => {
  return (
    <div className={styles.toolbar}>
      <Move id={id} task={task} />
      <UpDateTaskBtn id={id} />
      <Delete id={id} />
    </div>
  );
};
