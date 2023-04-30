import styles  from './ModalUpDate.module.css';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

export const ModalUpDate =({onClose,children})=> {
  useEffect(()=>{
    const handleKeyClose = event => {   
      if (event.code === 'Escape') {
      onClose();
      }
    };
    window.addEventListener('keydown', handleKeyClose);
    return ()=>{
      window.removeEventListener('keydown', handleKeyClose);
    }
  }, [onClose]) 

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
    
  return ( 
    <>
      <div className={styles.Backdrop}/>     
      <div className={styles.Overlay} onClick={handleClose}>
        <div className={styles.Modal}>                  
          <p>{children}</p>
        </div>
      </div>      
    </>                      
  );  
}

ModalUpDate.propTypes = {   
  onClose:PropTypes.func.isRequired,    
}