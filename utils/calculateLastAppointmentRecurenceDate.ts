import { DateTime } from "luxon"

const calculateLastAppointmentDate = (firstAppointmentDate: Date, nbRecurences: number, frequency: number): string => {
    const baseDate = DateTime.fromJSDate(firstAppointmentDate)
    const lastAppointmentDateObject = baseDate.plus({
        week: frequency * (nbRecurences >= 0 ? (nbRecurences - 1) : 0)
    })
    return lastAppointmentDateObject.toLocaleString(DateTime.DATE_FULL)
}

export default calculateLastAppointmentDate