import { format } from 'date-fns';
import Media from 'react-media';
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
          <Media query='(min-width: 768px)'>
        {matches => {
          return matches ?  format(week, 'eee') : format(week, 'eeeee');
        }}
      </Media> 
        </p>
      ))}
    </div>
  );
};

export default MonthCalendarHead;
