import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';

import styles from './TaskColumnCard.module.css';

const TaskColumnCard = task => {
  console.log(task, 'task');

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* <div className={styles.userpic}>P</div> */}
        {/* { <img className={styles.userpic} alt='userpic' src=''/> } */}
        {/* <p className={styles.title}>Test</p>
                <div className={styles.toolbar_container} >
                    <p className={styles.date}>12:44</p>
                    <div className={styles.sort}>Low</div>
                    <UpDateTaskBtn  id={'644d2aa23459f2c60583fc95'}/>  </div> */}

        <p className={styles.title}>
          Testsfjhgljskdhglsdjsfvlsdnflkvjnsldfknvlkdfjsnvlkjdfsnlvkjnsdffhglsjkdhfg
        </p>
        <div className={styles.meta}>
          <div className={styles.task_info}>
            <div className={styles.userpic}>P</div>
            {/* <img className={styles.userpic} alt='userpic' src=''/> */}
            <div className={styles.sort}>Low</div>
          </div>
          <TaskToolbar />
        </div>
      </div>
    </div>
  );
};

export default TaskColumnCard;
