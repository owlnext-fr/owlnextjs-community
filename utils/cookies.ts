import Cookies from 'universal-cookie'
import nookies from 'nookies'

/**
 * Interface function to get a data from a cookie.
 */
export const getCookie = (cookieName: string): string => {
    const cookies = new Cookies()
    let final = ''

    if (typeof(cookies.get(cookieName)) !== 'undefined') {
        final = cookies.get(cookieName)
    }

    return final
}

/**
 * Interface function to set a value into a cookie. You can pass the context to set in SSR
 */
export const setCookie = (cookieName: string, cookieValue: string, context?: any) => {
    let cookies: any = new Cookies()

    if (typeof(context) !== 'undefined') {
        cookies = nookies.get(context)
        
        nookies.set(context, cookieName, cookieValue, { path: '/' })
    } else {
        cookies.set(cookieName, cookieValue, { path: '/' })
    }
}