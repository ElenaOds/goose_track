import { useDate } from 'hooks/useDate';
import { useDispatch } from 'react-redux';
import { deleteItem, get } from 'redux/tasks/tasks.operations';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';
import styles from './Delete.module.css';
const { format, addMonths } = require('date-fns');

export const Delete = ({ id }) => {
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
    <>
      <DeleteIcon className={styles.icon} onClick={handleDelete} />
    </>
  );
};
