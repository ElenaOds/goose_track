import * as Yup from 'yup';

const phonePattern =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const skypeIdPattern = '^[a-zA-Z][a-zA-Z0-9._]{5,31}$';

const UserFormSchema = Yup.object().shape({
  userPhoto: Yup.string(),
  name: Yup.string().min(3, 'Too short').max(30, 'Too long'),
  birthday: Yup.date(),
  email: Yup.string().email('Invalid email'),
  phone: Yup.string()
    .min(8, 'Too short')
    .matches(phonePattern, 'Invalid phone number format'),
  skype: Yup.string()
    .min(6, 'Too short')
    .max(32, 'Too long')
    .matches(skypeIdPattern, 'Invalid skype id format'),
});

export default UserFormSchema;
