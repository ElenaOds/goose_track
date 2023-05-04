import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as IconUser } from '../../icons/icon-user.svg';
import { ReactComponent as IconCalendar } from '../../icons/icon-calendar.svg';
import styles from './UserNav.module.css';

export const UserNav = () => {
  const location = useLocation();

  return (
    <>
      <h3 className={styles.heading}>User Panel</h3>

      <div className={styles.userNav}>
        <NavLink
          to="/account"
          id={'account'}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          <IconUser
            className={
              location.pathname.includes('account')
                ? `${styles.active}`
                : `${styles.icon}`
            }
          />
          My Account
        </NavLink>

        <NavLink
          to="/calendar"
          id={'calendar'}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          <IconCalendar
            className={
              location.pathname.includes('calendar')
                ? `${styles.active}`
                : `${styles.icon}`
            }
          />
          Calendar
        </NavLink>
      </div>
    </>
  );
};
