import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/user.selectors';

import styles from './TaskColumnCard.module.css';
import { useEffect } from 'react';

const TaskColumnCard = ({ title, id, priority, firstLetter, task }) => { 

  const {
    user: { userPhoto },
  } = useSelector(selectUser);

  useEffect(() => {
  }, [userPhoto]);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.title}>
        {title}
        </p>
        <div className={styles.meta}>
          <div className={`${styles.task_info} ${priority === 'high' ? styles.highPriority : priority === 'medium' ? styles.mediumPriority : styles.lowPriority}`}>
            <div className={styles.userpic_wrapper}>
            {userPhoto
            ?
            <img
            className={styles.userpic}
              src={userPhoto}
              alt="Userphoto"
            />
            :
            <div className={styles.userpic}>
              {firstLetter}
            </div>
          }
            </div>
            <div className={`${styles.priority_main} ${styles.priority}`}>{priority}</div>
          </div>
          <TaskToolbar id={id} task={task} />
        </div>
      </div>
    </div>
  );
};

export default TaskColumnCard;
