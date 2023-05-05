import { useEffect } from 'react';
import styles from './ModalUserInfo.module.css';
import { NavLink } from 'react-router-dom/dist';
import { ReactComponent as IconUser } from '../../../icons/icon-user.svg';
import { ReactComponent as IconLogout } from '../../../icons/icon-logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth.operations';
import { selectUser } from 'redux/user/user.selectors';

export const ModalUserInfo = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const {
    user: { userPhoto, name },
  } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const coseModal = evt => {
      if (evt instanceof KeyboardEvent && evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', coseModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', coseModal);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={closeOnClick}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {userPhoto
            ?
            <img
            className={styles.avatar}
              src={userPhoto}
              alt="Userphoto"
            />
            :
            <div className={styles.avatar}>
             {name[0].toLocaleUpperCase()}
            </div>
          }
          <p className={styles.text}>{name}</p>
        </div>
        <div className={styles.stylelink}>
          <NavLink className={styles.link} to="/account">
            <IconUser className={styles.icon} />
            My Account
          </NavLink>
        </div>
        <button
          className={styles.lgButton}
          type="button"
          onClick={handleLogout}
        >
          Log out
          <IconLogout className={styles.lgButton_icon} />
        </button>
      </div>
    </div>
  );
};
