import { PeriodPaginator } from '../PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from '../PeriodTypeSelect/PeriodTypeSelect';
import styles from './CalendarToolbar.module.css'

const CalendarToolbar = ({doActiveMonth, doActiveDate}) => {

    return(
        <div className={styles.wrapper}>
        <PeriodPaginator/>
        <PeriodTypeSelect doActiveMonth={doActiveMonth} doActiveDate={doActiveDate}/>
        </div>
    )
}

export default CalendarToolbar;