import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
import { validationSchema } from './validationSvhema';
import { SpinnerCircular } from 'spinners-react';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import goose from '../../images/goose.png';
import message from '../../images/message.png';
import { ReactComponent as Icon } from '../../icons/log-in-01.svg';
import { ReactComponent as Show } from '../../icons/showicon.svg';
import { ReactComponent as Hide } from '../../icons/hideicon.svg';

import style from './RegisterForm.module.css';
import { selectIsRefreshing } from 'redux/auth/auth.selectors';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(selectIsRefreshing);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    },
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
        <h1 className={style.title}>Sign Up</h1>
        <label className={style.label} htmlFor="name">
          Name
        </label>
        <input
          className={`${style.input} ${
            formik.touched.name && formik.errors.name
              ? style.errorInput
              : formik.touched.name && !formik.errors.name
              ? style.success
              : ''
          }`}
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        {formik.touched.name && formik.errors.name ? (
          <div className={style.errorLabel}>{formik.errors.name}</div>
        ) : null}

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
          placeholder="Enter email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
            placeholder="Enter password"
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
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
        >
          Sign Up
          <Icon className={style.icon} />
        </button>
      </form>
      <div className={style.imgContainer}>
        <p className={style.imgText}>
          Quickly register and familiarize yourself with the application!
        </p>
        <img className={style.imgMessage} src={message} alt="message" />
        <img src={goose} alt="goose" />
      </div>
    </div>
  );
};
