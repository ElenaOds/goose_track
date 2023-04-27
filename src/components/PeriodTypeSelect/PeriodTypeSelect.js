import { Link, Outlet  } from "react-router-dom";
import { Suspense } from 'react';
import {  format } from "date-fns";

const PeriodTypeSelect = () => {
  
    const currentDate = format(Date.now(), 'MMMMyyyy');
    const currentDay = format(Date.now(), 'ddMMMMyyyy');

    return (
        <>
        <button><Link to={`/calendar/month/${currentDate}`}>Month</Link></button>
        <button><Link to={`/calendar/day/${currentDay}`}>Day</Link></button>
        <Suspense fallback={null}>
        <Outlet />
      </Suspense>
        </>
    )
}

export default PeriodTypeSelect;