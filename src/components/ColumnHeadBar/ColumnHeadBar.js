import styles from './ColumnHeadBar.module.css';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';

const ColumnHeadBar = ({columnTitle}) => {
return (
    <div className={styles.wrapper}>
        <p className={styles.title}>{columnTitle}</p>
        <AddIcon fill='white'/>
    </div>
)
}

export default ColumnHeadBar;