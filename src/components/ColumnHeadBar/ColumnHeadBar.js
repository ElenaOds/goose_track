import styles from './ColumnHeadBar.module.css';


const ColumnHeadBar = ({columnTitle}) => {


return (
    <div className={styles.wrapper}>
        <p className={styles.title}>{columnTitle}</p>
        <div className={styles.circle}></div>
    </div>
)
}


export default ColumnHeadBar;

