import TasksColumn from "components/TasksColumn/TasksColumn";
import styles from './TasksColumnsList.module.css';
import { useSelector } from "react-redux";
import { selectTaskList } from "redux/tasks/tasks.selectors";





const TasksColumnsList = () => {

  const user_tasks = useSelector(selectTaskList);

  const columnTitles = ['To do', 'In progress', 'Done'];

  const columns = columnTitles.map(title => (
    <TasksColumn 
      key={title} 
      columnTitle={title} 
      tasks={user_tasks.filter(task => task.column === title)} 
    />
  ));

  return <div className={styles.wrapper}>{columns}</div>;
};

export default TasksColumnsList;
