import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
      <AuthNavigate route={'/auth/login'} pageName={'Log In'} />
    </div>
  );
};

export default Register;
