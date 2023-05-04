import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as GooseLogo } from '../../icons/goosesidebar.svg';
import { ReactComponent as LogIn } from '../../icons/log-in-01.svg';
import style from './Home.module.css';

const Home = () => {
  const location = useLocation();
  return (
    
    <container className={style.container}>

      <section className={style.hero}>
        <GooseLogo className={style.logo} />
        <h1 className={style.heading}>
          G<span className={style.headingSpecial}>oo</span>seTrack
        </h1>

        <div className={style.heroBtns}>
            <button
            className={`${style.btn} ${style.btn_register}`}
            type="button"
          >            
            <Link className={style.link} to="register" state={location.state}>
              Sign up
            </Link>             
           </button> 
           <button className={`${style.btn} ${style.btn_login}`} type="button"> 
            <Link className={style.link} to="login" state={location.state}>
              Log in
              <LogIn className={style.icon}/>
            </Link>
          </button> 
        </div>
      </section>

      <section className={style.features}>
        <ul className={style.feature_list}>
          <li className={style.feature_item}>
            <div >             
              <p className={style.feature_number}>1.</p>
              <h2 className={style.feature_name}>Calendar</h2>
              <h3>View</h3>
              <p className={style.feature_text}>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </p>

            </div>           
            <div className={style.foto_calendar}></div>          
          </li>
          <li className={style.feature_item}>                        
            <div className={style.reverse_position}>
              <p className={style.feature_number}>2.</p>
              <h3>SIDEBAR</h3>
              <p className={style.feature_text}>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </p>              
            </div>
            <div className={style.foto_sidebar}></div>                     
          </li>
          <li className={style.feature_item}>
            <div >
              <p className={style.feature_number}>3.</p>
              <h2 className={style.feature_name}>ALL IN</h2>
              <h3>ONE</h3>
              <p className={style.feature_text}>
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </p>
            </div>
            <div className={style.foto_all}></div>
          </li>
        </ul>
      </section>
      <section className={style.feedback}>
        <h2 className={style.review_head}>REVIEWS</h2>
        <div className={style.review}>
          <div className={style.review_list}>
          <div className={style.review_item}> 
             <div className={style.review_img_olena}></div >      
            <div>
              <h4>Olena Doe</h4>  
              <div className={style.stars}></div>           
              <p className={style.review_text}>
                GooseTrack is impressive, the calendar view and filter options
                make it easy to stay organized and focused. Highly recommended.
              </p>
            </div>
          </div>          
        </div>
        <div className={style.review_list}>
          <div className={style.review_item_mobile}>
          <div className={style.review_img_alex}></div>            
            <div>
              <h4>Alexander Hubbard</h4>
              <div className={style.stars}></div>
              <p className={style.review_text}>
                GooseTrack is incredibly helpful, the sidebar with account
                management, calendar, and filter options make navigation
                seamless. Great for staying organized.
              </p>
            </div>            
          </div>
          <div className={style.arrow}></div>
        </div>        
        </div>        
      </section>
    </container>

  );
};

export default Home;
