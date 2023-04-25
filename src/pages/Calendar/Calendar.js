
import { createCalendarDays } from "components/CalendarTable/createCalendarDays";
import { daysList, nextMonth } from "components/CalendarTable/getDays";
import { splitIntoWeeks } from "components/CalendarTable/splitWeeks";
import { addMonths, format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CalendarTable from "../../components/CalendarTable/CalendarTable";
import styles from './Calendar.module.css';

const Calendar = () => {
  const [weeksList, setWeeksList] = useState([]);
  const [month, setMonth] = useState(0); //! take out
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigate = useNavigate();

  const nameMonth = format(currentDate, 'LLLL').trim()

  const currentDay = format(currentDate, 'd');

  useEffect(() => {
    navigate(`/calendar/${nameMonth}/${currentDay}`);
  }, [nameMonth, navigate,currentDay]);
  
  useEffect(() => {
    const days = month === 0 ? daysList : nextMonth(month);
    
    const calendarDays = createCalendarDays(days);
    const weeksList = splitIntoWeeks(calendarDays);
    setWeeksList(weeksList);
    
  }, [month]);
  
  
  const handleLeftClick = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, -1));
    setMonth(month - 1)
    
  }
  const handleRightClick = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, +1));

    setMonth(month + 1)
    
  }
  return (
    <div className={styles.container}>
      <CalendarTable  currentDate = {currentDate} handleLeftClick = {handleLeftClick} handleRightClick = {handleRightClick} weeksList = {weeksList}/>
    </div>
  );
};

export default Calendar;


