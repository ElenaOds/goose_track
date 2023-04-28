import { format } from "date-fns";
import { useEffect, Suspense} from "react";
import { useNavigate, Outlet  } from "react-router-dom";
import CalendarToolbar from "../../components/CalendarToolbar/CalendarToolbar";
import styles from './Calendar.module.css';

const Calendar = () => {
  const navigate = useNavigate();
  const currentDate = Date.now();
  const formattedCurrentDate = format(currentDate, 'MMMM');
useEffect(() => {
  navigate(`/calendar/month/${formattedCurrentDate}`);
}, [navigate,formattedCurrentDate]);
  return (
    <div className={styles.container}>
       <CalendarToolbar/>  
       <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Calendar;
