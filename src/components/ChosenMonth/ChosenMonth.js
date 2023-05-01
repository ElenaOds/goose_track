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

  // const [month, setMonth] = useState(0); //! take out
  // const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const days = state.month === 0 ? daysList : nextMonth(state.month);

    const calendarDays = createCalendarDays(days);
    const weeksList = splitIntoWeeks(calendarDays);
    setWeeksList(weeksList);
  }, [state.month]);

  // const handleLeftClick = () => {
  //   setCurrentDate((prevMonth) => addMonths(prevMonth, -1));
  //   setMonth(month - 1)

  // }
  // const handleRightClick = () => {
  //   setCurrentDate((prevMonth) => addMonths(prevMonth, +1));

  //   setMonth(month + 1)

  // }
  return (
    <div className={styles.container}>
      <p>Chosen month</p>
      <MonthCalendarHead />
      <CalendarTable weeksList={weeksList} />
    </div>
  );
};

export default ChosenMonth;
