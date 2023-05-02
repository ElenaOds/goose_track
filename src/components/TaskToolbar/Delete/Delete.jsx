import { useDispatch } from 'react-redux';
import { deleteItem, get } from 'redux/tasks/tasks.operations';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';
import styles from './Delete.module.css';
const { format, addMonths } = require('date-fns');

export const Delete = ({ id }) => {
  const currentDate = Date.now();
  const from = format(currentDate, 'yyyy-MM-dd');
  const to = format(addMonths(currentDate, 1), 'yyyy-MM-dd');
  const data = {
    from,
    to,
  };
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(id));
    dispatch(get(data));
  };
  return (
    <>
      <DeleteIcon className={styles.icon} onClick={handleDelete} />
    </>
  );
};
