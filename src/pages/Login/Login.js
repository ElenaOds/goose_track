import LoginForm from 'components/LoginForm/LoginForm';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import styles from './styles.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <AuthNavigate route={'/auth/signup'} pageName={'Sign up'} />
    </div>
  );
};

export default Login;
