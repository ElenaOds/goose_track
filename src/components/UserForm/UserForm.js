import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user/user.selectors';
import { updateUser } from '../../redux/user/user.operations';
import { useFormik } from 'formik';
import UserFormSchema from './UserFormSchema';
import DatePicker from 'react-datepicker';
import { ReactComponent as Error } from '../../icons/error-icon.svg';
import { ReactComponent as Success } from '../../icons/success-icon.svg';
// import { ReactComponent as Chevron } from '../../icons/chevron-down.svg';
import { ReactComponent as Plus } from '../../icons/add-photo-icon.svg';
import './calendar.css';
import css from './UserForm.module.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const {
    user: { userPhoto, name, birthday, email, phone, skype }
  } = useSelector(selectUser);


  const formattedDate = birthday ? new Date(birthday) : new Date();

  const [isChanged, setIsChanged] = useState(false);

  const [formData, setFormData] = useState({
    userPhoto: '' || userPhoto,
    name: '' || name,
    birthday: '' || formattedDate,
    email: '' || email,
    phone: '' || phone,
    skype: '' || skype,
  });
  const formDataObj = new FormData();


  const formik = useFormik({
    initialValues: {
      userPhoto: '',
      name: formData.name ?? '',
      birthday: formData.birthday ?? '',
      email: formData.email,
      phone: formData.phone ?? '',
      skype: formData.skype ?? '',
    },
    validationSchema: UserFormSchema,
    validateOnChange: true,
    onSubmit: () => {
      Object.keys(formData).forEach(key => {
        formDataObj.append(key, formData[key]);
      });
      dispatch(updateUser(formDataObj));

      setIsChanged(true);
    },
  });

  const onChange = e => {
    setIsChanged(true);
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const onChangePhotoHandler = e => {
    setIsChanged(true);
    const fileUploaded = e.target.files[0];
    formik.setFieldValue('userPhoto', fileUploaded);
    setFormData({ ...formData, userPhoto: fileUploaded });
  };

  const onChangeDatePicker = date => {
    setIsChanged(true);
    formik.setFieldValue('birthday', date);
    setFormData({ ...formData, birthday: date });
  };

  return (
    <form encType="multipart/form-data"
    className={css.form} onSubmit={formik.handleSubmit}>
      <div className={css.plus_container}>
      <label className={css.uploader__label}>
      {userPhoto ? (
          <img className={css.userPhoto} src={userPhoto} alt="Userphoto" />
        ) : (
          <h3 className={css.userletter}>{name[0]}</h3>
        )}
      <input className={css.uploader}
        type="file"
        accept="image/png, image/gif, image/jpeg, image/jpg"
        id="userPhoto"
        name="userPhoto"
        onChange={onChangePhotoHandler}
      />
      </label>
      <Plus className={css.plus_icon} />
      </div>
      <label className={`${css.label} ${css.user_label}`} htmlFor="user">
        <h4 id="user" name="user">
          {formData.name.length > 0 ? formData.name : name}
        </h4>
        User
      </label>

      <div className={css.container}>
        <div className={css.column}>
          <label
            className={`${css.label} ${
              formik.touched.name && formik.errors.name
                ? css.errorLabel
                : formik.touched.name && !formik.errors.name
                ? css.successLabel
                : ''
            }`}
            htmlFor="name"
          >
            <p>User Name</p>
            <input
              className={`${css.input} ${
                formik.touched.name && formik.errors.name
                  ? css.errorInput
                  : formik.touched.name && !formik.errors.name
                  ? css.successInput
                  : ''
              }`}
              type="text"
              id="name"
              name="name"
              placeholder="Add your name"
              onChange={onChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <>
                <Error className={css.error_icon} />
                <div className={css.errorMsg}>{formik.errors.name}</div>
              </>
            ) : formik.touched.name && !formik.errors.name ? (
              <Success className={css.success_icon} />
            ) : null}
          </label>

          <label
            className={`${css.label} ${
              formik.touched.birthday && formik.errors.birthday
                ? css.errorLabel
                : formik.touched.birthday && !formik.errors.birthday
                ? css.successLabel
                : ''
            }`}
            htmlFor="birthday"
          >
            <p>Birthday</p>
            <DatePicker
              className={`${css.input} ${
                formik.touched.birthday && formik.errors.birthday
                  ? css.errorInput
                  : formik.touched.birthday && !formik.errors.birthday
                  ? css.successInput
                  : ''
              }`}
              id="birthday"
              name="birthday"
              selected={formik.values.birthday}
              maxDate={new Date()}
              onChange={onChangeDatePicker}
              calendarStartDay={1}
              dateFormat="dd/MM/yyyy"
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <>
                <Error className={css.error_icon} />
                <div className={css.errorMsg}>{formik.errors.birthday}</div>
              </>
            ) : formik.touched.birthday && !formik.errors.birthday ? (
              <Success className={css.success_icon} />
            ) : null}
          </label>

          <label
            className={`${css.label} ${
              formik.touched.email && formik.errors.email
                ? css.errorLabel
                : formik.touched.email && !formik.errors.email
                ? css.successLabel
                : ''
            }`}
            htmlFor="email"
          >
            <p>Email</p>
            <input
              className={`${css.input} ${
                formik.touched.email && formik.errors.email
                  ? css.errorInput
                  : formik.touched.email && !formik.errors.email
                  ? css.successInput
                  : ''
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="Add your email"
              value={formik.values.email}
              onChange={onChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <>
                <Error className={css.error_icon} />
                <div className={css.errorMsg}>{formik.errors.email}</div>
              </>
            ) : formik.touched.email && !formik.errors.email ? (
              <Success className={css.success_icon} />
            ) : null}
          </label>
        </div>

        <div className={css.column}>
          <label
            className={`${css.label} ${
              formik.touched.phone && formik.errors.phone
                ? css.errorLabel
                : formik.touched.phone && !formik.errors.phone
                ? css.successLabel
                : ''
            }`}
            htmlFor="phone"
          >
            <p>Phone</p>
            <input
              className={`${css.input} ${
                formik.touched.phone && formik.errors.phone
                  ? css.errorInput
                  : formik.touched.phone && !formik.errors.phone
                  ? css.successInput
                  : ''
              }`}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone"
              value={formik.values.phone}
              onChange={onChange}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <>
                <Error className={css.error_icon} />
                <div className={css.errorMsg}>{formik.errors.phone}</div>
              </>
            ) : formik.touched.phone && !formik.errors.phone ? (
              <Success className={css.success_icon} />
            ) : null}
          </label>

          <label
            className={`${css.label} ${
              formik.touched.skype && formik.errors.skype
                ? css.errorLabel
                : formik.touched.skype && !formik.errors.skype
                ? css.successLabel
                : ''
            }`}
            htmlFor="skype"
          >
            <p>Skype</p>
            <input
              className={`${css.input} ${
                formik.touched.skype && formik.errors.skype
                  ? css.errorInput
                  : formik.touched.skype && !formik.errors.skype
                  ? css.successInput
                  : ''
              }`}
              type="text"
              id="skype"
              name="skype"
              placeholder="Add a skype id"
              value={formik.values.skype}
              onChange={onChange}
            />
            {formik.touched.skype && formik.errors.skype ? (
              <>
                <Error className={css.error_icon} />
                <div className={css.errorMsg}>{formik.errors.skype}</div>
              </>
            ) : formik.touched.skype && !formik.errors.skype ? (
              <Success className={css.success_icon} />
            ) : null}
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