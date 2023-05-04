import { selectTaskList } from 'redux/tasks/tasks.selectors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import styles from './CalendarTable.module.css';

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
            <div className={styles.day_number_wrapper}>
            <p className={styles.day_number}>{format(date, 'd')}</p>
            </div>
            <ul className={styles.task_wrapper}>
            {task && <li className={styles.task} priority={task.priority}><p className={styles.task_text}>{task.title}</p></li>}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
