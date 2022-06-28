import * as types from 'app/actions/security'

const initialState = {
    loginBeingProcessed: false,
    errorLogin: false,
    isLoggedIn: false,
    preProcessing: '',
    digitValue: '',
    errorLoginResetPassword: false,
    errorWrongCode: false,
    currentRoles: [],
    currentLoginInformation: {},
    putOnboardCallback: false,
    userAdminSubscriptionPlan: -1,
    emailStructureOnboard: '',
    phoneStructureOnboard: '',
    identifierPp: '',
    searchEngineEntityId: '',
    isReinitPassword: false
}

type Action = {
  type: string,
  field: string,
  value: string
}

const securityReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.SET_SECURITY_FIELDS:
      return {
        ...state,
        [action.field] : action.value
      }
    default:
      return state;
  }
}

export default securityReducer