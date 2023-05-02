import { format, subDays, addDays } from 'date-fns';
import { useState } from 'react';
import { ReactComponent as IconArrowRight } from '../../icons/icon-arrow-right.svg';
import { ReactComponent as IconArrowLeft } from '../../icons/icon-arrow-left.svg';
import styles from './PeriodPaginator.module.css';
import { useNavigate } from 'react-router-dom';
import { useDate } from 'hooks/useDate';

export const PeriodPaginator = ({
  isActivePage,
  handleLeftClick,
  handleRightClick,
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
              onClick={handleLeftClick}
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
              onClick={handleRightClick}
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
