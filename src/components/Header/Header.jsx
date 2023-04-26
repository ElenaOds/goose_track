import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';
import styles from './Header.module.css';
// import { ReactComponent as Burger } from '../../icons/menu.svg';
import { ReactComponent as Goose } from '../../icons/goose.svg';
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
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {isActivPage === false ? (
          <div className={styles.flex}>
            <Goose className={styles.logo} />
            <div className={styles.title}>
              <p>Calendar</p>
              <p className={styles.text}>
                <span className={styles.textinline}>Let go </span>of the past
                and focus on the present!
              </p>
            </div>
          </div>
        ) : (
          <p className={styles.profile}>User Profile</p>
        )}
        {/* <button className={styles.button} type="button" onClick={toggleSidebar}>
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
