import ColumnHeadBar from 'components/ColumnHeadBar/ColumnHeadBar';
import styles from './TasksColumn.module.css';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import ColumnsTasksList from 'components/ColumnsTasksList/ColumnsTasksList';
import { useDate } from 'hooks/useDate';

const TasksColumn = ({ columnTitle, tasks }) => {
    const urlDate = useDate();


    const date = new Date(urlDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;




    return (
        <div className={styles.wrapper}>
            <ColumnHeadBar columnTitle={columnTitle} />
            {tasks && <ColumnsTasksList tasks={tasks} />}
            <AddTaskBtn date={formattedDate} column={columnTitle}/>
        </div>
    )
}

export default TasksColumn;