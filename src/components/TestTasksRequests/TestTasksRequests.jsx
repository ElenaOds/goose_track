import { useDispatch, useSelector } from 'react-redux';
import { create, get } from 'redux/tasks/tasks.operations';
import { selectTaskList } from 'redux/tasks/tasks.selectors';

export const TestTaskRequests = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTaskList);

  const handleCreate = () => {
    console.log('handleCreate');

    const newTask = {
      title: 'Task to test requests',
      date: '2023-04-25',
      start: '21:00',
      end: '22:00',
      priority: 'low',
    };

    console.log(newTask);
    dispatch(create(newTask));
  };

  const handleGet = () => {
    console.log('handleGet');

    const date = {
      from: '2023-04-01',
      to: '2023-04-30',
    };

    dispatch(get(date));
  };

  const handleDelete = () => {
    console.log('handleDelete');
  };

  return (
    <>
      <h4>TEST REQUESTS FOR TASKS</h4>

      <button type="button" onClick={handleCreate}>
        Create task
      </button>
      <button type="button" onClick={handleGet}>
        Get tasks
      </button>
      <button type="button" onClick={handleDelete}>
        Delete task
      </button>
    </>
  );
};
