import { format } from 'date-fns';
import styles from './MonthCalendarHead.module.css';

const MonthCalendarHead = ({ totalDays }) => {
  const weeks = (date => {
    const weeks = [];
    for (let day = 0; day < 7; day++) {
      weeks.push(date[day]);
    }
    return weeks;
  })(totalDays);

  return (
    <div className={styles.days}>
      {weeks.map(week => (
        <p key={week} className={styles.days_text}>
          {format(week, 'eee')}
        </p>
      ))}
    </div>
  );

  // return (
  //   <div className={styles.days}>
  //     <p className={styles.days_text}>Mon</p>
  //     <p className={styles.days_text}>Tue</p>
  //     <p className={styles.days_text}>Wed</p>
  //     <p className={styles.days_text}>Thu</p>
  //     <p className={styles.days_text}>Fri</p>
  //     <p className={styles.days_weekends}>Sat</p>
  //     <p className={styles.days_weekends}>Sun</p>

  //     <p className={styles.days_small_text}>M</p>
  //     <p className={styles.days_small_text}>T</p>
  //     <p className={styles.days_small_text}>W</p>
  //     <p className={styles.days_small_text}>T</p>
  //     <p className={styles.days_small_text}>F</p>
  //     <p className={styles.days_small_weekends}>S</p>
  //     <p className={styles.days_small_weekends}>S</p>
  //   </div>
  // );
};

export default MonthCalendarHead;
