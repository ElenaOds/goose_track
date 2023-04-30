// import { format } from 'date-fns';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import styles from './ChosenDay.module.css';
import { useState } from 'react';
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { parse } from 'date-fns';
import { useParams } from 'react-router-dom';

const ChosenDay = () => {
  const { currentDay } = useParams();
  const formattedDate = parse(currentDay, 'dMMMMyyyy', new Date());

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const selectDay = formattedDate;

  const currentDayOfWeek = selectDay.getDay();
  const [selectedDay, setSelectedDay] = useState(selectDay);
  const days = [];

  const handleDayClick = date => {
    setSelectedDay(date);
  };
  console.log(selectedDay);

  for (let i = 0; i < 7; i++) {
    const date = new Date(selectDay);
    date.setDate(selectDay.getDate() + i - currentDayOfWeek);

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
