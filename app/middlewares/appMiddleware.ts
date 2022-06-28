import * as types from 'app/actions/app';
import useTranslation from 'hooks/useTranslation'

import getAddressApi from 'app/lib/api/actions/app/getAddressApi'
import { createSideblockHistory } from 'app/actions/history'

import { addSnack } from 'app/actions/app';

const appMiddleware = (store: any) => (next: any) => async (action: any) => {
    const { t } = useTranslation()

    switch (action.type) {
        case types.SET_SPECIFIC_ABOVE_OBJECT: {
            store.dispatch(createSideblockHistory(action.object, action.isHistory))
            next(action)
            break
        }
        case types.GET_ADDRESS_API: {
            const finalAddress = action.address.split(' ').join('+')
            
            try {
                let res = await getAddressApi(finalAddress)
                action.result = res
                next(action)
            } catch (error) {
                store.dispatch(addSnack({
                    type: 'error',
                    label: t('Generic_Error'),
                    id: Date.now(),
                }))
            }

            break
        }
        default:
            next(action)
    }
};

export default appMiddleware