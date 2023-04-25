import React, { useState } from 'react';
import { useFormik } from 'formik';
import { SpinnerCircular } from 'spinners-react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth.operations';
import { selectIsRefreshing } from 'redux/auth/auth.selectors';
import LoginSchema from './LoginSchema';
import { ReactComponent as Logo } from '../../icons/icon-login.svg';
import { ReactComponent as Show } from '../../icons/showicon.svg';
import { ReactComponent as Hide } from '../../icons/hideicon.svg';
import { ReactComponent as Rocket } from '../../icons/icon-rocket.svg';
import { ReactComponent as Message } from '../../icons/icon-message.svg';

import style from './LoginForm.module.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRefreshing);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values, actions) => {
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
    <div className={style.container}>
      {isLoading && (
        <SpinnerCircular
          className={style.spinner}
          size={50}
          thickness={100}
          speed={100}
          color="#FFFFFF"
          secondaryColor="#3E85F3"
        />
      )}
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <h1 className={style.title}>Log in</h1>
        <label className={style.label} htmlFor="email">
          Email
        </label>
        <input
          className={`${style.input} ${
            formik.touched.email && formik.errors.email
              ? style.errorInput
              : formik.touched.email && !formik.errors.email
              ? style.success
              : ''
          }`}
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className={style.errorLabel}>{formik.errors.email}</div>
        ) : null}

        <label className={style.label} htmlFor="password">
          Password
        </label>
        <div className={style.passwordContainer}>
          <input
            className={`${style.input} ${
              formik.touched.password && formik.errors.password
                ? style.errorInput
                : formik.touched.password && !formik.errors.password
                ? style.success
                : ''
            }`}
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span
            className={style.togle}
            type="button"
            onClick={handleShowPassword}
          >
            {showPassword ? (
              <Show className={style.icon} />
            ) : (
              <Hide className={style.icon} />
            )}
          </span>
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div className={style.errorLabel}>{formik.errors.password}</div>
        ) : null}

        <button
          className={style.submit}
          disabled={!formik.isValid || !formik.dirty}
          type="submit"
        >
          Log in
          <Logo className={style.icon} />
        </button>
      </form>
      <div className={style.imgContainer_login}>
        <p className={style.imgText_login}>
          Quickly come in and write down your tasks for the day!
        </p>
        <Message className={style.imgMessage_login} />
        <Rocket />
      </div>
    </div>
  );
};
export default LoginForm;
