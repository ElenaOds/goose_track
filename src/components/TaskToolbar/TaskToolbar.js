import { UpDateTaskBtn } from 'components/upDateTaskBtn/upDateTaskBtn';
import { Delete } from './Delete/Delete';
import { Move } from './Move/Move';
import styles from './TaskToolbar.module.css';

export const TaskToolbar = ({ date, id }) => {
  return (
    <div className={styles.toolbar}>
      <Move />
      <UpDateTaskBtn date={date} id={id} />
      <Delete id={id} />
    </div>
  );
};
