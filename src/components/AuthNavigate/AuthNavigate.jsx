import { Link } from 'react-router-dom';
import styles from './AuthNavigate.module.css';

export const AuthNavigate = ({ route, pageName }) => {
  return (
    <>
      <button type="button" className={styles.button}>
        <Link to={route}>{pageName}</Link>
      </button>
    </>
  );
};
