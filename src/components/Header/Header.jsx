import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';
import styles from './Header.module.css';
import { ReactComponent as Burger } from '../../icons/menu.svg';
import { useSelector} from 'react-redux';
import { ReactComponent as LogoHeader} from '../../icons/logoheader.svg';
import PropTypes from 'prop-types';
import { selectTaskList } from 'redux/tasks/tasks.selectors';
import { useDate } from 'hooks/useDate';
import {selectIsLoadingTask} from '../../redux/tasks/tasks.selectors';


export const Header = ({isActivPage,toggleSidebar}) => {
  const TaskListAll = useSelector(selectTaskList); 
  const TaskListDay=[];
  const  date = useDate()
  const  output = date.getFullYear()+'-'+ String(date.getMonth() + 1).padStart(2, '0') + '-'+ String(date.getDate()).padStart(2, '0')+'T00:00:00.000Z'
  const isLoading=useSelector(selectIsLoadingTask);
 
  console.log(TaskListAll)
 
 
  for (let i=0; i<TaskListAll.length;i+=1){   
    if(TaskListAll[i].date===output){
      TaskListDay.push(TaskListAll[i])
    }
  }  


  return (
     <div className={styles.container}>      
      <div className={styles.header}> 
       <div className={styles.burger}>
            <button className={styles.button} type="button" onClick={toggleSidebar}>
            <Burger className={styles.logo_burger} />
          </button>   
        </div>        
      {isActivPage === false 
      ?( TaskListDay.length===0 && !isLoading
        ?<div>        
          <div className={styles.warning}>
            <LogoHeader className={styles.logo_header} /> 
            <div>
            <p>Calendar</p>
              <p className={styles.text}>
                <span className={styles.textinline}>Let go </span>of the past and focus on the present!
              </p> 
            </div>        
          </div>          
        </div>
          :<p className={styles.title}>Calendar</p>) 
        : (<p className={styles.title} >User Profile</p>)}                   
      <div className={styles.flex}>
        <ThemeToggler />
        <UserInfo />
      </div> 
    </div>      
   </div> 
  );
};

Header.propTypes = {
  isActivPage: PropTypes.bool,
};
