import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import styles from './ChosenDay.module.css';
import { useEffect, useState } from 'react';
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'redux/tasks/tasks.operations';
import { useDate } from 'hooks/useDate';

const ChosenDay = () => {
  const formattedDate = useDate();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getDaysOfWeek = () => {
    if (screenWidth >= 768) {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    } else {
      return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
  };

  const from = format(formattedDate, 'yyyy-MM-dd');
  const to = format(formattedDate, 'yyyy-MM-dd');

  useEffect(() => {
    const data = {
      from,
      to,
    };

    dispatch(get(data));

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, from, to]);

  const selectDay = formattedDate;

  const currentDayOfWeek = selectDay.getDay();
  const [selectedDay, setSelectedDay] = useState(new Date(formattedDate));
  const days = [];

  const handleDayClick = date => {
    setSelectedDay(date);
    date = new Date(date);
    const formattedDate = format(date, 'ddMMMMyyyy');
    const result = formattedDate.charAt(0) + formattedDate.slice(1);
    navigate(`/calendar/day/${result}`);
  };

  for (let i = 0; i < 7; i++) {
    const date = new Date(selectDay);
    date.setDate(
      selectDay.getDate() +
        i -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1)
    );

    const isDaySelected =
      selectedDay &&
      selectedDay.getDate() &&
      selectDay.getDate() === date.getDate();

    days.push(
      <div className={styles.day} key={i} onClick={() => handleDayClick(date)}>
        <span className={styles.dayOfWeek}>
          {getDaysOfWeek()[date.getDay()]}
        </span>
        <span className={`${isDaySelected ? styles.selectedDay : styles.date} `}>
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
