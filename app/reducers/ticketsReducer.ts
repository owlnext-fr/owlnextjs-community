import * as types from 'app/actions/sideblock'
import { PatientResponse } from 'app/types/global'

export const SET_TICKETS_FIELDS = 'SET_TICKETS_FIELDS';

const initialState = {
  ticketDetails: {},
	ticketDetailsLoading: false,
}

type Action = {
  type: string,
  field: string,
  value: string,
  result: Array<PatientResponse> | any,
}

const ticketsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_TICKETS_FIELDS:
      return {
        ...state,
        [action.field] : action.value
      }
    default:
      return state;
  }
}

export default ticketsReducer