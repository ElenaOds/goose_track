import { format, subDays, addDays } from 'date-fns';
import { useState } from 'react';
import { ReactComponent as IconArrowRight } from '../../icons/icon-arrow-right.svg';
import { ReactComponent as IconArrowLeft } from '../../icons/icon-arrow-left.svg';
import styles from './PeriodPaginator.module.css';
import { useNavigate, useParams } from 'react-router-dom';

export const PeriodPaginator = ({
  isActivePage,
  handleLeftClick,
  handleRightClick,
  currentDate,
  setState,
}) => {
  const [activeBtn, setActiveBtn] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  const handleNextDay = event => {
    setActiveBtn('next');
    setState(prevState => ({
      ...prevState,
      currentDate: addDays(currentDate, 1),
    }));
    navigate(`/calendar/day/${format(currentDate, 'ddMMMyyyy')}`);
  };

  const handlePrevDay = () => {
    setActiveBtn('prev');
    setState(prevState => ({
      ...prevState,
      currentDate: subDays(currentDate, 1),
    }));
    navigate(`/calendar/day/${format(currentDate, 'ddMMMyyyy')}`);
  };

  return (
    <div className={styles.wrapper}>
      {isActivePage ? (
        <>
          <div className={styles.name_container}>
            <h1 className={styles.name}>
              {format(new Date(params.currentDate), 'd MMM yyyy')}
            </h1>
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
            <h1 className={styles.name}>
              {format(new Date(currentDate), 'd MMM yyyy')}
            </h1>
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
