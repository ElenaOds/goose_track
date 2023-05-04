import styles  from './TaskForm.module.css';
import {useDispatch} from 'react-redux';
import { ReactComponent as Close } from '../../icons/x-close.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { useState } from 'react';
import {create} from '../../redux/tasks/tasks.operations';
import {get} from '../../redux/tasks/tasks.operations';
import { useDate } from 'hooks/useDate';
const { format, addMonths } = require('date-fns');

export const TaskForm =({date,onClose,column})=> { 
  const [title,setIsTitle]=useState('');
  const [start,setIsStart]=useState('');
  const [end,setIsEnd]=useState('');
  const [priority,setIsPriority]=useState('');  
  const dispatch = useDispatch(); 

  const urlDate = useDate();
  const from = format(urlDate, 'yyyy-MM-dd');
  const to = format(addMonths(urlDate, 1), 'yyyy-MM-dd');
  const data = {
    from,
    to,
  }; 

  const handleChange = event => { 
    const { name, id, value } = event.target;
  
    if(name==='title'){setIsTitle(value)};
    if(name==='start'){setIsStart(value)};
    if(name==='end'){setIsEnd(value)};
    if(name==='priority'){setIsPriority(id)};  
  };

  const onSubmit = (evt)=> { 
    // evt.preventDefault()
    dispatch(create({title,start,end,priority,date,column}));
    dispatch(get(data));    
  }  

  return (
    <div  className={styles.container}>     
      <form className={styles.form} onSubmit={onSubmit}>         
        <div className=''>
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
            value={title}                
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
            value={start}                         
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
            value={end}                         
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
                  className={styles.checkbox1}                           
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
                  className={styles.checkbox2}                 
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
                  className={styles.checkbox3}                 
                />            
                <span>High</span>
              </div>
            </label>          
        </div>       
        <div className={styles.flex}>
            <button type="submit" className={styles.button}>
              <>          
                <Plus className={styles.logo} />
                Add             
              </>
            </button> 
            <button className={styles.btn_cansel} onClick={onClose}>Cancel</button>
          </div>         
      </form>
      <Close onClick={onClose} className={styles.btn_close}/>       
    </div>
  );     
};