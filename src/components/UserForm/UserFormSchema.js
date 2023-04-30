import * as Yup from 'yup';

const phonePattern =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const UserFormSchema = Yup.object().shape({
  userPhoto: Yup.string(),
  name: Yup.string().min(3, 'Too short').max(30, 'Too long'),
  birthday: Yup.date(),
  email: Yup.string().email('Invalid email'),
  phone: Yup.string()
    .min(8, 'Too short')
    .matches(phonePattern, 'Invalid phone number format'),
  skype: Yup.string(),
});

export default UserFormSchema;
