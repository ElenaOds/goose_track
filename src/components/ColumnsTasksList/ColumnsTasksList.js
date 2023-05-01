import TaskColumnCard from 'components/TaskColumnCard/TaskColumnCard';
import styles from './ColumnsTasksList.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';

const ColumnsTasksList = ({ tasks }) => {
  const profile = useSelector(selectUser);
  const imya = profile.name;
  const firstLetter = imya[0].toLocaleUpperCase();
  return (
    <div className={styles.wrapper}>
      {tasks.map(task => {
        const { title, _id, priority } = task;
        return (
          <TaskColumnCard
            key={_id}
            title={title}
            priority={priority}
            firstLetter={firstLetter}
            id={_id}
            task={task}
          />
        );
      })}
    </div>
  );
};

export default ColumnsTasksList;
