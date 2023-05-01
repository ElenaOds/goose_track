import ColumnHeadBar from 'components/ColumnHeadBar/ColumnHeadBar';
import styles from './TasksColumn.module.css';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import ColumnsTasksList from 'components/ColumnsTasksList/ColumnsTasksList';

const TasksColumn = ({columnTitle, tasks}) => {
return (
    <div className={styles.wrapper}>
    <ColumnHeadBar columnTitle={columnTitle}/>
    {tasks && <ColumnsTasksList tasks={tasks}/>}
    <AddTaskBtn date={'2023-05-01'}/>
    </div>
)
}

export default TasksColumn;