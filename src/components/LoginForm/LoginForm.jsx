import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from './LoginSchema';
import styles from './styles.module.css';

const LoginForm = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={values => handleSubmit(values)}
      >
        <Form className={styles.form}>
          <label className={styles.label}>Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
          />

          {/* <ErrorMessage name="email" component="div" /> */}
          <label className={styles.label}>Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            className={styles.input}
          />

          {/* <ErrorMessage name="password" component="div" /> */}
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
