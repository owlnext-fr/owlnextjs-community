import * as types from 'app/actions/security';
import { setSecurityFields } from 'app/actions/security';
import { checkJWTToken, decodeJWTToken } from 'utils/jwt-utils'
import useTranslation from 'hooks/useTranslation'

import cleanSession from 'utils/cleanSession';
import { getUniqueDeviceId } from 'utils/common'

import { addSnack } from 'app/actions/app';

import postAuthenticationToken from 'app/lib/api/actions/security/postAuthenticationToken';
import postResetPasswordLogin from 'app/lib/api/actions/security/postResetPasswordLogin'
import postResetPasswordValidate from 'app/lib/api/actions/security/postResetPasswordValidate'
import forceRefreshJwtToken from 'app/lib/api/actions/security/forceRefreshJwtToken'

import { setAppFields } from 'app/actions/app';
import { getCookie } from 'utils/cookies';
import { emptySideblockHistory } from 'app/actions/history'

const securityMiddleware = (store: any) => (next: any) => async (action: any) => {
  const jwtToken = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`)
  const { t } = useTranslation()
  switch (action.type) {
    case types.SUBMIT_LOGIN_FORM:
      let data = {
          email: action.login,
          password: action.password
      };

      store.dispatch(setSecurityFields('errorLogin', false));
      store.dispatch(setSecurityFields('loginBeingProcessed', true));

      try {
        const res: any = await postAuthenticationToken(data)
        const decodedToken = decodeJWTToken(res.token)
        
        let check = checkJWTToken(res.token, res.refresh_token)

        if (check.success) {
          store.dispatch(setSecurityFields('currentRoles', decodedToken.role))
          store.dispatch(setSecurityFields('loginBeingProcessed', false))
          store.dispatch(setSecurityFields('login', action.login))
          store.dispatch(setSecurityFields('isLoggedIn', true))
        } else {
          throw ''
        }
      } catch (error) {
        store.dispatch(setSecurityFields('loginBeingProcessed', false));
        store.dispatch(addSnack({
          type: 'error',
          label: t('Error_Login'),
          id: Date.now()
        }))
      }
      
      break;
    case types.USER_DISCONNECT:
      cleanSession()
      store.dispatch(emptySideblockHistory())
      store.dispatch(setSecurityFields('isLoggedIn', false))
      break
    case types.SEND_RESET_PASSWORD_LOGIN: {
      const data = {
        email: action.login,
        type: "admin",
        brand: "1"
      }

      try {
        let res = await postResetPasswordLogin(data)
        sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`, res.token)
        sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`, res.refresh_token)
        next(action)
      } catch (error: any) {
        if (error.response.status == 404) {
          store.dispatch(setSecurityFields('errorLoginResetPassword', true))
        } else {
          const { t } = useTranslation()
          store.dispatch(addSnack({
              type: 'error',
              label: t('GenericError'),
              id: Date.now()
          }))
        }
      }
      break
    }
    case types.POST_RESET_PASSWORD_VALIDATE: {
      try {
        let res = await postResetPasswordValidate(action.data)

        let check = checkJWTToken(res.token, res.refresh_token)

        if (check.success) {
          const decodedToken = decodeJWTToken(res.token)

          store.dispatch(setSecurityFields('userAdminSubscriptionPlan', decodedToken.subscriptionPlanId))
          let inProcess = (check.flag == 'inProcess')

          if (inProcess) {
            store.dispatch(setSecurityFields('currentRoles', decodedToken.role))
            store.dispatch(setSecurityFields('loginBeingProcessed', false))
            store.dispatch(setSecurityFields('login', action.login))
          } else {
            store.dispatch(setSecurityFields('isLoggedIn', true))
            store.dispatch(setAppFields('anim', true))
            store.dispatch(setSecurityFields('preProcessing', ''))
          }
        } else {
          throw ''
        }

        next(action)
      } catch (error: any) {
        if (error?.response?.status == 404) {
           if (error.response.data && error.response.data['hydra:description'] === 'new_code_sent') {
            store.dispatch(addSnack({
              type: 'error',
              label: t('snackError_codeResend'),
              id: Date.now()
            }))
           }
           else {
             store.dispatch(setSecurityFields('errorWrongCode', true))
           }

        }
      }

      break
    }
    case types.FORCE_REFRESH_JWT_TOKEN: {
      try {
        let res = await forceRefreshJwtToken(action.data)

        sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`, res.token)
        sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`, res.refresh_token)
        const decodedToken = decodeJWTToken(res.token)
        sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`, JSON.stringify(decodedToken.role))
      } catch (error) {
        const { t } = useTranslation()
        store.dispatch(addSnack({
            type: 'error',
            label: t('GenericError'),
            id: Date.now()
        }))
      }

      break
    }
    default:
      next(action)
  }
};

export default securityMiddleware