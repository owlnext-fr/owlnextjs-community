import { isJWTValid } from "../jwt-utils"
import makeCall from './modules/makeCall'
import pushoverCall from './modules/pushoverCall'
import refreshJwtToken from 'app/lib/api/actions/security/refreshJwtToken'
import { decodeJWTToken } from 'utils/jwt-utils'
import noPushoverRoutes from './noPushoverRoutes'

declare type Props = {
    method: Method,
    data?: any,
    isSecured?: boolean,
    url: string
    isListing?: boolean,
    isMultipart?: boolean,
    params?: any,
    customHost?: string
}

declare type Method = any

const httpWrapper = async({
    method,
    data = {},
    isSecured = true,
    url,
    isListing = false,
    isMultipart = false,
    params,
    customHost = ''
}: Props): Promise<any> => {
    const jwtToken = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`)
    let headers: any = {}
    let responseType: any = undefined

    if (isListing || method === 'POST') {
        headers.accept = 'application/ld+json'
        headers['Content-Type'] = 'application/ld+json'
    } else if (isMultipart) {
        headers.accept = 'application/json,text/plain, */*'
        headers['Content-Type'] = 'multipart/form-data'
        responseType = 'arraybuffer'
    } else {
        headers.accept = 'application/json'
        headers['Content-Type'] = 'application/json'
    }

    let promise = new Promise((async (resolve, reject) => {
        if (isSecured) {
            headers.Authorization = 'Bearer ' + jwtToken

            if (jwtToken) {
                const decodedJwtToken = decodeJWTToken(jwtToken)
                
                if (false === isJWTValid(jwtToken)){
                    try {
                        let refreshRequest: any = await refreshJwtToken()
                        if (refreshRequest.status === 200) {
                            headers.Authorization = 'Bearer ' + refreshRequest.data.token
                            let res = await makeCall(url, method, headers, data, params, customHost, responseType)

                            resolve(res)
                        } else {
                            reject('Problem refresh JWT')
                        }
                    } catch (error) {
                        if (error == 'refreshing') {
                            try {
                                setTimeout(async () => {
                                    try {
                                        let res = await makeCall(url, method, headers, data, params, customHost, responseType)
        
                                        resolve(res)
                                    } catch (error) {
                                        window.location.assign('/logout')
                                    }
                                }, 500)
                            } catch (error) {
                                reject(error)
                            }
                        } else {
                            reject(error)
                        }
                    }
                }  else {
                    try {
                        let res = await makeCall(url, method, headers, data, params, customHost, responseType)
                        resolve(res)
                    } catch (error: any) {
                        const splitedUrl = url.split('/')
                        let doCall = true

                        for (const item of noPushoverRoutes) {
                            if (item.path == splitedUrl[splitedUrl.length - 1] && error?.response?.status == item.status) {
                                doCall = false
                            }
                        }
                    
                        if (doCall) {
                            pushoverCall({
                                details: error?.response?.data?.detail,
                                status: error?.response?.status,
                                timestamp: (Date.now() / 1000).toString(),
                                url: window.location.toString(),
                                companyId: decodedJwtToken.company,
                                employeeId: decodedJwtToken.employeeId,
                                endpoint: url,
                                protocol: method
                            })
                        }

                        reject(error)
                    }
                }
            } else {
                reject('no JWT Token')
            }
        } else {
            try {
                let res = await makeCall(url, method, headers, data, params, customHost, responseType)
                resolve(res)
            } catch (error) {
                reject(error)
            }
        }
    }))

    return promise
}

export default httpWrapper