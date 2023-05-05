import { useSelector } from 'react-redux';
import styles from './UserInfo.module.css';
import { useState } from 'react';
import { ModalUserInfo } from './ModalUserInfo/ModalUserInfo';
import { ModalUser } from './ModalUser/ModalUser';
import { selectUser } from 'redux/user/user.selectors';

export const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    user: { userPhoto, name },
  } = useSelector(selectUser);

  const firstLetter = name[0].toLocaleUpperCase();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className={styles.container} onClick={toggleModal}>
        <p className={styles.name}>{name}</p>
        {userPhoto !== null ? (
          <img src={userPhoto} alt="" className={styles.avatar} />
        ) : (
          <div className={styles.avatar}>{firstLetter}</div>
        )}
      </div>
      {showModal && (
        <ModalUser>
          <ModalUserInfo toggleModal={toggleModal} />
        </ModalUser>
      )}
    </>
  );
};
