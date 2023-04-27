import { UserNav } from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import styles from './SideBar.module.css';
import { ReactComponent as GooseLogo } from '../../icons/goosesidebar.svg';
import { ReactComponent as IconClose } from '../../icons/icon-close.svg';
import { ReactComponent as Burger } from '../../icons/menu.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { TestTaskRequests } from 'components/TestTasksRequests/TestTasksRequests';

const SideBar = ({ changePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const className = isOpen ? styles.container_1 : styles.container_2;

  return (
    <>
      <button className={styles.button} type="button" onClick={toggleSidebar}>
        <Burger className={styles.burger} />
      </button>
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

          <UserNav changePage={changePage} />
        </div>

        <TestTaskRequests />

        <LogoutBtn className={styles.lgButton} />
      </div>
    </>
  );
};

export default SideBar;

SideBar.propTypes = {
  changePage: PropTypes.array,
};
