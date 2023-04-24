import CalendarTable from "../../components/CalendarTable/CalendarTable";
import styles from './Calendar.module.css';

const Calendar = () => {
  return (
    <div className={styles.container}>
      {/* <h1>Calendar</h1> */}
      <CalendarTable/>
    </div>
  );
};

export default Calendar;
