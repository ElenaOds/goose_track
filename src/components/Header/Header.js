import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import {UserInfo} from '../UserInfo/UserInfo';
import styles  from './Header.module.css';
// import { ListBulletIcon } from "@airplane/views/icons";
import { ReactComponent as Logo } from './menu.svg';


const Header = () => {  

  // дописать логику активной страницы для вывода наименования в компаненте
  // 
  return (
    <div className={styles.header}> 
      <div className={styles.flex}>
        <p>UserProfile</p> 
        {/* <button className={styles.menu} type="button" >                   */}
         <Logo className={styles.logo} />        
        {/* </button> */}
        {/* <ListBulletIcon  size="lg" className={styles.menu}/>  */}
      </div>          
      <div className={styles.flex}>
        <ThemeToggler/>
        <UserInfo/>                 
      </div>                      
    </div>
  );     
};
  
export default Header;