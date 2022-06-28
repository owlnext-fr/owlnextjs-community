import Cookies from 'universal-cookie'
import jwt_decode from "jwt-decode"
import refreshJwtToken from './refreshJwtToken'

export const checkIsLoggedIn = async () => {
  let promise = new Promise(async (resolve, reject) => {
    const token = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`)

    if (process.env.NEXT_PUBLIC_APPNAME == "NextSkeleton"){
      resolve({
        response: {
          status: 200
        }
      })
    } else {
      if(token){
        const decodedToken: {exp: number} = jwt_decode(token)
        const timeStamp = Math.floor(Date.now() / 1000)
  
        if (timeStamp >= decodedToken.exp) {
          try {
            await refreshJwtToken()
          } catch (error: any) {
            reject(error)
          }
        } else {
          resolve({
            response: {
              status: 200
            }
          })
        }
      }else{
        reject({
          response: {
            status: 401
          }
        })
      }
    }
  })

  return promise
}