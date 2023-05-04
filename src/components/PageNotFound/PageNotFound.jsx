import React   from "react";
import styles from './PageNotFound.module.css';
import { Link } from "react-router-dom";



export const PageNotFound = () => {
return (
    <div className={styles.container}>
        <div className={styles.pageNotFound_MarkUp}>
            <h1 className={styles.pageNotFound_Header}>Requested page does not exist </h1>
            <Link to='' className={styles.pageNotFound_Link}><button className={styles.pageNotFound_textEffect}>Back to the main page</button></Link>    
    </div>
    </div>
    );
};

