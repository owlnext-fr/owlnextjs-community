import * as types from '../actions/history';
import ComponentsTable from 'app/components/System/Resolvers/SideBlockAboveTypeResolver/ResolverTable'

import { setSpecificAboveObject } from 'app/actions/app';
import { addSnack } from 'app/actions/app'

const historyMiddleware = (store: any) => (next: any) => async (action: any) => {
    const jwtToken = sessionStorage.getItem('orgavita_jwtToken')
    switch (action.type) {
        case types.CHECK_SIDEBLOCK_HISTORY: {
            const localArray = localStorage.getItem('orgavita_localSideblockHistory')
            let currentHistory: Array<any> = []

            if (localArray) {
                currentHistory = JSON.parse(localArray)
            }
            

            for (const [key, value] of Object.entries(ComponentsTable)) {
                if (key == action.object.type && value.sideblockHistory) {
                    currentHistory.splice(-1, 1)
                }
            }
            
            if (currentHistory.length > 0) {
                store.dispatch(setSpecificAboveObject(currentHistory[currentHistory.length - 1], true))
            } else {
                store.dispatch(setSpecificAboveObject({}))
            }

            localStorage.setItem('orgavita_localSideblockHistory', JSON.stringify(currentHistory))
            
            break
        }
        case types.CREATE_SIDEBLOCK_HISTORY: {
            const localArray = localStorage.getItem('orgavita_localSideblockHistory')
            let currentHistory: Array<any> = []

            if (localArray) {
                currentHistory = JSON.parse(localArray)
            }

            if (currentHistory.length >= 10) {
                currentHistory.splice(0, 1)
            }

            if (!action.isHistory) {
                for (const [key, value] of Object.entries(ComponentsTable)) {
                    if (action.object.type === key && value.sideblockHistory) {                        
                        if (currentHistory.length > 0 && currentHistory[currentHistory.length - 1].type == action.object.type) {
                            currentHistory.splice(-1, 1)
                        }

                        currentHistory.push(action.object)
                    }
                }
            }
                
            localStorage.setItem('orgavita_localSideblockHistory', JSON.stringify(currentHistory))
            
            break
        }
        case types.EMPTY_SIDEBLOCK_HISTORY: {
            localStorage.setItem('orgavita_localSideblockHistory', JSON.stringify([]))
            break
        }
        default:
            next(action)
  }
};

export default historyMiddleware