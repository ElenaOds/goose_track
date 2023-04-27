import { Link  } from "react-router-dom";
import {  format } from "date-fns";

const PeriodTypeSelect = () => {
  
    const currentDate = format(Date.now(), 'MMMMyyyy');
    const currentDay = format(Date.now(), 'ddMMMMyyyy');

    return (
        <>
        <button><Link to={`/calendar/month/${currentDate}`}>Month</Link></button>
        <button><Link to={`/calendar/day/${currentDay}`}>Day</Link></button>
        </>
    )
}

export default PeriodTypeSelect;