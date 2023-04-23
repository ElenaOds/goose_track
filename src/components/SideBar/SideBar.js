import { UserNav } from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import styles from './SideBar.module.css';
import { ReactComponent as GooseLogo } from '../../icons/goose-logo.svg';
import { ReactComponent as IconClose } from '../../icons/icon-close.svg';

const SideBar = () => {
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

        <UserNav />
      </div>

      <LogoutBtn className={styles.lgButton} />
    </div>
  );
};

export default SideBar;
