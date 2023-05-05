import styles from './ColumnHeadBar.module.css';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';

const ColumnHeadBar = ({date, columnTitle}) => {
return (
    <div className={styles.wrapper}>
        <p className={styles.title}>{columnTitle}</p>
            <AddTaskBtn inColumnHeader date={date} column={columnTitle}></AddTaskBtn>
    </div>
    )
}

export default ColumnHeadBar;

