

import TaskColumnCard from 'components/TaskColumnCard/TaskColumnCard';
import styles from './ColumnsTasksList.module.css';

const ColumnsTasksList = ({ tasks }) => {
    console.log(tasks, 'tasks');
  
    return (
      <div className={styles.wrapper}>
        {tasks.map((task) => (
          <TaskColumnCard key={task.taskTitle} tasks={task} />
        ))}
      </div>
    );
  };

export default ColumnsTasksList;