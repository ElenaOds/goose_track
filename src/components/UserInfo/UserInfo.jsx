import { useSelector } from 'react-redux';
import styles from './UserInfo.module.css';
import { useEffect, useState } from 'react';
import { ModalUserInfo } from './ModalUserInfo/ModalUserInfo';
import { selectUser } from '../../redux/auth/auth.selectors';
import { ModalUser } from './ModalUser/ModalUser';

export const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const profile = useSelector(selectUser);
  const name = profile.name;
  const firstLetter = name[0].toLocaleUpperCase();

  const {
    user: { userPhoto },
  } = useSelector(selectUser);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setPhoto(profile.userPhoto);
  }, [useSelector(selectUser)]);

  return (
    <>
      <div className={styles.container} onClick={toggleModal}>
        <p className={styles.name}>{name}</p>
        {photo !== null ? (
          <img src={photo} alt="" className={styles.avatar} />
        ) : (
          <div className={styles.avatar}>{firstLetter}</div>
        )}
      </div>
      {/* {showModal && (
        <ModalUserInfo toggleModal={toggleModal} profile={profile.name} />
      )}  */}
      {showModal && (
        <ModalUser>
          <ModalUserInfo toggleModal={toggleModal} profile={profile} />
        </ModalUser>
      )}
    </>
  );
};
