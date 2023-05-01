const { useLocation } = require('react-router-dom');

export const useDate = () => {
  const location = useLocation();
  const getMonthNumber = monthName => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    for (let i = 0; i <= 12; i++) {
      if (monthName === months[i]) {
        let number = i + 1;
        return `0${number}`;
      }
    }
  };

  const urlDate =
    location.pathname.split('/')[location.pathname.split('/').length - 1];

  const day = urlDate.slice(0, 2);
  const month = urlDate.slice(2, urlDate.length - 4);
  const monthNumber = getMonthNumber(month);
  const year = urlDate.slice(urlDate.length - 4, urlDate.length);

  const date = `${year}-${monthNumber}-${day}`;

  //   const dateDate = Date(date);

  const parsedDate = Date.parse(date);

  return parsedDate;
};
