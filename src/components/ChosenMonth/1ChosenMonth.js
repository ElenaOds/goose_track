// import MonthCalendarHead from '../MonthCalendarHead/MonthCalendarHead';
// import styles from './ChosenMonth.module.css';
// import CalendarTable from '../CalendarTable/1CalendarTable';
// import { createCalendarDays } from '../CalendarTable/createCalendarDays';
// import { daysList, nextMonth } from '../CalendarTable/getDays';
// import { splitIntoWeeks } from '../CalendarTable/splitWeeks';
// import { useEffect, useState } from 'react';
// import { useOutletContext } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { get } from 'redux/tasks/tasks.operations';
// import { useDate } from 'hooks/useDate';
// import { addMonths, format } from 'date-fns';

// const ChosenMonth = () => {
//   const [state] = useOutletContext();
//   const [weeksList, setWeeksList] = useState([]);

//   const dispatch = useDispatch();
//   const urlDate = useDate();

//   const from = format(urlDate, 'yyyy-MM-dd');
//   const to = format(addMonths(urlDate, 1), 'yyyy-MM-dd');

//   useEffect(() => {
//     const days = state.month === 0 ? daysList : nextMonth(state.month);

//     const calendarDays = createCalendarDays(days);
//     const weeksList = splitIntoWeeks(calendarDays);
//     setWeeksList(weeksList);

//     const data = {
//       from,
//       to,
//     };

//     dispatch(get(data));
//   }, [state.month, dispatch, from, to]);

//   return (
//     <div className={styles.container}>
//       <MonthCalendarHead />
//       <CalendarTable weeksList={weeksList} />
//     </div>
//   );
// };

// export default ChosenMonth;
