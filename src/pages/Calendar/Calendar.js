import { addMonths, format } from 'date-fns';
import { useEffect, useState, Suspense } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import CalendarToolbar from '../../components/CalendarToolbar/CalendarToolbar';
import styles from './Calendar.module.css';

const Calendar = () => {
  const [state, setState] = useState({
    isActivePage: false,
    currentDate: new Date(),
    month: 0
  });
 

  const handleLeftClick = () => {
    setState(prevState => ({...prevState, currentDate: addMonths(prevState.currentDate, -1), month: prevState.month - 1}));
    
  }
  const handleRightClick = () => {
    setState(prevState => ({...prevState, currentDate: addMonths(prevState.currentDate, 1), month: prevState.month + 1}));
  }

  const navigate = useNavigate();
  const location = useLocation();

  const formattedCurrentDate = format(state.currentDate, 'MMMMu');

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${formattedCurrentDate}`);
    }
  }, [formattedCurrentDate, navigate, location.pathname]);

  const doActiveDate = () => {
    setState(prevState => ({...prevState, isActivePage: false}));
  };
  const doActiveMonth = () => {
    setState(prevState => ({...prevState, isActivePage: true}));
  };

  return (
    <div className={styles.container}>
      <CalendarToolbar
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        isActivePage={state.isActivePage}
        doActiveMonth={doActiveMonth}
        doActiveDate={doActiveDate}
      />
      <Suspense fallback={null}>
        <Outlet context={[state]} />
      </Suspense>
    </div>
  );
};

export default Calendar;
