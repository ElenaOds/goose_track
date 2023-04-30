import * as Yup from 'yup';

const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const UserFormSchema = Yup.object().shape({
  userPhoto: Yup.mixed()
    .required('A file is required')
    .test(
      'fileFormat',
      'Unsupported file format',
      value => value && supportedFormats.includes(value.type)
    ),
  name: Yup.string().min(3, 'Too short').max(50, 'Too long'),
  birthday: Yup.date(),
  email: Yup.string().email('Invalid email'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  skype: Yup.string(),
});

export default UserFormSchema;
