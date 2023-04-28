import styles from './CalendarTable.module.css';
import { v4 as uuidv4 } from 'uuid';
import {AddTaskBtn} from 'components/AddTaskBtn/AddTaskBtn';
const { getDate } = require("date-fns");

export default function CalendarTable({weeksList}) {

  return (
    <div className = {styles.container}>
    <div className={styles.datesInCalendar}>
        {weeksList.map((week) => {
          return (
            <div key={week} className={styles.week}>
              {week.map((day) => { //! add a key
                return (
                  <div className={styles.oneDay} key = {uuidv4()}>  
                  
                    {day ? <div><p className={styles.datesInCalendar_date}>{getDate(day)}</p>
                      <div className={styles.task}>
                        <p className={styles.task_text}>Learn how to use the forms</p>  
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
      <AddTaskBtn/>
    </div>
   
  );
}
