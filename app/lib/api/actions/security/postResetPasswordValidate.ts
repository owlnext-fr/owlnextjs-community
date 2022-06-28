import httpWrapper from 'utils/service/httpWrapper'
import routes from "../../routes"
import objectDataExtractor from '../../../response/extractors/objectDataExtractor'

type Props = {
    email: string,
    brand: string,
    type: string,
    code: string,
    password: string,
    fingerprint: string
}

const postResetPasswordValidate = async (data: Props): Promise<any> => {
    let promise = new Promise((async (resolve, reject) => {
        try {
            const res = await httpWrapper({
                method: 'POST',
                data: data,
                url: routes.POST_RESET_PASSWORD_VALIDATE
            })
    
            return resolve(objectDataExtractor(res))
        } catch (error) {
            console.dir(error)
            return reject(error)
        }
        
    }))

    return promise
}

export default postResetPasswordValidate