// import TaskToolbar from "components/TaskToolbar/TaskToolbar";

import styles from './TaskColumnCard.module.css';

const TaskColumnCard = (task) => {
    console.log(task, 'task');

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <p className={styles.title}>Testsfjhgljskdhglsdjsfvlsdnflkvjnsldfknvlkdfjsnvlkjdfsnlvkjnsdffhglsjkdhfg</p>
                <div className={styles.meta} >
                    <div className={styles.task_info}>
                        <div className={styles.userpic}>P</div>
                        {/* <img className={styles.userpic} alt='userpic' src=''/> */}
                        <div className={styles.sort}>Low</div>
                    </div>
                    {/* <TaskToolbar/> */}
                    <div>Toolbar</div>
                </div>
            </div>
        </div>
    )
}

export default TaskColumnCard;

