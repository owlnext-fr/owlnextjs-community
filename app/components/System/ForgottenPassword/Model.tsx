import useTranslation from 'hooks/useTranslation'
import { useMemo, useState, useCallback, useEffect } from 'react'
import { validateEmail, getUniqueDeviceId } from 'utils/common'
import View from './View'

type Props = {
  handleForgottenPassword: () => void,
  sendResetPasswordLogin: (login: string) => void,
  errorLoginResetPassword: boolean,
  postResetPasswordValidate: (data: any) => void,
  errorWrongCode: boolean,
  alreadyHasCode?: boolean,
  login: string
}

const ViewModel: React.FC<Props> = ({
  handleForgottenPassword,
  sendResetPasswordLogin,
  errorLoginResetPassword,
  postResetPasswordValidate,
  errorWrongCode,
  alreadyHasCode = false,
  login
}) => {
  const [digits, setDigits] = useState<string>('')
  const [loginValue, setLoginValue] = useState('')
  const [errorLoginValue, setErrorLoginValue] = useState(false)
  const [errorSubmit, setErrorSubmit] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isUppercase, setIsUppercase] = useState<boolean>(false)
  const [isNumber, setIsNumber] = useState<boolean>(false)
  const [isHeightMin, setIsHeightMin] = useState<boolean>(false)
  const [isSpecial, setIsSpecial] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [errorEmail, setErrorEmail] = useState<boolean>(false)
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false)
  const [errorValidate, setErrorValidate] = useState(false)
  const { t } = useTranslation()
  
  useEffect(() => {
    if (login && login !== '') {
      setLoginValue(login)
    }
  }, [login])

  useEffect(() => {
    if (alreadyHasCode) {
      setCurrentStep(2)
    }
  }, [alreadyHasCode])

  const onChangeLogin = useCallback((value) => {
    setErrorLoginValue(false)
    setErrorSubmit(false)
    setLoginValue(value)
  }, [])
  
  const onSubmitForm = useCallback(() => {
    if (validateEmail(loginValue)) {
      sendResetPasswordLogin(loginValue)
      setCurrentStep(2)
    } else {
      setErrorLoginValue(true)
    }
  }, [loginValue, sendResetPasswordLogin])

  useEffect(() => {
    if (errorLoginResetPassword) {
      setErrorSubmit(true)
    } else {
      setErrorSubmit(false)
    }
  }, [errorLoginResetPassword])

  const trads = useMemo(() => {
    return {
      previous: t('Previous'),
      title: t('ForgottenPassword_Title'),
      text: t('ForgottenPassword_Text'),
      validate: t('Validate'),
      errorLogin: t('ErrorLogin'),
      errorLoginNotFound: t('ErrorLoginNotFound'),
      code: t('ForgottenPassword_EnterCode'),
      passwordReset: t('ForgottenPassword_PasswordReset'),
      explicationText: t('ForgottenPassword_ExplicationText'),
      errorValidate: t('ForgottenPassword_ErrorValidate'),
      errorWrongCode: t('ForgottenPassword_ErrorWrongCode')
    }
  }, [t])

  const onChangeDigits = useCallback((newValue) => {
    setDigits(newValue)
  }, [])
  
  const handlePreviousStep = useCallback(() => {
    setCurrentStep(1)
  }, [])

  const handleValidateReset = useCallback(() => {
    if (!errorConfirmPassword) {
      let success = true

      if (password == '' || confirmPassword == '') {
        setErrorValidate(true)
        success = false
      } else {
        setErrorValidate(false)
      }

      if (success) {
        const fingerPrint = getUniqueDeviceId()
        const data: any = {
          email: loginValue,
          code: digits,
          password: password,
          type: "admin",
          brand: '1',
        }

        fingerPrint.then((fingerprint) => {
          data.fingerprint = fingerprint
          postResetPasswordValidate(data)
        }).catch((error) => {
          console.dir(error)
        }) 
      }
    }
  }, [errorConfirmPassword, password, confirmPassword, loginValue, digits, postResetPasswordValidate])

  return (
    <View 
      handleForgottenPassword={handleForgottenPassword}
      trads={trads}
      loginValue={loginValue}
      onChangeLogin={onChangeLogin}
      errorLoginValue={errorLoginValue}
      onSubmitForm={onSubmitForm}
      errorSubmit={errorSubmit}
      currentStep={currentStep}
      digitValue={digits}
      onChangeDigits={onChangeDigits}
      isUppercase={isUppercase}
      isNumber={isNumber}
      isHeightMin={isHeightMin}
      isSpecial={isSpecial}
      password={password}
      confirmPassword={confirmPassword}
      errorEmail={errorEmail}
      errorPassword={errorPassword}
      email={email}
      errorConfirmPassword={errorConfirmPassword}
      setIsUppercase={setIsUppercase}
      setIsNumber={setIsNumber}
      setIsHeightMin={setIsHeightMin}
      setIsSpecial={setIsSpecial}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      setErrorEmail={setErrorEmail}
      setErrorPassword={setErrorPassword}
      setEmail={setEmail}
      setErrorConfirmPassword={setErrorConfirmPassword}
      handlePreviousStep={handlePreviousStep}
      handleValidateReset={handleValidateReset}
      errorValidate={errorValidate}
      errorWrongCode={errorWrongCode}
    />
  );
};

export default ViewModel;

