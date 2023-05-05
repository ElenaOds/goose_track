// import { useDispatch, useSelector } from 'react-redux';
// import { create, deleteItem, get, update } from 'redux/tasks/tasks.operations';
// import { selectTaskList } from 'redux/tasks/tasks.selectors';
// import { getUser, updateUser } from 'redux/user/user.operations';

// export const TestTaskRequests = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector(selectTaskList);

//   const handleCreate = () => {
//     console.log('handleCreate');

//     // imitates new task
//     const newTask = {
//       title: 'Task to test requests',
//       date: '2023-04-25',
//       start: '21:00',
//       end: '22:00',
//       priority: 'low',
//     };

//     console.log(newTask);
//     dispatch(create(newTask));
//   };

//   const handleGet = () => {
//     console.log('handleGet');

//     // imitates query search parameters
//     // and show how to pass to the request

//     const date = {
//       from: '2023-04-01',
//       to: '2023-04-30',
//     };

//     dispatch(get(date));
//   };

//   const handleUpdate = () => {
//     console.log('handleDelete');

//     // imitates id that we need to get from query params
//     const id = tasks[0]._id;
//     const updatedTask = {
//       title: 'Updated title',
//     };
//     // this is the format to pass data into the update function
//     const updateData = {
//       id,
//       updatedTask,
//     };

//     dispatch(update(updateData));
//   };

//   const handleDelete = () => {
//     console.log('handleDelete');

//     // imitates id that we need to get from query params
//     const id = tasks[0]._id;

//     dispatch(deleteItem(id));
//   };

//   const handleGetUser = () => {
//     console.log('handleGetUser');

//     dispatch(getUser());
//   };

//   const handleUpdateUser = () => {
//     console.log('handleUpdateUser');

//     const updatedUser = {
//       name: 'Updated Name',
//       birthday: '15-04-1999',
//     };

//     dispatch(updateUser(updatedUser));
//   };
//   return (
//     <>
//       <h4>TEST REQUESTS FOR TASKS</h4>

//       <button type="button" onClick={handleCreate}>
//         Create task
//       </button>
//       <button type="button" onClick={handleGet}>
//         Get tasks
//       </button>
//       <button type="button" onClick={handleUpdate}>
//         Update task
//       </button>
//       <button type="button" onClick={handleDelete}>
//         Delete task
//       </button>
//       <button type="button" onClick={handleGetUser}>
//         Get User Info
//       </button>
//       <button type="button" onClick={handleUpdateUser}>
//         Update User Info
//       </button>
//     </>
//   );
// };
