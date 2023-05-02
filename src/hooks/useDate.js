const { useParams } = require('react-router-dom');

export const useDate = () => {
  const params = useParams();
  const date = new Date(params.currentDate);

  if (Object.prototype.toString.call(date) === '[object Date]') {
    // it is a date

    if (isNaN(date)) {
      // d.getTime() or d.valueOf() will also work
      // date object is not valid
      return new Date();
    } else {
      // date object is valid
      return date;
    }
  }
};
