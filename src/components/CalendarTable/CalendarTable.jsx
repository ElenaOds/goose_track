import styles from './CalendarTable.module.css';
import { selectTaskList } from 'redux/tasks/tasks.selectors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

export const CalendarTable = ({ totalDays }) => {
  const navigate = useNavigate();
  const taskList = useSelector(selectTaskList);

  const handleClick = date => {
    date = new Date(date);
    const formattedDate = format(date, 'ddMMMMyyyy');
    navigate(`/calendar/day/${formattedDate}`);
  };

  return (
    <div className={styles.calendar}>
      {totalDays.map(date => {
        const task = taskList.find(task => {
          const taskDay = new Date(task.date).getDate();
          const taskMonth = new Date(task.date).getMonth();
          const currentDay = date.getDate();
          const currentMonth = date.getMonth();
          return currentDay === taskDay && currentMonth === taskMonth;
        });

        return (
          <div
            className={styles.cell}
            key={date}
            onClick={() => handleClick(date)}
          >
            <p className={styles.day_number}>{format(date, 'd')}</p>
            {task && <p>{task.title}</p>}
          </div>
        );
      })}
    </div>
  );
};
