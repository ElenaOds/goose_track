// import { format } from 'date-fns';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import styles from './ChosenDay.module.css';

import { useState } from 'react';
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';

const ChosenDay = ({ selectDay }) => {
  // const currentDay = format(Date.now(), 'ddMMMMyyyy');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(`/calendar/day/${currentDay}`);
  // }, [navigate, currentDay]);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDate = selectDay ? new Date(selectDay) : new Date();

  const currentDayOfWeek = currentDate.getDay();
  const [selectedDay, setSelectedDay] = useState(currentDate);
  const days = [];

  const handleDayClick = date => {
    setSelectedDay(date);
  };
  console.log(selectedDay);

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i - currentDayOfWeek);

    const isDaySelected =
      selectedDay && selectedDay.getDate() === date.getDate();

    days.push(
      <div className={styles.day} key={i} onClick={() => handleDayClick(date)}>
        <span className={styles.dayOfWeek}>{daysOfWeek[date.getDay()]}</span>
        <span className={`${isDaySelected ? styles.selectedDay : ''} `}>
          {date.getDate()}
        </span>
      </div>
    );
  }
  return (
    <>
      <DayCalendarHead days={days} />
      <TasksColumnsList />
    </>
  );
};

export default ChosenDay;
