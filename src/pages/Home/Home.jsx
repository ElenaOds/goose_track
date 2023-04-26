import { ReactComponent as GooseLogo } from '../../icons/goosesidebar.svg';

import style from './Home.module.css';

const Home = () => {
  return (
    <container className={style.container}>
      <section className={style.hero}>
        <GooseLogo className={style.logo} />
        <h1 className={style.heading}>
          G<span className={style.headingSpecial}>oo</span>seTrack
        </h1>

        <div className={style.heroBtns}>
          <button className={`${style.btn} ${style.btn_login}`} type="button">
            Log in
          </button>

          <button
            className={`${style.btn} ${style.btn_register}`}
            type="button"
          >
            Register
          </button>
        </div>
      </section>

      <section className={style.features}>
        <ul className={style.feature_list}>
          <li className={style.feature_item}>
            {' '}
            <p>1</p>
            <h2>Calendar</h2>
            <h3>View</h3>
            <p>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </p>
            <figure>
              <img
                src="../../images/feature-calendar-mobile.jpeg"
                alt="Calendar page of this app"
              />
            </figure>
          </li>

          <li className={style.feature_item}>
            <p>2.</p>
            <h2>SIDEBAR</h2>
            <p>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </p>
            <figure>
              <img src="#" alt="Picture of the side bar of this app" />
            </figure>
          </li>
          <li className={style.feature_item}>
            <p>3</p>
            <h2>ALL IN</h2>
            <h2>ONE</h2>
            <p>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </p>
            <figure>
              <img src="#" alt="Picture of the task page of this app" />
            </figure>
          </li>
        </ul>
      </section>
    </container>
  );
};

export default Home;
