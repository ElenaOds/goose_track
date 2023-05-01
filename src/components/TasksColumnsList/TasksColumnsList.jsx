import TasksColumn from "components/TasksColumn/TasksColumn";
import styles from './TasksColumnsList.module.css';
import { useSelector } from "react-redux";
import {selectUser} from 'redux/user/user.selectors';




const TasksColumnsList = () => {
  const profile = useSelector(selectUser);  
  console.log(profile,"profile");
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
        taskTitle: 'Sed do eiusmod tempor',
        taskTime: '03:15',
        taskSort: 'medium'
      },
      {
        taskTitle: 'Sed do eiusmod tempor',
        taskTime: '03:15',
        taskSort: 'medium'
      },
      {
        taskTitle: 'Sed do eiusmod tempor',
        taskTime: '03:15',
        taskSort: 'medium'
      },
      {
        taskTitle: 'Sed do eiusmod tempor',
        taskTime: '03:15',
        taskSort: 'medium'
      },
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
