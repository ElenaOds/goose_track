import MonthCalendarHead from '../MonthCalendarHead/MonthCalendarHead';
import styles from './ChosenMonth.module.css';
import CalendarTable from '../CalendarTable/CalendarTable';
import { createCalendarDays } from '../CalendarTable/createCalendarDays';
import { daysList, nextMonth } from '../CalendarTable/getDays';
import { splitIntoWeeks } from '../CalendarTable/splitWeeks';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const ChosenMonth = () => {
  const [state] = useOutletContext();
  const [weeksList, setWeeksList] = useState([]);
  

  useEffect(() => {
    const days = state.month === 0 ? daysList : nextMonth(state.month);

    const calendarDays = createCalendarDays(days);
    const weeksList = splitIntoWeeks(calendarDays);
    setWeeksList(weeksList);
  }, [state.month]);

  
  return (
    <div className={styles.container}>
      <MonthCalendarHead />
      <CalendarTable weeksList={weeksList} />
     
    </div>
  );
};

export default ChosenMonth;
