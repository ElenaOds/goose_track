import TasksColumn from "components/TasksColumn/TasksColumn";
import styles from './TasksColumnsList.module.css';
import { useSelector } from "react-redux";
import { selectTaskList } from "redux/tasks/tasks.selectors";
import { useDate } from "hooks/useDate";


const TasksColumnsList = () => {

  const urlDate = useDate();

  const user_tasks = useSelector(selectTaskList);

  const filteredTasks = user_tasks.filter(task => {
    const dateString = task.date;
    const date = new Date(dateString);
    const slicedDate = date.toString().slice(0,10);
    const slicedUrlDate = urlDate.toString().slice(0,10);
    return slicedUrlDate === slicedDate;
  });

  const columnTitles = ['To do', 'In progress', 'Done'];

  const columns = columnTitles.map(title => (
    <TasksColumn
      key={title}
      columnTitle={title}
      tasks={filteredTasks.filter(task => task.column === title)}
    />
  ));

  return <div className={styles.wrapper}>{columns}</div>;
};

export default TasksColumnsList;
