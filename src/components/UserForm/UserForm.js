import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
// import { useFormik } from 'formik';
// import UserFormSchema from './UserFormSchema';
import DatePicker from 'react-datepicker';
// import { ReactComponent as Chevron } from '../../icons/chevron-down.svg';
// import { ReactComponent as Plus } from '../../icons/add-photo-icon.svg';
// import "./calendar.css"
import css from './UserForm.module.css';

const UserForm = () => {
  // const dispatch = useDispatch();
  const { userPhoto, name, birthday, email, phone, skype } =
    useSelector(selectUser);

  const [isChanged, setIsChanged] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState('');

  const [formData, setFormData] = useState({
    userPhoto: '',
    name: '' || name,
    birthday: new Date() || birthday,
    email: '' || email,
    phone: phone || 'Add a phone number',
    skype: skype || 'Add a skype number',
  });

  const handleChange = e => {
    setIsChanged(true);
    const { name, value } = e.target;
    if (name === 'userPhoto') {
      const selectedFile = e.target.files[0];
      setUserPhotoURL(URL.createObjectURL(selectedFile));
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });
    setIsChanged(false);
  };

  // const formik = useFormik({
  //   initialValues: {
  //     userPhoto: '',
  //     name: '',
  //     email: '',
  //     phone: '',
  //     birthday: '',
  //     skype: '',
  //   },
  //   validationSchema: UserFormSchema,
  //   validateOnChange: true,
  //   handleSubmit,
  // });

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.relative}>
        <input
          className={css.uploader}
          type="file"
          id="userPhoto"
          name="userPhoto"
          value={formData.userPhoto}
          onChange={handleChange}
        />
        <label className={css.uploader__label} htmlFor="userPhoto">
          {userPhoto ? (
            <img
              className={css.userPhoto}
              src={userPhotoURL || userPhoto}
              alt="user avatar"
            />
          ) : (
            <h3 className={css.userletter}>{name[0]}</h3>
          )}
        </label>
        {/* <Plus className={css.plus_icon} /> */}
      </div>

      <label className={`${css.label} ${css.user_label}`} htmlFor="user">
        <h4 id="user" name="user">
          {formData.name.length > 0 ? formData.name : name}
        </h4>
        User
      </label>

      <div className={css.container}>
        <div className={css.column}>
          <label className={css.label} htmlFor="name">
            <p>User Name</p>
            <input
              className={css.input}
              type="text"
              id="name"
              name="name"
              placeholder="Add your name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label className={`${css.label} ${css.relative}`} htmlFor="birthday">
            <p>Birthday</p>
            <DatePicker
              className={css.input}
              selected={formData.birthday}
              maxDate={new Date()}
              onChange={handleChange}
              calendarStartDay={1}
              dateFormat="dd/MM/yyyy"
            />
            {/* <Chevron className={css.chevron_icom} /> */}
          </label>

          <label className={css.label} htmlFor="email">
            <p>Email</p>
            <input
              className={css.input}
              type="email"
              id="email"
              name="email"
              placeholder="Add your email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className={css.column}>
          <label className={css.label} htmlFor="phone">
            <p>Phone</p>
            <input
              className={css.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label className={css.label} htmlFor="skype">
            <p>Skype</p>
            <input
              className={css.input}
              type="text"
              id="skype"
              name="skype"
              placeholder="Add a skype number"
              value={formData.skype}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <button className={css.button} type="submit" disabled={!isChanged}>
        Save changes
      </button>
    </form>
  );
};

export default UserForm;
