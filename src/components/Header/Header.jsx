import styles from './Header.module.css';

import PropTypes from 'prop-types';

// import { selectTask } from '';
// import { useSelector } from 'react-redux';

import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';

import { ReactComponent as Burger } from '../../icons/menu.svg';
import { ReactComponent as LogoHeader} from '../../icons/logoheader.svg';

export const Header = ({isActivPage}) => {
  // const task = useSelector(selectTask); 
  //  индикатор наличия тасок на этот день . переделать когда будет готов глобальный стейт на таски
  const task='';

  return (
    <div className={styles.header}>
      <div className={styles.flex}>        
        {isActivPage === false 
        ?( task===null
          ?<div className={styles.flex}>
            <LogoHeader className={styles.logo} />
            <div className={styles.title}>
              <p>Calendar</p>
              <p className={styles.text}>
                <span className={styles.textinline}>Let go </span>of the past
                and focus on the present!
              </p>
            </div>
          </div>
          :<p>Calendar</p>) 
        : (<p className={styles.titel}>User Profiler</p>)}
        <button className={styles.button} type="button">
          <Burger className={styles.burger} />
        </button>
      </div>
      <div className={styles.flex}>
        <ThemeToggler />
        <UserInfo />
      </div>      
    </div>
  );
};

Header.propTypes = {
  isActivPage: PropTypes.bool,
};
