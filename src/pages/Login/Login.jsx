import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <AuthNavigate route={'/auth/register'} pageName={'Register'} />
    </div>
  );
};

export default Login;
