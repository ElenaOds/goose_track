import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
// min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short')
    .max(20, 'Password is too long')
    .matches(
      passwordRules,
      'Password must contain lowecase letters, uppercase letters and numbers'
    )
    .required('Required'),
});

export default LoginSchema;
