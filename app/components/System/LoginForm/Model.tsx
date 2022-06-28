import React, { useCallback, useState, useMemo, useEffect } from 'react';
import useTranslation from 'hooks/useTranslation';
import { useRouter } from 'next/router'

import View from './View';

type Props = {
    submitForm: (loginValue: string, passwordValue: string) => void,
    loginBeingProcessed: boolean,
    errorLogin: boolean,
    handleForgottenPassword: () => void,
    handleClickCreateAccount: () => void,
    setSecurityFields: (field: string, value: any) => void
};

const Login: React.FC<Props> = ({
    submitForm,
    loginBeingProcessed,
    errorLogin,
    handleForgottenPassword,
    handleClickCreateAccount,
    setSecurityFields
}) => {
    const router = useRouter()
    const { t } = useTranslation()
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [errorLoginValue, setErrorLogin] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const onChangeLogin = useCallback((e: any) => {
        setLoginValue(e.target.value)
    }, []);

    const onChangePassword = useCallback((e: any) => {
        setPasswordValue(e.target.value)
    }, []);

    const onSubmitForm = useCallback(() => {
        // e.preventDefault()
        let success = true

        if (loginValue == '') {
            setErrorLogin(true)
            success = false
        }
        
        if (passwordValue == '') {
            setErrorPassword(true)
            success = false
        }

        if (success) {
            submitForm(loginValue, passwordValue)
        }
    }, [loginValue, passwordValue, submitForm]);

    const checkEnter = useCallback((e: any) => {
        if (e.keyCode == 13) {
            onSubmitForm()
        }
    }, [onSubmitForm])

    const trads = useMemo(() => {
        return {
            mailAddress: t('MailAddress'),
            password: t('Password'),
            connexion: t('Connexion'),
            errorOccured: t('ErrorOccured'),
            title: t('Login_Title'),
            createAccount: t('Login_RegisterLink'),
            forgottenPassword: t('ForgottenPassword'),
        }
    }, [t])

    useEffect(() => {
        if (router.query?.error == 'noValidRole') {
            setSecurityFields('errorLogin', true)
        }
    }, [router, setSecurityFields])

    return (
        <View 
            loginBeingProcessed={loginBeingProcessed}
            errorLogin={errorLogin}
            loginValue={loginValue}
            passwordValue={passwordValue}
            trads={trads}
            onChangeLogin={onChangeLogin}
            onChangePassword={onChangePassword}
            onSubmitForm={onSubmitForm}
            errorLoginValue={errorLoginValue}
            errorPassword={errorPassword}
            handleForgottenPassword={handleForgottenPassword}
            checkEnter={checkEnter}
            handleClickCreateAccount={handleClickCreateAccount}
        />
    );
};

export default Login;

  