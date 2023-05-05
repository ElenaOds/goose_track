const { useParams } = require('react-router-dom');

export const useDate = () => {
  const params = useParams();
  const date = new Date(params.currentDate);

  if (Object.prototype.toString.call(date) === '[object Date]') {

    if (isNaN(date)) {
    
      return new Date();
    } else {
      return date;
    }
  }
};
