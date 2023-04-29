import styles from './DayCalendarHead.module.css';
import { v4 as uuidv4 } from 'uuid';

const DayCalendarHead = ({ days }) => {
  return (
    <>
      <ul className={styles.list}>
        {days.map(items => (
          <li className={styles.item} key={uuidv4()}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DayCalendarHead;
