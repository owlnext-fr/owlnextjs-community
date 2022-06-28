import { MutableRefObject, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import View from './View';

type Props = {
  showDismiss?: boolean;
  showValidate?: boolean;
  dismissAction?: () => void;
  dismissText?: string;
  validateAction?: () => void;
  validateText?: string;
  children: ReactElement;
  menu?: boolean;
  subMenu?: ReactElement;
  dismissPopup?: boolean;
  dismissPopupText?: string;
  validatePopup?: boolean;
  validatePopupText?: string;
  showModify?: boolean,
  modifyAction?: () => void,
  showDelete?: boolean,
  deleteAction?: () => void;
  onClose?: () => void;
  hasActions?: boolean,
  hasHeader?: boolean;
  dismissCheckBox?: boolean;
  dismissCheckboxText?: string;
  checkboxValue?: boolean;
  changeCheckboxValue?: (arg?: boolean) => void;
  preventDefaultOnClose?: boolean;
}

const ViewModel: React.FC<Props> = ({
  showDismiss = false,
  showValidate = false,
  dismissAction = () =>{},
  dismissText = '',
  validateAction = () =>{},
  validateText = '',
  children,
  menu = false,
  subMenu = null,
  dismissPopup = false,
  dismissPopupText = '',
  validatePopup = false,
  validatePopupText = '',
  showModify = false,
  modifyAction = () => {},
  showDelete = false,
  deleteAction = () => {},
  onClose = () => {},
  hasActions = true,
  hasHeader = true,
  dismissCheckBox = false,
  dismissCheckboxText = '',
  checkboxValue = false,
  changeCheckboxValue = () => {},
  preventDefaultOnClose = false
}) => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [isDismissPopup, setIsDismissPopup] = useState<boolean>(false)
  const [popupText, setPopupText] = useState<string>('')
  const parentEl = useRef<HTMLDivElement>(null)

  const onDismiss = useCallback(() => {
    if (dismissPopup) {
      setShowPopup(true)
      setPopupText(dismissPopupText)
      setIsDismissPopup(true)
    }
    else {
      dismissAction()
    }
  }, [dismissAction, dismissPopup, dismissPopupText])

  const onValidate = useCallback(() => {
    if (validatePopup) {
      setShowPopup(true)
      setPopupText(validatePopupText)
      setIsDismissPopup(false)
    }
    else {
      validateAction()
    }
  }, [
    validatePopup,
    setIsDismissPopup,
    validateAction,
    validatePopupText,
  ])

  const onClosePopup = useCallback(() => {
    setShowPopup(false)
  }, [])

  const onValidatePopup = useCallback(() => {
    if (isDismissPopup) {
      dismissAction()
      setShowPopup(false)
    }
    else {
      validateAction()
    }
  }, [isDismissPopup, validateAction, dismissAction])

  return (
    <View
      showValidate={showValidate}
      showDismiss={showDismiss}
      validateAction={onValidate}
      validateText={validateText}
      dismissAction={onDismiss}
      dismissText={dismissText}
      menu={menu}
      subMenu={subMenu}
      parentEl={parentEl}
      onClosePopup={onClosePopup}
      showPopup={showPopup}
      onValidatePopup={onValidatePopup}
      popupText={popupText}
      showModify={showModify}
      modifyAction={modifyAction}
      showDelete={showDelete}
      deleteAction={deleteAction}
      onClose={onClose}
      hasActions={hasActions}
      hasHeader={hasHeader}
      dismissCheckBox={dismissCheckBox}
      dismissCheckboxText={dismissCheckboxText}
      checkboxValue={checkboxValue}
      changeCheckboxValue={changeCheckboxValue}
      preventDefaultOnClose={preventDefaultOnClose}
    >
      {children}
    </View>
  );
};

export default ViewModel;

