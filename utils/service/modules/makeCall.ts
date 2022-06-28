import axios from "axios"

export const makeCall = async (
    url: string,
    method: any,
    headers: any,
    data: any,
    params: any,
    customHost: string,
    responseType?: any
) => {
    if (url) {
        let promise = new Promise((async (resolve, reject) => {
            let host = process.env.NEXT_PUBLIC_API_URL

            if (customHost !== '') {
                host = customHost
            }

            try {
                const res = await axios({
                    method: method,
                    url: host + url,
                    headers: headers,
                    data: data,
                    params: params,
                    responseType
                })

                return resolve(res)
            } catch (error) {
                return reject(error)
            }
        }))

        return promise
    }
}

export default makeCall