import { useSelector } from 'react-redux';
import styles from './UserInfo.module.css';

import { selectUser } from 'redux/auth/auth.selectors';
import { useState } from 'react';
import { ModalUserInfo } from './ModalUserInfo/ModalUserInfo';

export const UserInfo = () => {
  const profile = useSelector(selectUser);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  // const {email}=user;
  // console.log(email);
  const url = null;
  const name = profile.name;
  const firstLetter = name[0].toLocaleUpperCase();

  return (
    <>
      <div className={styles.container} onClick={toggleModal}>
        <p className={styles.name}>{name}</p>
        {url !== null ? (
          <img src={url} alt="" className={styles.avatar} />
        ) : (
          <div className={styles.avatar}>{firstLetter}</div>
        )}
      </div>
      {showModal && (
        <ModalUserInfo toggleModal={toggleModal} profile={profile.name} />
      )}
    </>
  );
};
