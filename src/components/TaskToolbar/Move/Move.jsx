import { useState } from 'react';
import { Modal } from './Modal';

import styles from './Move.module.css';
import { ReactComponent as MoveIcon } from '../../../icons/move.svg';

export const Move = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(showModal => !showModal);
  return (
    <>
      <MoveIcon className={styles.icon} onClick={toggleModal} />
      {showModal && <Modal onClose={toggleModal} />}
    </>
  );
};
