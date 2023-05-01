import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';


import styles from './TaskColumnCard.module.css';

const TaskColumnCard = ({ title, _id, priority, firstLetter }) => { 


  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.title}>
          {title}
        </p>
        <div className={styles.meta}>
          <div className={styles.task_info}>
            <div className={styles.userpic}>
            {firstLetter}
            </div>
            <div className={styles.sort}>{priority}</div>
          </div>
          <TaskToolbar id={_id} />
        </div>
      </div>
    </div>
  );
};

export default TaskColumnCard;
