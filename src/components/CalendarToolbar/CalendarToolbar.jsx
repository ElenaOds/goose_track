import { useLocation } from 'react-router-dom';
import { PeriodPaginator } from '../PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from '../PeriodTypeSelect/PeriodTypeSelect';
import styles from './CalendarToolbar.module.css';

const CalendarToolbar = () => {
  const location = useLocation();
  let activePage;

  if (location.pathname.includes('month')) {
    activePage = 'month';
  }

  if (location.pathname.includes('day')) {
    activePage = 'day';
  }

  return (
    <div className={styles.wrapper}>
      <PeriodPaginator activePage={activePage} />
      <PeriodTypeSelect activePage={activePage} />
    </div>
  );
};

export default CalendarToolbar;
