export const SET_APP_FIELDS = 'SET_APP_FIELDS'
export const SET_SPECIFIC_OBJECT = 'SET_SPECIFIC_OBJECT'
export const SET_SPECIFIC_ABOVE_OBJECT = 'SET_SPECIFIC_ABOVE_OBJECT'
export const REMOVE_SNACK = 'REMOVE_SNACK'
export const ADD_SNACK = 'ADD_SNACK'
export const CLEAR_ABOVE_SIDEBLOCK = 'CLEAR_ABOVE_SIDEBLOCK'
export const CLEAR_SELECTED_ITEM = 'CLEAR_SELECTED_ITEM'
export const GET_ADDRESS_API = 'GET_ADDRESS_API'

import { SnackType } from 'app/types/global'
import { AnyAction } from 'redux'

export const setAppFields = (field: string, value: any) => ({
  type: SET_APP_FIELDS,
  field,
  value,
})

export const setSpecificObject = (object: any): AnyAction => ({
    type: SET_SPECIFIC_OBJECT,
    object
})

export const setSpecificAboveObject = (object: any, isHistory?: boolean): AnyAction => ({
    type: SET_SPECIFIC_ABOVE_OBJECT,
    object,
    isHistory
})

export const removeSnack: (snackId: number) => AnyAction = (snackId) => ({
  type: REMOVE_SNACK,
  snackId
});

export const addSnack: (snack: SnackType) => AnyAction = (snack) => ({
  type: ADD_SNACK,
  snack
})

export const clearAboveSideblock = (): AnyAction => ({
  type: CLEAR_ABOVE_SIDEBLOCK
})

export const clearSelectedItem = (): AnyAction => ({
  type: CLEAR_SELECTED_ITEM
})

export const getAddressApi = (address: string): AnyAction => ({
  type: GET_ADDRESS_API,
  address
})