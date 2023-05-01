import { useState } from 'react';
import { Modal } from './Modal';

import styles from './Move.module.css';
import { ReactComponent as MoveIcon } from '../../../icons/move.svg';

export const Move = ({ id, task }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(showModal => !showModal);
  return (
    <>
      <MoveIcon className={styles.icon} onClick={toggleModal} id={id} />
      {showModal && <Modal onClose={toggleModal} id={id} task={task} />}
    </>
  );
};
