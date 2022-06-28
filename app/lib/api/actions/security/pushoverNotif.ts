import httpWrapper from 'utils/service/httpWrapper'
import routes from "../../routes"
import objectDataExtractor from '../../../response/extractors/objectDataExtractor'
import { PushoverBody } from 'app/types/global'

const pushOverNotif = async (data: PushoverBody): Promise<any> => {
    let promise = new Promise((async (resolve, reject) => {
        try {
            const res = await httpWrapper({
                method: 'POST',
                data: data,
                isSecured: false,
                url: routes.PUSHOVER
            })
            
            return resolve(objectDataExtractor(res))
        } catch (error) {
            return reject(error)
        }
    }))

    return promise
}

export default pushOverNotif