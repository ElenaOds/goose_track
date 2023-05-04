import { addMonths, format } from 'date-fns';
import { useDate } from 'hooks/useDate';
import { useDispatch } from 'react-redux';
import { deleteItem, get } from 'redux/tasks/tasks.operations';
import styles from './DeleteModal.module.css';
import { ModalDelete } from 'components/ModalDelete/ModalDelete';

export const DeleteModal = ({ id, onClose }) => {
  const urlDate = useDate();

  const from = format(urlDate, 'yyyy-MM-dd');
  const to = format(addMonths(urlDate, 1), 'yyyy-MM-dd');

  const data = {
    from,
    to,
  };
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteItem(id));
    await dispatch(get(data));
  };

  return (
    <ModalDelete onClose={onClose}>
      <h1 className={styles.title}>Do you really want to delete this task?</h1>
      <div className={styles.container}>
        <button className={styles.dltButton} onClick={handleDelete}>
          Delete
        </button>
        <button className={styles.dltButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </ModalDelete>
  );
};
