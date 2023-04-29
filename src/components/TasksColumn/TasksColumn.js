import ColumnHeadBar from 'components/ColumnHeadBar/ColumnHeadBar';
import styles from './TasksColumn.module.css';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';

const TasksColumn = ({columnTitle}) => {
return (
    <div className={styles.wrapper}>
    <ColumnHeadBar columnTitle={columnTitle}/>
    {/* <ColumnTasksList/> */}
    <AddTaskBtn/>
    </div>
)
}

export default TasksColumn;