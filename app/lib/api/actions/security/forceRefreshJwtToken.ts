import httpWrapper from 'utils/service/httpWrapper'
import routes from "../../routes"
import objectDataExtractor from '../../../response/extractors/objectDataExtractor'

type Props = {
    refresh_token: string,
    brand: string,
    type: string
}

const forceRefreshJwtToken = async (data: Props): Promise<any> => {
    let promise = new Promise((async (resolve, reject) => {
        try {
            const res = await httpWrapper({
                method: 'POST',
                data: data,
                isSecured: false,
                url: routes.API_AUTHENTICATION_REFRESH
            })

            return resolve(objectDataExtractor(res))
        } catch (error) {
            return reject(error)
        }
        
    }))

    return promise
}

export default forceRefreshJwtToken