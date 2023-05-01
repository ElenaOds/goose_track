import * as Yup from 'yup';

const phonePattern =
/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{0,4}[-.\s]?\d{0,9}$/;

const UserFormSchema = Yup.object().shape({
  userPhoto: Yup.string(),
  name: Yup.string()
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('This field is required'),
  birthday: Yup.date(),
  email: Yup.string().email('Invalid email').required('This field is required'),
  phone: Yup.string()
    .min(8, 'Too short')
    .matches(phonePattern, 'Invalid phone number format'),
  skype: Yup.string(),
});

export default UserFormSchema;
