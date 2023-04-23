import styles  from './UserInfo.module.css';

export const  UserInfo =()=> { 
    // привязать к глобальному стейту переменные url, name
    const name= 'Goose';     
    const url=null; 


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