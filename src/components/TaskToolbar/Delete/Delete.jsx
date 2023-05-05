import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';
import styles from './Delete.module.css';
import { useState } from 'react';
import { DeleteModal } from './DeleteModal/DeleteModal';

export const Delete = ({ id }) => {
  const [isOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DeleteIcon
        className={styles.icon}
        onClick={() => setIsModalOpen(true)}
      />
      {isOpen && <DeleteModal id={id} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
