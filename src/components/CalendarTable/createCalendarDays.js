// createCalendarDays.js
export const createCalendarDays = (daysList) => {
  const firstDay = daysList[0].getDay();
  const lastDay = daysList[daysList.length - 1].getDay();
  const leadingEmptyDays = firstDay === 0 ? 6 : firstDay - 1;
  const trailingEmptyDays = lastDay === 0 ? 0 : 7 - lastDay;

  const emptyDaysBefore = new Array(leadingEmptyDays).fill(null);
  const emptyDaysAfter = new Array(trailingEmptyDays).fill(null);

  return [...emptyDaysBefore, ...daysList, ...emptyDaysAfter];
};
