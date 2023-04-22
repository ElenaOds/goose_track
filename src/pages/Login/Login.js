<<<<<<< HEAD
import LoginForm from 'components/LoginForm/LoginForm';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import styles from './styles.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <AuthNavigate route={'/auth/signup'} pageName={'Sign up'} />
    </div>
=======
const Login = () => {
  return (
    <>
      <h1>Login</h1>
    </>
>>>>>>> 1b895b66f610bed42e5b24152cb9f14a0ddbcfa5
  );
};

export default Login;
