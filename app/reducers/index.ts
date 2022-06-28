import { combineReducers } from 'redux'

import securityReducer from './securityReducer'
import appReducer from './appReducer'
import sideblockReducer from './sideblockReducer'
import ticketsReducer from './ticketsReducer'

const reducers = {
    security: securityReducer,
    app: appReducer,
    sideblock: sideblockReducer,
    tickets: ticketsReducer
}
  
export default combineReducers(reducers)