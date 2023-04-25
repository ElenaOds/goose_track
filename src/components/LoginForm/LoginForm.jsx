import { useFormik } from 'formik';
import LoginSchema from './LoginSchema';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginForm.module.css';
import { ReactComponent as Logo } from '../../icons/icon-login.svg';
// import { ReactComponent as Loader } from './goose-gif.gif';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth.operations';
import { selectIsRefreshing } from 'redux/auth/auth.selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRefreshing);

  console.log(isLoading);

  const onSubmit = async (values, actions) => {
    console.log(values);

    dispatch(login(values));

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
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              Log in
              <Logo className={styles.logo} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
