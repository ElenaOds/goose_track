// import { selectTaskList } from 'redux/tasks/tasks.selectors';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { format } from 'date-fns';
// import styles from './CalendarTable.module.css';

// export const CalendarTable = ({ totalDays }) => {
//   const navigate = useNavigate();
//   const taskList = useSelector(selectTaskList);

//   const handleClick = date => {
//     date = new Date(date);
//     const formattedDate = format(date, 'ddMMMMyyyy');
//     navigate(`/calendar/day/${formattedDate}`);
//   };

//   return (
//     <div className={styles.calendar}>
//       {totalDays.map(date => {
//         const task = taskList.find(task => {
//           const taskDay = new Date(task.date).getDate();
//           const taskMonth = new Date(task.date).getMonth();
//           const currentDay = date.getDate();
//           const currentMonth = date.getMonth();
//           return currentDay === taskDay && currentMonth === taskMonth;
//         });

//         return (
//           <div
//             className={styles.cell}
//             key={date}
//             onClick={() => handleClick(date)}
//           >
//             <div className={styles.day_number_wrapper}>
//               <p className={styles.day_number}>{format(date, 'd')}</p>
//             </div>
//             <ul className={styles.task_wrapper}>
//               {task && (
//                 <li className={styles.task} priority={task.priority}>
//                   <p className={styles.task_text}>{task.title}</p>
//                 </li>
//               )}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

import { selectTaskList } from 'redux/tasks/tasks.selectors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format, isToday } from 'date-fns';
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
      {totalDays.map((date, index) => {
        const tasks = taskList.filter(task => {
          const taskDay = new Date(task.date).getDate();
          const taskMonth = new Date(task.date).getMonth();
          const currentDay = date.getDate();
          const currentMonth = date.getMonth();
          return currentDay === taskDay && currentMonth === taskMonth;
        });
        const isCurrentDay = isToday(date); // перевіряємо, чи ця дата є сьогоднішньою
        return (
          <div
            className={styles.cell}
            key={index}
            onClick={() => handleClick(date)}
          >
            <div className={`${styles.day_number_wrapper} ${isCurrentDay ? styles.current_day : ''}`}>
              <p className={styles.day_number}>{format(date, 'd')}</p>
            </div>
            <ul className={styles.task_wrapper}>
              {tasks.length <= 2 && (
                <li>
                  {tasks.map(({ id, title, priority }) => (
                    <p
                      key={id}
                      className={`${styles.task_title} ${
                        priority === 'low'
                          ? styles.task_low
                          : priority === 'medium'
                          ? styles.task_medium
                          : priority === 'high'
                          ? styles.task_high
                          : ''
                      }`}
                    >
                      {title.slice(0, 4)}
                      {title.length > 5 && '...'}
                    </p>
                  ))}
                </li>
              )}
              {tasks.length > 2 && (
                <li>
                  {tasks.map(({ id, priority }) => (
                    <div
                      key={id}
                      className={`${styles.task_point} ${
                        priority === 'low'
                          ? styles.task_low
                          : priority === 'medium'
                          ? styles.task_medium
                          : priority === 'high'
                          ? styles.task_high
                          : ''
                      }`}
                    />
                  ))}
                </li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
