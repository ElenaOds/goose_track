import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';


import styles from './TaskColumnCard.module.css';

const TaskColumnCard = ({ title, _id, priority, firstLetter }) => { 

console.log(priority);
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.title}>
          {title}
        </p>
        <div className={styles.meta}>
          <div className={`${styles.task_info} ${priority === 'high' ? styles.highPriority : priority === 'medium' ? styles.mediumPriority : styles.lowPriority}`}>
            <div className={styles.userpic}>
            {firstLetter}
            </div>
            <div className={`${styles.priority_main} ${styles.priority}`}>{priority}</div>
          </div>
          <TaskToolbar id={_id} />
        </div>
      </div>
    </div>
  );
};

export default TaskColumnCard;
