import Cookies from 'universal-cookie'
import routes from '../../routes'
import httpWrapper from '../../../../../utils/service/httpWrapper'
import axios from 'axios'

const refreshJwtToken = async ()  => {
    let promise = new Promise(async (resolve, reject) => {
        let refreshToken = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`)
        
        const data = {
            refresh_token: refreshToken,
            brand: "1",
            type: "admin"
        }

        try {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}${routes.API_AUTHENTICATION_REFRESH}`, data).then((res) => {
                sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`, res.data.token)
                sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`, res.data.refresh_token)
                return resolve(res)
            }).catch(() => {
                reject('refreshing')
            })
        } catch (error) {
            return reject(error)
        }
    })

    return promise
}


export default refreshJwtToken