import styles from './TasksColumnsList.module.css';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';

const TasksColumnsList = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.container}>
            <p className={styles.title}>To do</p>
            <AddIcon />
          </div>
          <button className={styles.btn} type="button">
            Add task
          </button>
        </li>
        <li className={styles.item}>
          <div className={styles.container}>
            <p className={styles.title}>In progress</p>
            <AddIcon />
          </div>
          <button className={styles.btn} type="button">
            Add task
          </button>
        </li>
        <li className={styles.item}>
          <div className={styles.container}>
            <p className={styles.title}>Done</p>
            <AddIcon />
          </div>
          <button className={styles.btn} type="button">
            Add task
          </button>
        </li>
      </ul>
    </>
  );
};

export default TasksColumnsList;
