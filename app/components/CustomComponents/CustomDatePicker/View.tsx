
import { DateTime } from 'luxon';
import DatePicker from "react-datepicker";
import CustomInput from '../CustomInput';
import styles from './styles.module.scss';
import TimePicker from 'rc-time-picker';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
import { Trads } from 'app/types/global';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
registerLocale('fr', fr)

type Props = {
  setter: (object: any) => void,
  hasTime: boolean,
  time: any,
  handleSetTime: (e: any) => void,
  handleSetDate: (e: any) => void,
  trads: Trads,
  open: boolean,
  customClass: string,
  error: boolean,
  disabled: boolean,
  placeholder: string,
  maxDate: any;
  startDate?: Date,
  minDate: any,
  hasIcons: boolean,
  years: Array<number>,
  months: Array<string>,
  hasCustomHeader: boolean
}
  
const View: React.FC<Props> = ({
  setter,
  hasTime,
  time,
  handleSetTime,
  handleSetDate,
  trads,
  open,
  customClass,
  error,
  disabled,
  placeholder,
  maxDate,
  startDate = undefined,
  minDate,
  hasIcons,
  years,
  months,
  hasCustomHeader
}) => {
  return (
    <div className={[styles.customDatePickerContainer, customClass, disabled ? styles.disabled : ''].join(' ')}>
      { hasIcons && <DateRangeIcon />}
      <div className={[styles.date, hasTime ? styles.dateWithTime : ''].join(' ')}>
        <DatePicker 
          placeholderText={placeholder ? placeholder : trads.placeholderDate}
          selected={(time && time._isValid) ? time.toDate() : null} 
          onChange={handleSetDate} 
          locale={fr}
          dateFormat={'dd/MM/yyyy'}
          className={[error ? styles.error : undefined].join(' ')}
          disabled={disabled}
          maxDate={maxDate ? maxDate : undefined}
          startDate={startDate}
          minDate={minDate ? minDate : undefined}
          renderCustomHeader={hasCustomHeader ? ({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(parseFloat(value))}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          ) : undefined}
        />
      </div>
      {hasTime &&
        <>
          { hasIcons && <AccessTimeIcon />}
          <TimePicker
            value={(time && time._isValid) ? time : undefined}
            showSecond={false}
            minuteStep={15}
            onChange={handleSetTime}
            hideDisabledOptions={true}
            className={styles.timepicker}
            allowEmpty={false}
            disabled={(disabled || (!time))}
            placeholder={trads.placeholderTime}
          />
        </>
      }
    </div>
  );
};

export default View;

