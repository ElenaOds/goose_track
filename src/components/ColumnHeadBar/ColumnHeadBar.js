import styles from './ColumnHeadBar.module.css';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';

const ColumnHeadBar = ({columnTitle}) => {
return (
    <div className={styles.wrapper}>
        <p className={styles.title}>{columnTitle}</p>
        <AddTaskBtn inColumnHeadBar/>
    </div>
)
}

export default ColumnHeadBar;
