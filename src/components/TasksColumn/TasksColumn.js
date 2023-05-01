import ColumnHeadBar from 'components/ColumnHeadBar/ColumnHeadBar';
import styles from './TasksColumn.module.css';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import ColumnsTasksList from 'components/ColumnsTasksList/ColumnsTasksList';
import { useDate } from 'hooks/useDate';

const TasksColumn = ({columnTitle, tasks}) => {
    const date = useDate();
return (
    <div className={styles.wrapper}>
    <ColumnHeadBar columnTitle={columnTitle}/>
    {tasks && <ColumnsTasksList tasks={tasks}/>}
    <AddTaskBtn date={date}/>
    </div>
)
}

export default TasksColumn;