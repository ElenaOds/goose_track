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
  const navigate = useNavigate();

  const handleLeftClick = () => {
    setState(prevState => ({...prevState, currentDate: addMonths(prevState.currentDate, -1), month: prevState.month - 1}));
    navigate(`/calendar/month/${format(state.currentDate, 'ddMMMyyyy')}`)

  }
  const handleRightClick = () => {
    setState(prevState => ({...prevState, currentDate: addMonths(prevState.currentDate, 1), month: prevState.month + 1}));
    navigate(`/calendar/month/${format(state.currentDate, 'ddMMMyyyy')}`)

  }

  const location = useLocation();

  const formattedCurrentDate = format(state.currentDate, 'MMMMu');

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${formattedCurrentDate}`);
      return
    }
    
  }, [formattedCurrentDate, navigate, location.pathname]);

  // useEffect(() => {
  //     if (params.currentDate !== state.currentDate) {
  //       console.log('alarm');
        
        
  //     }
  // }, [params.currentDate,state.currentDate]);
  


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
        currentDate = {state.currentDate}
        setState = {setState}
      />
      <Suspense fallback={null}>
        <Outlet context={[state]} />
      </Suspense>
    </div>
  );
};

export default Calendar;
