import { useTheme } from '../../hooks/useTheme';
import styles  from './ThemeToggler.module.css';
import { ReactComponent as LogoMoon } from '../../icons/moon.svg';
import { ReactComponent as LogoSun } from '../../icons/sun.svg';

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
    <button className={styles.button} type="button" onClick={handleTema}>
      {theme==='light'
      ?<LogoMoon/> 
      :<LogoSun/> }     
    </button> 
  )  
}
