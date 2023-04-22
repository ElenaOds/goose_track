import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
import * as Yup from 'yup';
import { ReactComponent as Icon } from '../../icons/log-in-01.svg';
import goose from '../../icons/goose.png';
import cloud from '../../icons/message.png';

import React, { useState } from 'react';
import { useFormik } from 'formik';

import style from './RegisterForm.module.css';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
// min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name is too short')
    .max(64, 'Name is too long'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short')
    .max(20, 'Password is too long')
    .matches(
      passwordRules,
      'Password must contain uppper case letter and numbers'
    )
    .required('Required'),
});

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          password: values.email,
        })
      );
      resetForm();
    },
  });

  return (
    <div className={style.container}>
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
          onBlur={formik.onBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button
          className={style.togle}
          type="button"
          onClick={handleShowPassword}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>

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
        <img className={style.imgMessage} src={cloud} alt="message" />
        <img src={goose} alt="goose" />
      </div>
    </div>
  );
};
