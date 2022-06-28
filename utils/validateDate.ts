import moment from 'moment'

const validateDate = (inputDate: string): boolean => {
  const testDate = moment(inputDate, 'DD/MM/YYYY', true)
  return testDate.isValid()
}

export default validateDate