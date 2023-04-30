import styles from './TasksColumnsList.module.css';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';
import {AddTaskBtn} from 'components/AddTaskBtn/AddTaskBtn';
import {UpDateTaskBtn} from '../upDateTaskBtn/upDateTaskBtn';

const TasksColumnsList = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.container}>
            <p className={styles.title}>To do</p>
            <AddIcon />
          </div>         
          <UpDateTaskBtn date={'2023-05-12'} id={'644d2b183459f2c60583fca2'}/>         
          <AddTaskBtn  date={'2023-05-12'}/>   
        </li>
        <li className={styles.item}>
          <div className={styles.container}>
            <p className={styles.title}>In progress</p>
            <AddIcon/>
          </div>
          <UpDateTaskBtn date={'2023-05-12'} id={'644d2b183459f2c60583fca2'}/>
          <AddTaskBtn  date={'2023-05-12'}/>   
        </li>
        <li className={styles.item}>
          <div className={styles.container}>
            <p className={styles.title}>Done</p>
            <AddIcon/>
          </div>
          <UpDateTaskBtn date={'2023-05-12'} id={'644d2b183459f2c60583fca2'}/>
          <AddTaskBtn  date={'2023-05-12'}/>          
        </li>
      </ul>
    </>
  );
};

export default TasksColumnsList;
