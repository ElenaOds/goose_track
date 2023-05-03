import styles  from './TaskFormUpDate.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { ReactComponent as Close } from '../../icons/x-close.svg';
import { ReactComponent as Pencil } from '../../icons/pencil-01.svg';
import {update} from '../../redux/tasks/tasks.operations';
import {get} from '../../redux/tasks/tasks.operations';
import { selectTaskList } from 'redux/tasks/tasks.selectors';
const { format, addMonths } = require('date-fns');

export const TaskFormUpDate =({id,onClose})=> {
  const dispatch = useDispatch(); 
  const TaskList = useSelector(selectTaskList); 
  const TaskNew={} 

  useEffect(() => {    
    const isActivRadioButton= document.getElementsByName('priority'); 
    for (let i=0; i<isActivRadioButton.length;i+=1){   
      if(isActivRadioButton[i].id===TaskNew.priority){
        isActivRadioButton[i].setAttribute("checked", 'on')
      }    
    } 
  });  

  for (let i=0; i<TaskList.length;i+=1){   
    if(TaskList[i]._id===id){
      TaskNew.title=TaskList[i].title
      TaskNew.start=TaskList[i].start
      TaskNew.end=TaskList[i].end
      TaskNew.priority=TaskList[i].priority
    }
  } 
  const [title,setIsTitle]=useState(TaskNew.title);
  const [start,setIsStart]=useState(TaskNew.start);
  const [end,setIsEnd]=useState(TaskNew.end);
  const [priority,setIsPriority]=useState(TaskNew.priority);

  const handleChange = event => { 
    const { name,id, value } = event.target;
    if(name==='title'){setIsTitle(value)};
    if(name==='start'){setIsStart(value)};
    if(name==='end'){setIsEnd(value)};
    if(name==='priority'){setIsPriority(id)};  
  };

  const currentDate = Date.now();
  const from = format(currentDate, 'yyyy-MM-dd');
  const to = format(addMonths(currentDate, 1), 'yyyy-MM-dd');

  const onSubmit = async(evt) => {   
    evt.preventDefault();
     const task={
      id,                     
      task:{
        title:title,
        start:start,
        end:end,
        priority:priority
      }      
    }    
    dispatch(update(task));
    const data = {
      from,
      to,
    }; 
    dispatch(get(data)); 
    setIsTitle('');
    setIsStart('');
    setIsEnd('');
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
                <div>Low</div>
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
                <div>Medium</div>
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
                <div>High</div>
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