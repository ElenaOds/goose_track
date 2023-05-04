import { useLocation } from 'react-router-dom';
import { PeriodPaginator } from '../PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from '../PeriodTypeSelect/PeriodTypeSelect';
import styles from './CalendarToolbar.module.css';

const CalendarToolbar = () => {
  const location = useLocation();

  const activePage = arr => {
    let active;
    arr.map(page => {
      if (location.pathname.includes(page)) {
        active = page;
      }
      return active;
    });

    return active;
  };

  const pages = ['month', 'day'];

  return (
    <div className={styles.wrapper}>
      <PeriodPaginator activePage={activePage(pages)} />
      <PeriodTypeSelect activePage={activePage(pages)} />
    </div>
  );
};

export default CalendarToolbar;
