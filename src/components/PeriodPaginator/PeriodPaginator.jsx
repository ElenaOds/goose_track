import { format, subDays, addDays, addMonths, subMonths } from 'date-fns';
import { useState } from 'react';
import { ReactComponent as IconArrowRight } from '../../icons/icon-arrow-right.svg';
import { ReactComponent as IconArrowLeft } from '../../icons/icon-arrow-left.svg';
import styles from './PeriodPaginator.module.css';
import { useNavigate } from 'react-router-dom';
import { useDate } from 'hooks/useDate';

export const PeriodPaginator = ({
  isActivePage,
}) => {
  const [activeBtn, setActiveBtn] = useState('');

  const navigate = useNavigate();

  const urlDate = useDate();

  const handleNextDay = event => {
    setActiveBtn('next');

    const date = addDays(urlDate, 1);
    navigate(`/calendar/day/${format(date, 'ddMMMyyyy')}`);
  };

  const handlePrevDay = () => {
    setActiveBtn('prev');

    const date = subDays(urlDate, 1);
    navigate(`/calendar/day/${format(date, 'ddMMMyyyy')}`);
  };

  const handleNextMonth = () => {
    setActiveBtn('next');

    const date = addMonths(urlDate, 1);
    navigate(`/calendar/month/${format(date, 'MMMyyyy')}`);
  };

  const handlePrevMonth = () => {
    setActiveBtn('prev');

    const date = subMonths(urlDate, 1);
    navigate(`/calendar/month/${format(date, 'MMMyyyy')}`);
  };

  return (
    <div className={styles.wrapper}>
      {isActivePage ? (
        <>
          <div className={styles.name_container}>
            <h1 className={styles.name}>{format(urlDate, ' MMM yyyy')}</h1>
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
            <h1 className={styles.name}>{format(urlDate, 'd MMM yyyy')}</h1>
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
