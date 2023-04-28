import { NavLink, Navigate  } from "react-router-dom";
import {  format } from "date-fns";
import styles from "./PeriodTypeSelect.module.css"

const PeriodTypeSelect = () => {
  
    const currentDate = format(Date.now(), 'MMMM');
    const currentDay = format(Date.now(), 'ddMMMMyyyy');

    const getActiveClass = ({ isActive }) => {
        return isActive ? <Navigate to={`/calendar/month/${currentDate}`} replace /> : <Navigate to={`/calendar/day/${currentDay}`} replace />
      };
      


  return (   
    <div className={styles.PeriodTypeSelectMarkUp}>
    <button className={styles.btnMonth}><NavLink to={`/calendar/month/${currentDate}`} className={getActiveClass}>Month</NavLink></button>
    <button className={styles.btnDay}><NavLink  to={`/calendar/day/${currentDay}`} className={getActiveClass}>Day</NavLink></button>
    </div>   
    )
}

export default PeriodTypeSelect;

