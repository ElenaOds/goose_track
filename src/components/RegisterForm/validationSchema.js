import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
// min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name is too short')
    .max(64, 'Name is too long'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(5, 'Password is too short')
    .max(20, 'Password is too long')
    .matches(
      passwordRules,
      'Password must contain uppper case letter and numbers'
    )
    .required('Password is required'),
});
