import styles from './CalendarTable.module.css';
import {AddTaskBtn} from 'components/AddTaskBtn/AddTaskBtn';
const { getDate, format } = require("date-fns");

export default function CalendarTable({currentDate,handleRightClick,handleLeftClick,weeksList}) {

  return (
    <div className = {styles.container}>
    <div className={styles.month}>
      <h1 className={styles.month_name}>{format(currentDate, 'LLLL yyyy')}</h1>
      <button type='button' className = {styles.month_buttons} onClick ={handleLeftClick} >left</button>
      <button type='button' className = {styles.month_buttons} onClick ={handleRightClick}>rigth</button>
    </div>
    <div className = {styles.days}>
      <p className = {styles.days_text}>Mon</p>
      <p className = {styles.days_text}>Tue</p>
      <p className = {styles.days_text}>Wed</p>
      <p className = {styles.days_text}>Thu</p>
      <p className = {styles.days_text}>Fri</p>
      <p className = {styles.days_weekends}>Sat</p>
      <p className = {styles.days_weekends}>Sun</p>

      <p className = {styles.days_small_text}>M</p>
      <p className = {styles.days_small_text}>T</p>
      <p className = {styles.days_small_text}>W</p>
      <p className = {styles.days_small_text}>T</p>
      <p className = {styles.days_small_text}>F</p>
      <p className = {styles.days_small_weekends}>S</p>
      <p className = {styles.days_small_weekends}>S</p>

      
    </div>
    <div className={styles.datesInCalendar}>
        {weeksList.map((week) => {
          return (
            <div key={week} className={styles.week}>
              {week.map((day) => { //! add a key
                return (
                  <div className={styles.oneDay}>  
                  
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
