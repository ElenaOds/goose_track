import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
import css from './UserForm.module.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    userPhoto: null,
    name: '',
    email: '',
    phone: '',
    birthday: '',
    skype: '',
  });

  // const dispatch = useDispatch();
  const { userPhoto, name, birthday, email, phone, skype } =
    useSelector(selectUser);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });
    // dispatch();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
          <img className={css.userPhoto} src={userPhoto} alt="user avatar" />
        ) : (
          <h3 className={css.userletter}>{name[0]}</h3>
        )}
      </label>

      <label className={css.label} htmlFor="user">
        <h4 id="user" name="user">
          {formData.name.length > 0 ? formData.name : name}
        </h4>
        User
      </label>

      <div className={css.container}>
        <label className={css.label} htmlFor="name">
          <p>User Name</p>
          <input
            className={css.input}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name.length > 0 ? formData.name : name}
            onChange={handleChange}
          />
        </label>

        <label className={css.label} htmlFor="birthday">
          <p>Birthday</p>
          <input
            className={css.input}
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday.length > 0 ? formData.birthday : birthday}
            onChange={handleChange}
          />
        </label>

        <label className={css.label} htmlFor="email">
          <p>Email</p>
          <input
            className={css.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email.length > 0 ? formData.email : email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label} htmlFor="phone">
          <p>Phone</p>
          <input
            className={css.input}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone.length > 0 ? formData.phone : phone}
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
            value={formData.skype.length > 0 ? formData.skype : skype}
            onChange={handleChange}
          />
        </label>
      </div>

      <button className={css.button} type="submit" disabled>
        Save changes
      </button>
    </form>
  );
};

export default UserForm;
