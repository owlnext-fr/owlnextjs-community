import { useCallback, useState, useMemo } from 'react';
import View from './View';
import { validatePassword } from 'utils/common'
import { ReduxUniversalSetter } from 'app/types/global'
import useTranslation from 'hooks/useTranslation'

type Props = {
  loadingNewPassword: boolean;
}

const ViewModel: React.FC<Props> = ({
  loadingNewPassword
}) => {
  const [isUppercase, setIsUppercase] = useState<boolean>(false)
  const [isNumber, setIsNumber] = useState<boolean>(false)
  const [isHeightMin, setIsHeightMin] = useState<boolean>(false)
  const [isSpecial, setIsSpecial] = useState<boolean>(false)
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const { t } = useTranslation()

  const checkUpperCase = useCallback((test) => {
    const uppercaseRegex = /(?=.*[A-Z]).{0,}/
    const isUppercaseTest = test
      .match(uppercaseRegex)
    setIsUppercase(!!isUppercaseTest)
  }, [])

  const checkisHeight = useCallback((test) => {
    const isHeightRegex = /.{8,}/
    const isHeightMinTest = test
      .match(isHeightRegex)
    setIsHeightMin(!!isHeightMinTest)
  }, [])

  const checkIsNumber = useCallback((test) => {
    const numberRegex = /(?=.*[\d]).{0,}/
    const isNumberTest = test
      .match(numberRegex)
    setIsNumber(!!isNumberTest)
  }, [])

  const checkIsSpecial = useCallback((test) => {
    const specialRegex = /(?=.*[_@.#&+\-%;\/?!:)(={}*+$€~]).{0,}/
    const isSpecialTest = test
      .match(specialRegex)
    setIsSpecial(!!isSpecialTest)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)

    if (!validatePassword(e.target.value)) {
      setErrorPassword(true)
    } else {
      setErrorPassword(false)
    }

    checkUpperCase(e.target.value)
    checkisHeight(e.target.value)
    checkIsNumber(e.target.value)
    checkIsSpecial(e.target.value)
  }, [checkUpperCase, checkisHeight, checkIsNumber, checkIsSpecial])

  const onChangeConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value)
    if (e.target.value !== password) {
      setErrorConfirmPassword(true)
    } else {
      setErrorConfirmPassword(false)
    }
  }, [password])

  const handleConfirm = useCallback(() => {

  }, [password])

  const trads = useMemo(() => {
    return {
      title: t('Password_Title'),
      passwordPlaceholder: t('Password_Placeholder'),
      confirmPasswordPlaceholder: t('Password_ConfirmPlaceholder'),
      caps: t('Password_Caps'),
      min: t('Password_Min'),
      special: t('Password_Special'),
      number: t('Password_Number')
    }
  }, [t])

  return (
    <View
      password={password}
      errorPassword={errorPassword}
      errorConfirmPassword={errorConfirmPassword}
      confirmPassword={confirmPassword}
      onChangePassword={onChangePassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      isUppercase={isUppercase}
      isNumber={isNumber}
      isHeightMin={isHeightMin}
      isSpecial={isSpecial}
      loadingNewPassword={loadingNewPassword}
      trads={trads}
      handleConfirm={handleConfirm}
    />
  );
};

export default ViewModel;
  
  