// import { useSelector } from 'react-redux';
// import {selectUser} from '../../redux/auth/auth.selectors';
import styles  from './UserInfo.module.css';

export const  UserInfo =()=> {
    // привязать к глобальному стейту переменные url, name
    // const user= useSelector(selectUser);     
    // const {email}=user;
    // console.log(email);
    const url=null; 
    const name="Goose";
    const firstLetter = name[0].toLocaleUpperCase();
    
    return (  
        <>
            <p className={styles.name}>{name}</p>            
            {url!==null 
            ? <img src={url} alt='' className={styles.avatar} />
            : <div className={styles.avatar}>{firstLetter}</div>}                      
        </>           
    );    
}