

import TaskColumnCard from 'components/TaskColumnCard/TaskColumnCard';
import styles from './ColumnsTasksList.module.css';

const ColumnsTasksList = ({ tasks }) => {
  
    return (
      <div className={styles.wrapper}>
        {tasks.map((task) => (
          <TaskColumnCard key={task.taskTitle} task={task} />
        ))}
      </div>
    );
  };

export default ColumnsTasksList;