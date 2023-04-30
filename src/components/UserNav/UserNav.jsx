import { NavLink } from 'react-router-dom';
import { ReactComponent as IconUser } from '../../icons/icon-user.svg';
import { ReactComponent as IconCalendar } from '../../icons/icon-calendar.svg';
import styles from './UserNav.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const UserNav = ({ doActiveCalendar, doActiveAccount }) => {
  const [active, setActive] = useState();

  const handleClick = event => {
    setActive(event.currentTarget.id);

    if (event.currentTarget.id === 'account') {
      return doActiveAccount();
    } else if (event.currentTarget.id === 'calendar') {
      return doActiveCalendar();
    }
  };

  return (
    <>
      <h3 className={styles.heading}>User Panel</h3>

      <div className={styles.userNav}>
        <NavLink
          onClick={handleClick}
          to="/account"
          id={'account'}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          <IconUser
            className={
              active === 'account' ? `${styles.active}` : `${styles.icon}`
            }
          />
          My Account
        </NavLink>

        <NavLink
          onClick={handleClick}
          to="/calendar"
          id={'calendar'}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          <IconCalendar
            className={
              active === 'calendar' ? `${styles.active}` : `${styles.icon}`
            }
          />
          Calendar
        </NavLink>
      </div>
    </>
  );
};

UserNav.propTypes = {
  changePage: PropTypes.array,
};
