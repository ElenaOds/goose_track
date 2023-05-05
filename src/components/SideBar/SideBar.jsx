import { UserNav } from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import styles from './SideBar.module.css';
import { ReactComponent as GooseLogo } from '../../icons/goosesidebar.svg';
import { ReactComponent as IconClose } from '../../icons/icon-close.svg';
import PropTypes from 'prop-types';

const SideBar = ({doActiveCalendar,doActiveAccount,toggleSidebar,isOpenSidebarMobile }) => { 

  const className = isOpenSidebarMobile ? styles.container_1 : styles.container_2;

  return (
    <>     
      <div className={className}>
        <div>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <GooseLogo className={styles.logo} />
              <h1 className={styles.heading}>
                G<span className={styles.headingSpecial}>oo</span>seTrack
              </h1>
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={toggleSidebar}
            >
              <IconClose className={styles.close} />
            </button>
          </div>

          <UserNav doActiveCalendar={doActiveCalendar} doActiveAccount={doActiveAccount} toggleSidebar={toggleSidebar} />
        </div>

        <LogoutBtn className={styles.lgButton} />
      </div>
    </>
  );
};

export default SideBar;

SideBar.propTypes = {
  changePage: PropTypes.array,
};
