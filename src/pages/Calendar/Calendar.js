import { format } from "date-fns";
import { useEffect, useState, Suspense} from "react";
import { useNavigate, Outlet  } from "react-router-dom";
import CalendarToolbar from "../../components/CalendarToolbar/CalendarToolbar";
import styles from './Calendar.module.css';

const Calendar = () => {
  const [isActivePage, setActivePage] = useState(false);

  const navigate = useNavigate();
  const currentDate = Date.now();
  const formattedCurrentDate = format(currentDate, 'MMMM');

  useEffect(() => {
  navigate(`/calendar/month/${formattedCurrentDate}`);
}, [navigate,formattedCurrentDate]);
  
const doActiveDate = () => {
  setActivePage(false);
};
const doActiveMonth= () => {
  setActivePage(true);
};  

return (
    <div className={styles.container}>
       <CalendarToolbar isActivePage={isActivePage} doActiveMonth={doActiveMonth} doActiveDate={doActiveDate}/>  
       <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Calendar;
