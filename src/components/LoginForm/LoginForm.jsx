import { useFormik } from 'formik';
import LoginSchema from './LoginSchema';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.css';
import { ReactComponent as Logo } from './icon_login.svg';

const LoginForm = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('form has been submited');

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={formik.handleBlur}
          className={
            formik.errors.email && formik.touched.email
              ? styles.inputError
              : styles.input
          }
        />

        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          type="password"
          placeholder="Enter your password"
          onBlur={formik.handleBlur}
          className={
            formik.errors.email && formik.touched.email
              ? styles.inputError
              : styles.input
          }
        />
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className={styles.button}
        >
          Log in
          <Logo className={styles.logo} />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
