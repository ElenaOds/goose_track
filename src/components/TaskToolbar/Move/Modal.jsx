// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { update } from 'redux/tasks/tasks.operations';
// import { selectTaskList } from 'redux/tasks/tasks.selectors';
// import { ReactComponent as Icon } from '../../../icons/move.svg';
// import styles from './Modal.module.css';

// export const Modal = ({ onClose, id, task }) => {
//   console.log(task.column);
//   console.log(id);
//   const dispatch = useDispatch();
//   const tasks = useSelector(selectTaskList);
//   const todo = tasks.map(task => task.column === 'To do');
//   // const todo = tasks.filter(task => task.column === 'To do');
//   console.log(todo);
//   // const inProgress = tasks.map(task => task.column === 'In progress');
//   const inProgress = tasks.filter(task => task.column === 'In progress');
//   // const done = tasks.map(task => task.column === 'Done');
//   const done = tasks.filter(task => task.column === 'Done');

//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.code === 'Escape') {
//         onClose();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       onClose();
//     }
//   };

//   const toInProgress = { id, column: 'In progress' };

//   const toDone = { id, ...task, column: 'Done' };

//   const toToDo = { id, ...task, column: 'To do' };

//   return (
//     <div className={styles.Overlay} onClick={handleBackdropClick}>
//       <div className={styles.modalContent}>
//         {task.column === 'To do' && (
//           <>
//             <button
//               className={styles.btn}
//               onClick={() => {
//                 onClose();
//                 dispatch(update(toInProgress));
//               }}
//             >
//               In progress
//               <Icon className={styles.icon} />
//             </button>
//             <button
//               className={styles.btn}
//               onClick={() => {
//                 onClose();
//                 dispatch(update(toDone));
//               }}
//             >
//               Done
//               <Icon className={styles.icon} />
//             </button>
//           </>
//         )}

//         {inProgress && (
//           <>
//             <button
//               className={styles.btn}
//               type="button"
//               onClick={() => {
//                 onClose();
//                 dispatch(update(toToDo));
//               }}
//             >
//               To do
//               <Icon className={styles.icon} />
//             </button>
//             <button
//               className={styles.btn}
//               type="button"
//               onClick={() => {
//                 onClose();
//                 dispatch(update(toDone));
//               }}
//             >
//               Done
//               <Icon className={styles.icon} />
//             </button>
//           </>
//         )}
//         {done && (
//           <>
//             <button
//               className={styles.btn}
//               type="button"
//               onClick={() => {
//                 onClose();
//                 dispatch(update(toToDo));
//               }}
//             >
//               To do
//               <Icon className={styles.icon} />
//             </button>
//             <button
//               className={styles.btn}
//               type="button"
//               onClick={() => {
//                 onClose();
//                 dispatch(update(toInProgress));
//               }}
//             >
//               In progress
//               <Icon className={styles.icon} />
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from 'redux/tasks/tasks.operations';
import { ReactComponent as Icon } from '../../../icons/move.svg';
import styles from './Modal.module.css';

export const Modal = ({ onClose, id, task }) => {
  const dispatch = useDispatch();

  const columns = ['To do', 'In progress', 'Done'];
  const otherColumns = columns.filter(column => column !== task.column);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {otherColumns.map(column => (
          <button
            key={column}
            className={styles.btn}
            onClick={() => {
              onClose();
              dispatch(update({ id, column: column }));
            }}
          >
            {column}
            <Icon className={styles.icon} />
          </button>
        ))}
      </div>
    </div>
  );
};
