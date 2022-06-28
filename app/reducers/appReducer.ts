import { SnackType } from 'app/types/global'
import { AnyAction } from 'redux';
import * as types from 'app/actions/app'
import { Snack } from 'app/types/global'

type State = {
  currentDetailsObject: any;
  currentDetailsAboveObject: any;
  selectedDetailsSubTab: string;
  snacks: Snack[];
  anim: boolean;
  selectedItem: string
  countriesList: any[];
  addressesList: any[];
  isSearchScreen: boolean;
  triggerClearAboveSideblock: boolean;
  historyUrl: any[];
  triggerSpecificAboveObject: boolean;
  transactionId: undefined | string;
}
const initialState: State = {
    currentDetailsObject: {},
    currentDetailsAboveObject: {},
    selectedDetailsSubTab: 'infos',
    snacks: [],
    anim: false,
    selectedItem: '',
    countriesList: [],
    addressesList: [],
    isSearchScreen: false,
    triggerClearAboveSideblock: false,
    historyUrl: [],
    triggerSpecificAboveObject: false,
    transactionId: undefined
}

const appReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_APP_FIELDS:
      return {
        ...state,
        [action.field] : action.value
      } as State
    case types.SET_SPECIFIC_OBJECT:
      return {
        ...state,
        currentDetailsObject: action.object
      }
    case types.SET_SPECIFIC_ABOVE_OBJECT:
      return {
        ...state,
        currentDetailsAboveObject: action.object,
        triggerSpecificAboveObject: true
      } as State
    case types.ADD_SNACK: 
      return {
        ...state,
        snacks: [action.snack, ...state.snacks]
      } as State
    case types.REMOVE_SNACK: {
      const newSnacks = state.snacks.filter((snack: SnackType) => snack.id !== action.snackId )
      return {
        ...state,
        snacks: newSnacks
      } as State
    }
    case types.CLEAR_ABOVE_SIDEBLOCK: {
       return {
         ...state,
         triggerClearAboveSideblock: true,
       } as State
    }
    case types.CLEAR_SELECTED_ITEM: {
      return {
        ...state,
        selectedItem: ''
      } as State
    }
    case types.GET_ADDRESS_API: {
      const { result }: any = action

      return {
        ...state,
        addressesList: result.features
      } as State
    }
    default:
      return state;
  }
}

export default appReducer