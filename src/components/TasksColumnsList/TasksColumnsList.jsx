// import styles from './TasksColumnsList.module.css';
// import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';
// import {AddTaskBtn} from 'components/AddTaskBtn/AddTaskBtn';
// import {UpDateTaskBtn} from '../upDateTaskBtn/upDateTaskBtn';

// const TasksColumnsList = () => {
//   return (
//     <>
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <div className={styles.container}>
//             <p className={styles.title}>To do</p>
//             <AddIcon />
//           </div>         
//           <UpDateTaskBtn date={'2023-05-12'} id={'644d2b183459f2c60583fca2'}/>         
//           <AddTaskBtn  date={'2023-05-12'}/>   
//         </li>
//         <li className={styles.item}>
//           <div className={styles.container}>
//             <p className={styles.title}>In progress</p>
//             <AddIcon/>
//           </div>
//           <UpDateTaskBtn date={'2023-05-12'} id={'644d2b183459f2c60583fca2'}/>
//           <AddTaskBtn  date={'2023-05-12'}/>   
//         </li>
//         <li className={styles.item}>
//           <div className={styles.container}>
//             <p className={styles.title}>Done</p>
//             <AddIcon/>
//           </div>
//           <UpDateTaskBtn date={'2023-05-12'} id={'644d2b183459f2c60583fca2'}/>
//           <AddTaskBtn  date={'2023-05-12'}/>          
//         </li>
//       </ul>
//     </>
//   );
// };

// export default TasksColumnsList;
import TasksColumn from "components/TasksColumn/TasksColumn";
import styles from './TasksColumnsList.module.css';



const TasksColumnsList = () => {
  const tasks = [{
    name: 'To do', 
    tasks: [
      {
    taskTitle: 'Lorem ipsum', taskTime: '00:00', taskSort: 'medium' }, { taskTitle: 'Dolor sit amet', taskTime: '01:30', taskSort: 'high' }]
  },
  {
    name: 'In progress',
    tasks: [
      {
        taskTitle: 'Consectetur adipiscing elit',
        taskTime: '02:45',
        taskSort: 'low'
      },
      {
        taskTitle: 'Sed do eiusmod tempor',
        taskTime: '03:15',
        taskSort: 'medium'
      }
    ]
  },
  {
    name: 'Done',
    tasks: [
      {
        taskTitle: 'Ut enim ad minim veniam',
        taskTime: '04:00',
        taskSort: 'high'
      },
      {
        taskTitle: 'Quis nostrud exercitation',
        taskTime: '05:30',
        taskSort: 'low'
      }
    ]
  }
  ];
  const columns = tasks.map(task => (
    <TasksColumn 
      key={task.name} 
      columnTitle={task.name} 
      tasks={task.tasks} 
    />
  ));

  return <div className={styles.wrapper}>{columns}</div>;
};

export default TasksColumnsList;
