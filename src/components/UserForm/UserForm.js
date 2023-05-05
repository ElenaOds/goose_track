import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user/user.selectors';
import { updateUser } from '../../redux/user/user.operations';
import { useFormik } from 'formik';
import UserFormSchema from './UserFormSchema';
import DatePicker from 'react-datepicker';
import { ReactComponent as Error } from '../../icons/error-icon.svg';
import { ReactComponent as Success } from '../../icons/success-icon.svg';
import { ReactComponent as Plus } from '../../icons/add-photo-icon.svg';
import './calendar.css';
import css from './UserForm.module.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const {
    user: { userPhoto, name, birthday, email, phone, skype },
  } = useSelector(selectUser);

  const formattedDate = birthday ? new Date(birthday) : new Date();

  const [isChanged, setIsChanged] = useState(false);
  const [uploadedFileURL, setUploadedFileURL] = useState('');

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
      setIsChanged(false);
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
    setUploadedFileURL(URL.createObjectURL(fileUploaded));
    formik.setFieldValue('userPhoto', fileUploaded);
    setFormData({ ...formData, userPhoto: fileUploaded });
  };

  const onChangeDatePicker = date => {
    setIsChanged(true);
    formik.setFieldValue('birthday', date);
    setFormData({ ...formData, birthday: date });
  };

  return (
    <form
      encType="multipart/form-data"
      className={css.form}
      onSubmit={formik.handleSubmit}
    >
      <div className={css.plus_container}>
        <label htmlFor="userPhoto">
          <label className={css.uploader_label}>
            {userPhoto || uploadedFileURL ? (
              <img
                className={css.userPhoto}
                src={uploadedFileURL ? uploadedFileURL : userPhoto}
                alt="Userphoto"
              />
            ) : (
              <h3 className={css.userLetter}>{name[0]}</h3>
            )}
            <input
              className={css.uploader}
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              id="userPhoto"
              name="userPhoto"
              onChange={onChangePhotoHandler}
            />
          </label>
          <Plus className={css.plus_icon} />
        </label>
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
                ? css.error_label
                : formik.touched.name && !formik.errors.name
                ? css.success_label
                : ''
            }`}
            htmlFor="name"
          >
            <p>User Name</p>
            <input
              className={`${css.input} ${
                formik.touched.name && formik.errors.name
                  ? css.error_input
                  : formik.touched.name && !formik.errors.name
                  ? css.success_input
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
                <div className={css.error_msg}>{formik.errors.name}</div>
              </>
            ) : formik.touched.name && !formik.errors.name ? (
              <Success className={css.success_icon} />
            ) : null}
          </label>

          <label
            className={`${css.label} ${
              formik.touched.birthday && formik.errors.birthday
                ? css.error_label
                : formik.touched.birthday && !formik.errors.birthday
                ? css.success_label
                : ''
            }`}
            htmlFor="birthday"
          >
            <p>Birthday</p>
            <div className={css.datepicker_container}>
              <DatePicker
                className={`${css.input} ${css.datepicker} ${
                  formik.touched.birthday && formik.errors.birthday
                    ? css.error_input
                    : formik.touched.birthday && !formik.errors.birthday
                    ? css.success_input
                    : ''
                }`}
                id="birthday"
                name="birthday"
                selected={formik.values.birthday}
                maxDate={new Date()}
                onChange={onChangeDatePicker}
                calendarStartDay={1}
                dateFormat="dd/MM/yyyy"
                formatWeekDay={weekdayShort => weekdayShort.charAt(0)}
              />
            </div>
            {formik.touched.birthday && formik.errors.birthday ? (
              <>
                <Error className={css.error_icon} />
                <div className={css.error_msg}>{formik.errors.birthday}</div>
              </>
            ) : formik.touched.birthday && !formik.errors.birthday ? (
              <Success className={css.success_icon} />
            ) : null}
          </label>

          <label
            className={`${css.label} ${
              formik.touched.email && formik.errors.email
                ? css.error_label
                : formik.touched.email && !formik.errors.email
                ? css.success_label
                : ''
            }`}
            htmlFor="email"
          >
            <p>Email</p>
            <input
              className={`${css.input} ${
                formik.touched.email && formik.errors.email
                  ? css.error_input
                  : formik.touched.email && !formik.errors.email
                  ? css.success_input
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
                <div className={css.error_msg}>{formik.errors.email}</div>
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
                ? css.error_label
                : formik.touched.phone && !formik.errors.phone
                ? css.success_label
                : ''
            }`}
            htmlFor="phone"
          >
            <p>Phone</p>
            <input
              className={`${css.input} ${
                formik.touched.phone && formik.errors.phone
                  ? css.error_input
                  : formik.touched.phone && !formik.errors.phone
                  ? css.success_input
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
                <div className={css.error_msg}>{formik.errors.phone}</div>
              </>
            ) : formik.touched.phone && !formik.errors.phone ? (
              <Success className={css.success_icon} />
            ) : null}
          </label>

          <label
            className={`${css.label} ${
              formik.touched.skype && formik.errors.skype
                ? css.error_label
                : formik.touched.skype && !formik.errors.skype
                ? css.success_label
                : ''
            }`}
            htmlFor="skype"
          >
            <p>Skype</p>
            <input
              className={`${css.input} ${
                formik.touched.skype && formik.errors.skype
                  ? css.error_input
                  : formik.touched.skype && !formik.errors.skype
                  ? css.success_input
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
                <div className={css.error_msg}>{formik.errors.skype}</div>
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
