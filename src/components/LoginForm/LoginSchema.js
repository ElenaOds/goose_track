import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .max(20, 'Password is too long')
    .required('Required'),
});

export default LoginSchema;
