import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import {UserInfo} from '../UserInfo/UserInfo';
import styles  from './Header.module.css';
import { ReactComponent as Burger } from '../../icons/menu.svg';
import { ReactComponent as Goose} from '../../icons/goose.svg';

export const Header = () => {
  // переделаль на пропсы
  const titel="Calendar";
  const isColendar=true;


  const openMenu = evt => {     
    console.log('Кнопка будет открывать модальное окно с сайтбар')
  };

  return (
    <div className={styles.header}> 
      <div className={styles.flex}>         
        {isColendar===true
        ? <div className={styles.flex}>
          < Goose className={styles.logo}/>
          <div className={styles.titel}>
            <p>{titel}</p>
            <p className={styles.text}><span className={styles.textinline}>Let go </span>of the past and focus on the present!</p>
          </div>           
        </div>                
        :<p className={styles.titel}>{titel}</p>}
          <button className={styles.button} type="button" onClick={openMenu}>                  
          <Burger className={styles.burger} />        
        </button>            
      </div>       
      <div className={styles.flex}>
        <ThemeToggler/>
        <UserInfo/>                 
      </div>                      
    </div>
  );     
};

