import {  format } from "date-fns";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CalendarToolbar from "../../components/CalendarToolbar/CalendarToolbar";
import styles from './Calendar.module.css';

const Calendar = () => {
 
  const currentDate = format(Date.now(), 'MMMMyyyy');
    const navigate = useNavigate();

  
  useEffect(() => {
    navigate(`/calendar/month/${currentDate}`);
  }, [navigate, currentDate]);

  
  return (
    <div className={styles.container}>
       <CalendarToolbar/>  
    </div>
  );
};

export default Calendar;