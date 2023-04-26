import { UserNav } from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import styles from './SideBar.module.css';
import { ReactComponent as GooseLogo } from '../../icons/goosesidebar.svg';
import { ReactComponent as IconClose } from '../../icons/icon-close.svg';
import PropTypes from "prop-types";

const SideBar = ({changePage}) => {  
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <GooseLogo className={styles.logo} />
            <h1 className={styles.heading}>
              G<span className={styles.headingSpecial}>oo</span>seTrack
            </h1>
          </div>
          <IconClose className={styles.close} />
        </div>

        <UserNav changePage={changePage}/>
      </div>

      <LogoutBtn className={styles.lgButton}/>
    </div>
  );
};

export default SideBar;

SideBar.propTypes = {        
  changePage: PropTypes.array 
}