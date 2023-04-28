import { NavLink  } from "react-router-dom";
import {  format } from "date-fns";
import styles from "./PeriodTypeSelect.module.css"

const PeriodTypeSelect = () => {
  
    const currentDate = format(Date.now(), 'MMMM');
    const currentDay = format(Date.now(), 'ddMMMMyyyy');

  
  return (   
    <div className={styles.periodTypeSelectMarkUp}>
    <button className={styles.btnMonth}><NavLink to={`/calendar/month/${currentDate}`} className={styles.text}>Month</NavLink></button>
    <button className={styles.btnDay}><NavLink to={`/calendar/day/${currentDay}`} className={styles.text}>Day</NavLink></button>
    </div>   
    )
}

export default PeriodTypeSelect;

