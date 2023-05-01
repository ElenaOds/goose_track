import { useSelector } from 'react-redux';
import styles from './UserInfo.module.css';
import { useState } from 'react';
import { ModalUserInfo } from './ModalUserInfo/ModalUserInfo';
import {selectUser} from 'redux/user/user.selectors';

export const UserInfo = () => { 
  const [showModal, setShowModal] = useState(false);
  const profile = useSelector(selectUser);  
  const name = profile.user.name;
  const firstLetter = name[0].toLocaleUpperCase();
  // ToDo
  // const url= profile.user.url;
  const url = null; 

  const toggleModal = () => {
    setShowModal(!showModal);   
  };

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
