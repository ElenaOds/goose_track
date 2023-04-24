import { NavLink } from 'react-router-dom';
import { ReactComponent as IconUser } from '../../icons/icon-user.svg';
import { ReactComponent as IconCalendar } from '../../icons/icon-calendar.svg';
import styles from './UserNav.module.css';
import PropTypes from "prop-types";

export const UserNav = ({changePage}) => {
  return (
    <>
      <h3 className={styles.heading}>User Panel</h3>

      <div className={styles.userNav}>
        <NavLink
          onClick={changePage[1]}
          to="/account"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          <IconUser
            className={({ isActive }) =>
              isActive ? styles.activeIcon : styles.icon
            }
          />
          My Account
        </NavLink>

        <NavLink
          onClick={changePage[0]}
          to="/calendar"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          <IconCalendar
            className={({ isActive }) =>
              isActive ? styles.activeIcon : styles.icon
            }
          />
          Calendar
        </NavLink>
      </div>
    </>
  );
};

UserNav.propTypes = {        
  changePage: PropTypes.array  
}
