
import styles  from './TaskFormUpDate.module.css';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import { ReactComponent as Close } from '../../icons/x-close.svg';
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';
import {update} from '../../redux/tasks/tasks.operations';


export const TaskFormUpDate =({date,id,onClose})=> {  
  const dispatch = useDispatch();  
 
  const [title,setIsTitle]=useState('');
  const [start,setIsStart]=useState('');
  const [end,setIsEnd]=useState('');
  const [priority,setIsPriority]=useState('');  


  const handleChange = event => { 
    const { name,id, value } = event.target;

    if(name==='title'){setIsTitle(value)};
    if(name==='start'){setIsStart(value)};
    if(name==='end'){setIsEnd(value)};
    if(name==='priority'){setIsPriority(id)};  
  };

  const onSubmit = evt => {   
    evt.preventDefault();
    dispatch(update(id,{title,start,end,priority,date}));
  }  

  return (
    <div  className={styles.container}>     
     <form className={styles.form} onSubmit={onSubmit}>         
        <div className="">
          <label className={styles.label} htmlFor='title'>
            <p>Title</p>
          </label>
          <input          
            id='title'
            type='text'
            name="title"
            placeholder="Enter text"
            onChange={handleChange}                  
            className={styles.input}          
            maxLength={250}                 
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.start}>
          <label  className={styles.label} htmlFor='start'>
            <p>Start</p>
          </label>
          <input
            id='start'
            type='time'
            name='start' 
            onChange={handleChange}                             
            className={styles.input}                       
          />
        </div>
        <div className="">
          <label  className={styles.label} htmlFor='end'>
            <p>End</p>
          </label>
          <input 
            id='end'
            type='time'
            name='end' 
            onChange={handleChange}                                
            className={styles.input}                       
          />
        </div>
        </div> 
        <div className={styles.flex}>           
            <label htmlFor='low'  className={styles.check}>
              <div className={styles.flex}>
                <input 
                  id='low'
                  type='radio'
                  name='priority'
                  onChange={handleChange}                  
                  className={styles.checkbox}               
                />
                <span>Low</span>
              </div>
            </label> 
            <label htmlFor='medium' className={styles.check}>          
               <div className={styles.flex}>
                <input  
                  id='medium'
                  type='radio'
                  name='priority'
                  onChange={handleChange}                  
                  className={styles.checkbox}                 
                />            
                <span>Medium</span>
              </div>
            </label>       
            <label htmlFor='high' className={styles.check} >
              <div className={styles.flex}>
                <input 
                  id='high'
                  type='radio'
                  name='priority'
                  onChange={handleChange}                  
                  className={styles.checkbox}                 
                />            
                <span>High</span>
              </div>
            </label>          
        </div>     
       <button type="submit" className={styles.button}>
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