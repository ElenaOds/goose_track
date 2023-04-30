
import styles from './TaskColumnCard.module.css';

const TaskColumnCard = (task ) => {
    console.log(task, 'task');

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.userpic}>P</div>
                {/* <img className={styles.userpic} alt='userpic' src=''/> */}
                <p className={styles.title}>Test</p>
                <div className={styles.toolbar_container} >
                    <p className={styles.date}>12:44</p>
                    <div className={styles.sort}>Low</div>
                </div>
            </div>
        </div>
    )
}

export default TaskColumnCard;

