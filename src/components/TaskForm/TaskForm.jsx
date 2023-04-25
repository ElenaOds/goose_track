import styles  from './TaskForm.module.css';
import { ReactComponent as Close } from '../../icons/x-close.svg';
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';

export const TaskForm =({data,onClose})=> {  
  console.log(data)
  return (
    <div  className={styles.container}>
      <form className={styles.form} >         
        <div className="">
          <label className={styles.label} for='title'>
            <p>Title</p>
          </label>
          <input
            name="title"           
            className={styles.input}            
            placeholder="Enter text"             
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.start}>
          <label  className={styles.label} for='start'>
            <p>Start</p>
          </label>
          <input 
            name='start'          
            className={styles.input}            
            placeholder="9:00"             
          />
        </div>
        <div className="">
          <label  className={styles.label} for='end'>
            <p>End</p>
          </label>
          <input 
            name='end'           
            className={styles.input}            
            placeholder="14:00"             
          />
        </div>
        </div> 
        <div className={styles.flex}>
          <div className={styles.flex}>
            <input  type='radio' checked neme='low'/>
            <label  className={styles.check} for='low'>
              <p>Low</p>
            </label>       
          </div>
          <div className={styles.flex}>
            <input className={styles.checkbox} type='radio' name='medium'/>
            <label className={styles.check} for='medium'>
              <p>Medium</p>
            </label>       
          </div>
          <div className={styles.flex}>
            <input className={styles.checkbox} type='radio' name='hight'/>
            <label className={styles.check} for='hight'>
              <p>High</p>
            </label>       
          </div>
        </div>        
        <button className={styles.button}>
          <>          
            <Pencil className={styles.logo} />
            Edit              
          </>
        </button>        
      </form>
      <Close onClick={onClose} className={styles.btn_close}/>       
    </div>
  );     
};