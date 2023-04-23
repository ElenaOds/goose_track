import { ReactComponent as IconLogout } from '../../icons/icon-logout.svg';
import styles from './LogoutBtn.module.css';

const LogoutBtn = () => {
  return (
    <>
      <button type="button" className={styles.lgButton}>
        Log out
        <IconLogout className={styles.lgButton_icon} />
      </button>
    </>
  );
};

export default LogoutBtn;
