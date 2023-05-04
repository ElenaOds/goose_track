import {
  format,
  startOfMonth,
  eachDayOfInterval,
  lastDayOfMonth,
  startOfWeek,
  lastDayOfWeek,
  addMonths,
} from 'date-fns';

import { useDate } from 'hooks/useDate';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from 'components/CalendarTable/CalendarTable';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'redux/tasks/tasks.operations';

export const ChosenMonth = () => {
  const dispatch = useDispatch();

  const urlDate = useDate();
  const firstDay = startOfMonth(urlDate);
  const lastDay = lastDayOfMonth(urlDate);
  const startDate = startOfWeek(firstDay, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(lastDay, { weekStartsOn: 1 });

  const totalDays = eachDayOfInterval({ start: startDate, end: endDate });

  const from = format(urlDate, 'yyyy-MM-dd');
  const to = format(addMonths(urlDate, 1), 'yyyy-MM-dd');

  useEffect(() => {
    const data = {
      from,
      to,
    };

    dispatch(get(data));
  }, [dispatch, from, to]);

  return (
    <>
      <div>
        <MonthCalendarHead totalDays={totalDays} />
        <CalendarTable totalDays={totalDays} />
      </div>
    </>
  );
};
