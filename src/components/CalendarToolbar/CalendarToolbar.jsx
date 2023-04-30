import { PeriodPaginator } from '../PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from '../PeriodTypeSelect/PeriodTypeSelect';
import styles from './CalendarToolbar.module.css';

const CalendarToolbar = ({ isActivePage, doActiveMonth, doActiveDate, handleRightClick,handleLeftClick}) => {
  return (
    <div className={styles.wrapper}>
      <PeriodPaginator isActivePage={isActivePage} handleRightClick = {handleRightClick} handleLeftClick = {handleLeftClick} />
      <PeriodTypeSelect
        doActiveMonth={doActiveMonth}
        doActiveDate={doActiveDate}
      />
    </div>
  );
};

export default CalendarToolbar;
