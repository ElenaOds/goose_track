import { useTheme } from '../../hooks/useTheme';
import styles  from './ThemeToggler.module.css';
// import { MoonIcon } from "@airplane/views/icons";
// import { SunIcon } from "@airplane/views/icons";


export const  ThemeToggler =()=> { 
  const {theme,setTheme} = useTheme()  
  const handleTema = evt => { 
    if (theme==='dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }  
  };
  return (
    <button onClick={handleTema} className={styles.buttonTheme}>Change the topic</button>
    // theme==='light'
    // ?<MoonIcon onClick={handleTema} color="#3E85F3" size="lg" className={styles.buttonTheme}/>
    // :<SunIcon onClick={handleTema} color="#3E85F3" size="lg" className={styles.buttonTheme}/>    
  )  
}
