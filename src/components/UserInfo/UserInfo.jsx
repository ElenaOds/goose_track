import { useSelector } from 'react-redux';
import styles from './UserInfo.module.css';

import { selectUser } from 'redux/auth/auth.selectors';

export const UserInfo = () => {
  const profile = useSelector(selectUser);

  // const {email}=user;
  // console.log(email);
  const url = null;
  const name = profile.name;
  const firstLetter = name[0].toLocaleUpperCase();

  return (
    <>
      <p className={styles.name}>{name}</p>
      {url !== null ? (
        <img src={url} alt="" className={styles.avatar} />
      ) : (
        <div className={styles.avatar}>{firstLetter}</div>
      )}
    </>
  );
};
