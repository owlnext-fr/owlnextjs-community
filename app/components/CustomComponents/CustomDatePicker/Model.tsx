import { useMemo, useState, useCallback, useEffect } from 'react'
import moment from 'moment'
import useTranslation from 'hooks/useTranslation';
import View from './View';

type Props = {
  value: any,
  hasTime?: boolean,
  setter: (object: Date) => void,
  className?: string,
  error?: boolean,
  disabled?: boolean,
  placeholder?: string;
  maxDate?: any
  startDate?: Date,
  minDate?: any,
  hasIcons?: boolean,
  hasCustomHeader?: boolean
}

const ViewModel: React.FC<Props> = ({
  value,
  hasTime = true,
  setter,
  className = '',
  error = false,
  disabled = false,
  placeholder = '',
  maxDate = undefined,
  startDate = undefined,
  minDate,
  hasIcons = true,
  hasCustomHeader = false
}) => {
  const [fullDate, setFullDate] = useState<any>(null)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<Date>(value)
  const range = (start: number, end: number) => Array.from({length: (end - start)}, (v, k) => k + start)

  const { t } = useTranslation()
  const years = range(1930, 2050)
  const months = [
    t("January"),
    t("February"),
    t("March"),
    t("April"),
    t("May"),
    t("June"),
    t("July"),
    t("August"),
    t("September"),
    t("October"),
    t("November"),
    t("December"),
  ];

  const handleSetDate = useCallback((e) => {
    let finalDate = moment(e)
    finalDate.set('hour', hours)
    finalDate.set('minute', minutes)

    setter(finalDate.toDate())
    setFullDate(finalDate)
  }, [hours, minutes, setter])

  const handleSetTime = useCallback((e) => {
    setHours(e.get('hour'))
    setMinutes(e.get('minute'))
    let finalDate = fullDate

    finalDate.set('hour', e.get('hour'))
    finalDate.set('minute', e.get('minute'))
    setFullDate(finalDate)
    setter(finalDate.toDate())
  }, [fullDate, setter])

  useEffect(() => {
    if (value) {
      setFullDate(moment(value))
    } else {
      setFullDate(null)
    }
  }, [value])

  // useEffect(() => {
  //   if (currentValue !== null) {
  //     const finalValue = moment(currentValue)
  //     setFullDate(finalValue)

  //     setter(finalValue.toDate())
  //   }
  // }, [setter, currentValue])
  
  const trads = useMemo(() => {
    return {
      time: t('Tasks_SelectTime'),
      placeholderDate: t('Date_Placeholder'),
      placeholderTime: t('Time_Placeholder')
    }
  }, [t])
  
  return (
    <View
      setter={setter}
      hasTime={hasTime}
      time={fullDate}
      handleSetTime={handleSetTime}
      handleSetDate={handleSetDate}
      trads={trads}
      open={open}
      customClass={className}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      maxDate={maxDate}
      startDate={startDate}
      minDate={minDate}
      hasIcons={hasIcons}
      years={years}
      months={months}
      hasCustomHeader={hasCustomHeader}
    />
  );
};

export default ViewModel;

