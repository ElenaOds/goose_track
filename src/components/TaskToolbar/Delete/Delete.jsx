import { useDispatch } from 'react-redux';
import { deleteItem } from 'redux/tasks/tasks.operations';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';
import styles from './Delete.module.css';

export const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(id));
  };
  return (
    <>
      <DeleteIcon className={styles.icon} onClick={handleDelete} />
    </>
  );
};
