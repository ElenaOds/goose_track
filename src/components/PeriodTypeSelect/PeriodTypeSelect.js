import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import styles from './PeriodTypeSelect.module.css';
import { useDate } from 'hooks/useDate';

export const PeriodTypeSelect = ({ doActiveMonth, doActiveDate }) => {
  const urlDate = useDate();

  const currentDate = format(urlDate, 'ddMMMMyyyy');
  const currentDay = format(urlDate, 'ddMMMMyyyy');

  return (
    <div className={styles.periodTypeSelectMarkUp}>
      <NavLink
        onClick={doActiveMonth}
        to={`/calendar/month/${currentDate}`}
        className={({ isActive }) =>
          isActive ? styles.activeLink_month : styles.navLink_month
        }
      >
        Month
      </NavLink>
      <NavLink
        onClick={doActiveDate}
        to={`/calendar/day/${currentDay}`}
        className={({ isActive }) =>
          isActive ? styles.activeLink_day : styles.navLink_day
        }
      >
        Day
      </NavLink>
    </div>
  );
};

PeriodTypeSelect.propTypes = {
  changePage: PropTypes.array,
};
