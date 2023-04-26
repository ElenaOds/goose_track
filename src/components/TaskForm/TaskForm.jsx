import styles  from './TaskForm.module.css';
import {useState} from "react";
import { ReactComponent as Close } from '../../icons/x-close.svg';
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';


export const TaskForm =({data,onClose})=> {
    
    const task=null;
    // task переделать под глобальный стейт, индикатор наличия тасок

  const [title,setInTitle] = useState(''); 
  const [start,setInStart] = useState(''); 
  const [end,setInEnd] = useState(''); 
  const [level,setInLevel] = useState(''); 

  const dataForm={
    title,
    start,
    end,
    level
  }
 
  const handleChange = event => {    
    const {id,name, value} = event.target;
    if(name==='title'){setInTitle(value)}
    if(name==='start'){setInStart(value)}
    if(name==='end'){setInEnd(value)}
    if(name==='level'){setInLevel(id)}    
  };    
  
  const handleSubmit = evt => {   
    evt.preventDefault();
    console.log(dataForm)    
  };
  
  return (
    <div  className={styles.container}>
      <form className={styles.form}  onSubmit={handleSubmit}>         
        <div className="">
          <label className={styles.label} for='title'>
            <p>Title</p>
          </label>
          <input
            type='text'
            name="title" 
            onChange={handleChange}          
            className={styles.input}            
            placeholder="Enter text"
            maxLength={250}      
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.start}>
          <label  className={styles.label} for='start'>
            <p>Start</p>
          </label>
          <input 
            onChange={handleChange}
            type='time'
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
            onChange={handleChange}
            type='time'
            name='end'           
            className={styles.input}            
            placeholder="14:00"             
          />
        </div>
        </div> 
        <div className={styles.flex}>           
            <label  className={styles.check}>
              <div className={styles.flex}>
                <input className={styles.checkbox} type='radio' id='low' name='level' onChange={handleChange}/>
                <span>Low</span>
              </div>
            </label> 
            <label className={styles.check}>          
               <div className={styles.flex}>
                <input  className={styles.checkbox} type='radio' id='medium' name='level' onChange={handleChange}/>            
                <span>Medium</span>
              </div>
            </label>       
            <label className={styles.check} >
              <div className={styles.flex}>
                <input className={styles.checkbox}  type='radio' id='higt' name='level' onChange={handleChange}/>            
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