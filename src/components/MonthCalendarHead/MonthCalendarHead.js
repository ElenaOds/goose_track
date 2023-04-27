import styles from './MonthCalendarHead.module.css';

const MonthCalendarHead = () => {
    return (
        
        <div className = {styles.days}>
      <p className = {styles.days_text}>Mon</p>
      <p className = {styles.days_text}>Tue</p>
      <p className = {styles.days_text}>Wed</p>
      <p className = {styles.days_text}>Thu</p>
      <p className = {styles.days_text}>Fri</p>
      <p className = {styles.days_weekends}>Sat</p>
      <p className = {styles.days_weekends}>Sun</p>

      <p className = {styles.days_small_text}>M</p>
      <p className = {styles.days_small_text}>T</p>
      <p className = {styles.days_small_text}>W</p>
      <p className = {styles.days_small_text}>T</p>
      <p className = {styles.days_small_text}>F</p>
      <p className = {styles.days_small_weekends}>S</p>
      <p className = {styles.days_small_weekends}>S</p>

      
    </div>
    )
}

export default MonthCalendarHead;