import styles from './CalendarTable.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'redux/tasks/tasks.operations';
import { selectTaskList } from 'redux/tasks/tasks.selectors';
const { getDate, format, addMonths } = require("date-fns");

export default function CalendarTable({weeksList}) {
  const dispatch = useDispatch();

  const currentDate = Date.now();
  const from  = format(currentDate, "yyyy-MM-dd");
  const to = format(addMonths(currentDate, 1), "yyyy-MM-dd")

  useEffect(() => {
    const data = {
      from,
      to
    }
    dispatch(get(data));
  }, [dispatch, from, to]);

  const select = useSelector(selectTaskList);
  
  

  const handeClick = () => {
    
  }

  return (
    <div className = {styles.container}>
    <div className={styles.datesInCalendar}>
        {weeksList.map((week) => {
          return (
            <div key={week} className={styles.week}>
              {week.map((day) => {
                const numberDay = getDate(day)
                
                const task = select.find((task) => {
                  const date = new Date(task.date); 
                  const days = date.getUTCDate();  
                  return days === numberDay;
                });
                const priorityColors = {
                  low: '#72C2F8',
                  medium: '#F3B249',
                  high: '#EA3D65'
                };
                let taskColor = priorityColors[task?.priority]
                const taskStyle = { backgroundColor: taskColor };
                return (
                  <div className={styles.oneDay} key = {uuidv4()} onClick = {handeClick}>  
                    {day ? <div><p className={styles.datesInCalendar_date}>{numberDay}</p>
                      <div className={styles.task} style = {taskStyle}>
                        {task && <p className={styles.task_text}>{task.title}</p>}
                        </div>
                      </div> 
                      : null} 
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
     
    </div>
   
  );
}
