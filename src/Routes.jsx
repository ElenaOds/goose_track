import { format } from 'date-fns';
import { Navigate } from 'react-router-dom';


const monthForLink = format(Date.now(), 'MMMMyyyy');
const dayForLink = format(Date.now(), 'ddMMMMyyyy');

export const CalendarRoute = () => {
  return <Navigate to={`/calendar/month/${monthForLink}`} replace />;
};

export const DayRoute = () => {
  return <Navigate to={`/calendar/day/${dayForLink}`} replace />;
};