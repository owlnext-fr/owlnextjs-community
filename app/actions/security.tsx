export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM'
export const SET_SECURITY_FIELDS = 'SET_SECURITY_FIELDS'
export const USER_DISCONNECT = 'USER_DISCONNECT'
export const SEND_RESET_PASSWORD_LOGIN = 'SEND_RESET_PASSWORD_LOGIN'
export const POST_RESET_PASSWORD_VALIDATE = 'POST_RESET_PASSWORD_VALIDATE'
export const FORCE_REFRESH_JWT_TOKEN = 'FORCE_REFRESH_JWT_TOKEN'

export const submitForm = (login: string, password: string) => ({
    type: SUBMIT_LOGIN_FORM,
    login,
    password
})

export const setSecurityFields = (field: string, value: any) => ({
    type: SET_SECURITY_FIELDS,
    field,
    value
})

export const userDisconnect = () => ({
    type: USER_DISCONNECT,
})

export const sendResetPasswordLogin = (login: string) => ({
    type: SEND_RESET_PASSWORD_LOGIN,
    login
})

export const postResetPasswordValidate = (data: any) => ({
    type: POST_RESET_PASSWORD_VALIDATE,
    data
})

export const forceRefreshJwtToken = (data: any) => ({
    type: FORCE_REFRESH_JWT_TOKEN,
    data
})