import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import styles from './CalendarToolbar.module.css'

const CalendarToolbar = () => {

    return(
        <div className={styles.wrapper}>
        <PeriodPaginator/>
        <PeriodTypeSelect/>
        </div>
    )
}

export default CalendarToolbar;