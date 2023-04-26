import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';
import styles from './Header.module.css';
// import { ReactComponent as Burger } from '../../icons/menu.svg';

import { ReactComponent as LogoHeader} from '../../icons/logoheader.svg';
import PropTypes from 'prop-types';

export const Header = ({ isActivPage }) => {


// const openMenu = () => {
  //   console.log('Кнопка будет открывать модальное окно с сайтбар')
  // };


  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  // burger

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
        {/* <button className={styles.button} type="button">
          <Burger className={styles.burger} />
        </button> */}
      </div>
      <div className={styles.inner}>
        <ThemeToggler />
        <UserInfo />
      </div>      
    </div>
  );
};

Header.propTypes = {
  isActivPage: PropTypes.bool,
};
