const { eachDayOfInterval, startOfMonth, endOfMonth,addMonths } = require("date-fns");
// Получить текущую дату
const today = new Date();

const start = startOfMonth(today);
const end = endOfMonth(today);

export const daysList = eachDayOfInterval({ start, end });


export const nextMonth = (month) => { 
    const nextMonthStart = startOfMonth(addMonths(today, month));
    const nextMonthEnd = endOfMonth(nextMonthStart);
    const daysListNextMonth = eachDayOfInterval({ start:nextMonthStart, end:nextMonthEnd });
    return daysListNextMonth
}

 


