import {  addMonths,format } from "date-fns";
import { useState } from "react";


import styles from './PeriodPaginator.module.css'
const PeriodPaginator = () => {
        
  const [month, setMonth] = useState(0); //! take out
  const [currentDate, setCurrentDate] = useState(new Date());

  
  const handleLeftClick = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, -1));
    setMonth(month - 1)
    
  }
  const handleRightClick = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, +1));

    setMonth(month + 1)
  }
    
    return (
    <div className={styles.month}>
      <div className={styles.month_markUp}>
      <h1 className={styles.month_name}>{format(currentDate, 'LLLL yyyy')}</h1>
      </div>
      <button type='button' className = {styles.month_buttons} onClick ={handleLeftClick}>Left</button>
      <button type='button' className = {styles.month_buttons} onClick ={handleRightClick}>Rigth</button>
    </div>
    );
};

export default PeriodPaginator;