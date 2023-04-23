
export const splitIntoWeeks = (days) =>  {
    const weeks = [];
    let week = [];
  
    days.forEach((day, index) => {
      week.push(day);
      if ((index + 1) % 7 === 0 || index === days.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
  
    return weeks;
  }