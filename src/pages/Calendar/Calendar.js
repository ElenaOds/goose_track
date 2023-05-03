import { format } from 'date-fns';
import { useEffect, useState, Suspense } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import CalendarToolbar from '../../components/CalendarToolbar/CalendarToolbar';
import styles from './Calendar.module.css';
import { useDate } from 'hooks/useDate';

const Calendar = () => {
  const [isActivePage, setIsActivePage] = useState(false);
  const navigate = useNavigate();
  const urlDate = useDate();
  const location = useLocation();
  const formattedCurrentDate = format(urlDate, 'MMMMu');

  // const handleLeftClick = () => {
  //   setState(prevState => ({
  //     ...prevState,
  //     currentDate: addMonths(prevState.currentDate, -1),
  //     month: prevState.month - 1,
  //   }));
  //   navigate(`/calendar/month/${format(state.currentDate, 'MMMyyyy')}`);
  // };
  // const handleRightClick = () => {
  //   setState(prevState => ({
  //     ...prevState,
  //     currentDate: addMonths(prevState.currentDate, 1),
  //     month: prevState.month + 1,
  //   }));
  //   navigate(`/calendar/month/${format(state.currentDate, 'MMMyyyy')}`);
  // };

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${formattedCurrentDate}`);
      return;
    }
  }, [formattedCurrentDate, navigate, location.pathname]);

  const doActiveDate = () => {
    setIsActivePage(false);
  };
  const doActiveMonth = () => {
    setIsActivePage(true);
  };

  return (
    <div className={styles.container}>
      <CalendarToolbar
        isActivePage={isActivePage}
        doActiveMonth={doActiveMonth}
        doActiveDate={doActiveDate}
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Calendar;
