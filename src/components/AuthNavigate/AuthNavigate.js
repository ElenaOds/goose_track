import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const AuthNavigate = ({ route, pageName }) => {
  console.log(route);
  console.log(pageName);
  return (
    <>
      <button type="button" className={styles.button}>
        <Link to={route}>{pageName}</Link>
      </button>
    </>
  );
};

export default AuthNavigate;
