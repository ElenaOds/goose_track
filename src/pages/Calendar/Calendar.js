import { addMonths, format } from "date-fns";
import { useEffect, Suspense} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet  } from "react-router-dom";
import { get } from "redux/tasks/tasks.operations";
import { selectTaskList } from "redux/tasks/tasks.selectors";
import CalendarToolbar from "../../components/CalendarToolbar/CalendarToolbar";
import styles from './Calendar.module.css';

const Calendar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentDate = Date.now();
  const formattedCurrentDate = format(currentDate, 'MMMM');

  const from  = format(currentDate, "yyyy-MM-dd");
  const to = format(addMonths(currentDate, 1), "yyyy-MM-dd")
  
useEffect(() => {
  navigate(`/calendar/month/${formattedCurrentDate}`);
}, [navigate,formattedCurrentDate]);

  useEffect(() => {
    const data = {
      from,
      to
    }
    console.log('data: ', data);
    dispatch(get(data));
  }, [dispatch, from, to]);

  const select = useSelector(selectTaskList);
  console.log('select: ', select);

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
