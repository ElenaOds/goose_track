import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth.operations';
import { ReactComponent as IconLogout } from '../../icons/icon-logout.svg';
import style from './LogoutBtn.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <button className={style.lgButton} type="button" onClick={handleLogout}>
        Log out
        <IconLogout className={style.lgButton_icon} />
      </button>
    </>
  );
};

export default LogoutBtn;
