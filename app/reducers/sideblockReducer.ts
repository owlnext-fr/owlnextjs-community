import * as types from 'app/actions/sideblock'
import { PatientResponse } from 'app/types/global'

const initialState = {
    sideblockTitle: ''
}

type Action = {
  type: string,
  field: string,
  value: string,
  result: Array<PatientResponse> | any,
}

const securityReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.SET_SIDEBLOCK_FIELDS:
      return {
        ...state,
        [action.field] : action.value
      }
    default:
      return state;
  }
}

export default securityReducer