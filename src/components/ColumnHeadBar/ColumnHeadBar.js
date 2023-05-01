import styles from './ColumnHeadBar.module.css';
import { ReactComponent as PlusCircle } from '../../icons/plus-circle.svg';



const ColumnHeadBar = ({columnTitle}) => {


return (
    <div className={styles.wrapper}>
        <p className={styles.title}>{columnTitle}</p>
        <PlusCircle className={styles.circle}/>
    </div>
)
}


export default ColumnHeadBar;

