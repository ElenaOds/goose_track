import React   from "react";
import styles from './PageNotFound.module.css';
import { Link} from "react-router-dom";
import {ReactComponent as Rocket} from '../../icons/icon-rocket.svg'


export const PageNotFound = () => {
return (
        <div>
            <div className={styles.PageNotFound_MarkUp}>
            <h1>Нажаль такой сторінки не існує </h1>
            <Link to='' className={styles.PageNotFound_Link}><button className={styles.PageNotFound_textEffect}>Повернутись на головну</button></Link>
            <Rocket className={styles.PageNotFound_rocket} />
            </div>
        </div>
    
    );
};

