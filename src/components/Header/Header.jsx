import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';
import styles from './Header.module.css';
import { ReactComponent as Burger } from '../../icons/menu.svg';

import { ReactComponent as LogoHeader} from '../../icons/logoheader.svg';
import PropTypes from 'prop-types';

export const Header = ({isActivPage,toggleSidebar}) => {
  const task=null;
  
  return (
     <div className={styles.container}>
      
      <div className={styles.header}> 
       <div className={styles.burger}>
            <button className={styles.button} type="button" onClick={toggleSidebar}>
            <Burger className={styles.logo_burger} />
          </button>   
        </div>        
      {isActivPage === false 
      ?( task===null
        ?<div>
          <div className={styles.warning}>
            <LogoHeader className={styles.logo_header} /> 
            <div>
            <p>Calendar</p>
              <p className={styles.text}>
                <span className={styles.textinline}>Let go </span>of the past and focus on the present!
              </p> 
            </div>        
          </div>          
        </div>
          :<p className={styles.title}>Calendar</p>) 
        : (<p className={styles.title} >User Profiler</p>)}
                   
      <div className={styles.flex}>
        <ThemeToggler />
        <UserInfo />
      </div> 
    </div>      
   </div> 
  );
};

Header.propTypes = {
  isActivPage: PropTypes.bool,
};
