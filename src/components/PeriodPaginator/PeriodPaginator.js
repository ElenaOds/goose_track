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
      <h1 className={styles.month_name}>{format(currentDate, 'LLLL yyyy')}</h1>
      <button type='button' className = {styles.month_buttons} onClick ={handleLeftClick} >left</button>
      <button type='button' className = {styles.month_buttons} onClick ={handleRightClick}>rigth</button>
    </div>
    );
};

export default PeriodPaginator;