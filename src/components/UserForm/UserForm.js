import css from './UserForm.module.css';

const UserForm = () => {
  return (
    <form className={css.userform}>
      <input
        className={css.userform__userPhoto}
        type="file"
        id="userPhoto"
        name="userPhoto"
      />
      <label className={css.userform__userPhoto__label} htmlFor="userPhoto">
        
        {/* <img
          className={css.userform__userPhoto_img}
          src=""
        /> */}
      </label>

      <label htmlFor="username">User Name</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
      />

      <label htmlFor="birthday">Birthday</label>
      <input type="date" id="birthday" name="birthday" />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
      />

      <label htmlFor="skype">Skype</label>
      <input
        type="text"
        id="skype"
        name="skype"
        placeholder="Add a skype number"
      />

      <button type="submit" disabled>
        Save changes
      </button>
    </form>
  );
};

export default UserForm;
