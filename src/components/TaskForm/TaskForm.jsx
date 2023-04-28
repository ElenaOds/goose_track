import styles  from './TaskForm.module.css';
import { ReactComponent as Close } from '../../icons/x-close.svg';
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import {create} from '../../redux/tasks/tasks.operations';
import { useFormik } from 'formik';
import TaskSchema from './TaskSchema';

import { useDispatch} from 'react-redux';

export const TaskForm =({data,starter,onClose})=> {
  const task=null;
  // task переделать под глобальный стейт, индикатор наличия тасок   
  
  const dispatch = useDispatch(); 

  const onSubmit = async (values, actions) => {
    dispatch(create(values));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      title:'',
      start:'',
      end:'',
      priority:'',
      data:data,
      category:starter||'starter'
    },
    validationSchema: TaskSchema,
    onSubmit,
  });
  
  return (
    <div  className={styles.container}>
      <form className={styles.form}  onSubmit={formik.handleSubmit}>         
        <div className="">
          <label className={styles.label} for='title'>
            <p>Title</p>
          </label>
          <input          
            id='title'
            type='text'
            name="title"
            placeholder="Enter text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}         
            className={styles.input}          
            maxLength={250}                 
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.start}>
          <label  className={styles.label} for='start'>
            <p>Start</p>
          </label>
          <input
            id='start'
            type='time'
            name='start'          
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.start}                      
            className={styles.input}                       
          />
        </div>
        <div className="">
          <label  className={styles.label} for='end'>
            <p>End</p>
          </label>
          <input 
            id='end'
            type='time'
            name='end'           
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.end}                       
            className={styles.input}                       
          />
        </div>
        </div> 
        <div className={styles.flex}>           
            <label  className={styles.check}>
              <div className={styles.flex}>
                <input 
                  id='low'
                  type='radio'
                  name='priority'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className={styles.checkbox} 
                  value={formik.values.category}
                />
                <span>Low</span>
              </div>
            </label> 
            <label className={styles.check}>          
               <div className={styles.flex}>
                <input  
                  id='medium'
                  type='radio'
                  name='priority'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className={styles.checkbox} 
                  value={formik.values.category}
                />            
                <span>Medium</span>
              </div>
            </label>       
            <label className={styles.check} >
              <div className={styles.flex}>
                <input 
                  id='high'
                  type='radio'
                  name='priority'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className={styles.checkbox} 
                  value={formik.values.category}
                />            
                <span>High</span>
              </div>
            </label>          
        </div> 
        {task===null
        ?(<div className={styles.flex}>
            <button type="submit" className={styles.button}>
              <div>          
                <Plus className={styles.logo} />
                Add             
              </div>
            </button> 
            <button className={styles.btn_cansel} onClick={onClose}>Cancel</button>
          </div> )
        :(<button type="submit" className={styles.button}>
            <>          
              <Pencil className={styles.logo} />
              Edit              
            </>
          </button>)         
        }        
      </form>
      <Close onClick={onClose} className={styles.btn_close}/>       
    </div>
  );     
};