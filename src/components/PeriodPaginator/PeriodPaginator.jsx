import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';
import { useState } from 'react';
import { ReactComponent as IconArrowRight } from '../../icons/icon-arrow-right.svg';
import { ReactComponent as IconArrowLeft } from '../../icons/icon-arrow-left.svg';

import styles from './PeriodPaginator.module.css';
// import { useNavigate } from 'react-router-dom';

export const PeriodPaginator = ({ isActivePage }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeBtn, setActiveBtn] = useState('');

  // const navigate = useNavigate();

  const handleNextMonth = () => {
    setActiveBtn('next');
    setCurrentDate(addMonths(currentDate, 1));

    console.log(format(currentDate, 'ddMMMMyyyy'));
  };

  const handlePrevMonth = () => {
    setActiveBtn('prev');
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextDay = event => {
    setActiveBtn('next');
    setCurrentDate(addDays(currentDate, 1));
  };

  const handlePrevDay = () => {
    setActiveBtn('prev');
    setCurrentDate(subDays(currentDate, 1));
  };

  return (
    <div className={styles.wrapper}>
      {isActivePage ? (
        <>
          <div className={styles.name_container}>
            <h1 className={styles.name}>{format(currentDate, 'MMMM Y')}</h1>
          </div>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_left}`}
              type="button"
              onClick={handlePrevMonth}
            >
              <IconArrowLeft
                className={
                  activeBtn === 'prev'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
            <button
              className={`${styles.button} ${styles.button_right}`}
              type="button"
              id={'2'}
              onClick={handleNextMonth}
            >
              <IconArrowRight
                className={
                  activeBtn === 'next'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.name_container}>
            <h1 className={styles.name}>{format(currentDate, 'd MMMM Y')}</h1>
          </div>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_left}`}
              type="button"
              onClick={handlePrevDay}
            >
              <IconArrowLeft
                className={
                  activeBtn === 'prev'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
            <button
              className={`${styles.button} ${styles.button_right}`}
              type="button"
              onClick={handleNextDay}
            >
              <IconArrowRight
                className={
                  activeBtn === 'next'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
