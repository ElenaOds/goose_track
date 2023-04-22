import styles  from './UserInfo.module.css';


export const  UserInfo =()=> {
    // привязать к глобальному стейту 
    const name= 'Nadiia Doe';
    const firstLetter = name[0].toLocaleUpperCase()  
    const url='https://pixabay.com/get/ge0d1450198b41f1e7d7dffb91fb4633f026d386b5ff066dbcb30f42c3a5491835809c2c92cd94e03a378a207a6d179b9812698f087edd331c237ec9d0c557eb4_640.jpg'; 
 
    return (  
        <>
            <p>{name}</p>            
            {url!==null 
            ? <img src={url} alt='' className={styles.avatar} />
            : <div className={styles.avatar}>{firstLetter}</div>}         
                      
        </>           
    );    
}