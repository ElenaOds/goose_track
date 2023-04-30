import { format } from 'date-fns';
import { useEffect, useState, Suspense } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import CalendarToolbar from '../../components/CalendarToolbar/CalendarToolbar';
import styles from './Calendar.module.css';

const Calendar = () => {
  const [isActivePage, setActivePage] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const currentDate = Date.now();
  const formattedCurrentDate = format(currentDate, 'MMMMu');

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${formattedCurrentDate}`);
    }
  }, [formattedCurrentDate, navigate, location.pathname]);

  const doActiveDate = () => {
    setActivePage(false);
  };
  const doActiveMonth = () => {
    setActivePage(true);
  };

  return (
    <div className={styles.container}>
      <CalendarToolbar
        isActivePage={isActivePage}
        doActiveMonth={doActiveMonth}
        doActiveDate={doActiveDate}
      />
      <Suspense fallback={null}>
        <Outlet contex={{ isActivePage, doActiveMonth, doActiveDate }} />
      </Suspense>
    </div>
  );
};

export default Calendar;
