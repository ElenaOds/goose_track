import React   from "react";
import styles from './PageNotFound.module.css';
import { Link} from "react-router-dom";



export const PageNotFound = () => {
return (
        <div>
            <div className={styles.PageNotFound_MarkUp}>
            <h1 className={styles.PageNotFound_Header}>Requested page does not exists </h1>
            <Link to='' className={styles.PageNotFound_Link}><button className={styles.PageNotFound_textEffect}>Повернутись на головну</button></Link>
            </div>
        </div>
    
    );
};

