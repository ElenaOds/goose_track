import { NavLink  } from "react-router-dom";
import {  format } from "date-fns";

const PeriodTypeSelect = () => {
  
    const currentDate = format(Date.now(), 'MMMMyyyy');
    const currentDay = format(Date.now(), 'ddMMMMyyyy');

    return (
        <>
        <button><NavLink to={`/calendar/month/${currentDate}`}>Month</NavLink></button>
        <button><NavLink to={`/calendar/day/${currentDay}`}>Day</NavLink></button>
        </>
    )
}

export default PeriodTypeSelect;