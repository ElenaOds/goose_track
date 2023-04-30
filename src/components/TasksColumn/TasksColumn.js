import ColumnHeadBar from 'components/ColumnHeadBar/ColumnHeadBar';
import styles from './TasksColumn.module.css';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import {UpDateTaskBtn} from '../upDateTaskBtn/upDateTaskBtn';

const TasksColumn = ({columnTitle}) => {
return (
    <div className={styles.wrapper}>
    <ColumnHeadBar columnTitle={columnTitle}/>
    {/* <ColumnTasksList/> */}
    <UpDateTaskBtn date={'2023-05-12'} id={'644d2b183459f2c60583fca2'}/>
    <AddTaskBtn date={'2023-05-12'}/>
    </div>
)
}

export default TasksColumn;