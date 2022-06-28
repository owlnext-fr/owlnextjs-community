
import DetailsHeader from '../DetailsHeader';
import SideBlockHead from './Sideblockhead'
import SideBlockAction from './SideblockActions'

import styles from './styles.module.scss';
import { MutableRefObject, ReactElement, RefObject } from 'react';
import DialogPopup from 'app/components/CustomComponents/DialogPopup';


type Props = {
  showDismiss: boolean;
  showValidate: boolean;
  dismissAction: () => void;
  dismissText: string;
  validateAction: () => void;
  validateText: string;
  children: ReactElement;
  menu: boolean;
  subMenu: ReactElement | null;
  parentEl: RefObject<HTMLDivElement>;
  onClosePopup: () => void;
  showPopup: boolean;
  onValidatePopup: () => void;
  popupText: string;
  showModify: boolean,
  modifyAction: () => void,
  showDelete: boolean,
  deleteAction: () => void;
  onClose: () => void;
  hasActions: boolean,
  hasHeader: boolean;
  dismissCheckBox: boolean;
  dismissCheckboxText: string;
  checkboxValue: boolean;
  changeCheckboxValue: (arg?: boolean) => void;
  preventDefaultOnClose: boolean
}
  
const View: React.FC<Props> = ({
  showDismiss,
  showValidate,
  dismissAction,
  dismissText,
  validateAction,
  validateText,
  children,
  menu,
  subMenu,
  parentEl,
  onClosePopup,
  showPopup,
  onValidatePopup,
  popupText,
  showModify,
  modifyAction,
  showDelete,
  deleteAction,
  onClose,
  hasActions,
  hasHeader,
  dismissCheckBox,
  dismissCheckboxText,
  checkboxValue,
  changeCheckboxValue,
  preventDefaultOnClose
}) => {
  return (
    <div ref={parentEl} className={styles.container}>
      <DialogPopup
        isOpen={showPopup}
        cancelFunction={onClosePopup}
        content={popupText}
        validateFunction={onValidatePopup}
        parentElement={parentEl}
        isCheckBox={dismissCheckBox}
        checkboxText={dismissCheckboxText}
        checkboxValue={checkboxValue}
        changeCheckboxValue={changeCheckboxValue}
      >
        <div className={styles.sideblockroot}>
          { hasHeader &&
            <SideBlockHead>
              <DetailsHeader
                menu={menu}
                submenu={!!subMenu}
                onClose={onClose}
                preventDefaultOnClose={preventDefaultOnClose}
              >
                {subMenu || <></>}
              </DetailsHeader>
            </SideBlockHead>
          }
          <div className={styles.body}>
            {children}
          </div>
          { hasActions &&
            <SideBlockAction
              showValidate={showValidate}
              showDismiss={showDismiss}
              validateAction={validateAction}
              validateText={validateText}
              dismissAction={dismissAction}
              dismissText={dismissText}
              showModify={showModify}
              modifyAction={modifyAction}
              showDelete={showDelete}
              deleteAction={deleteAction}
            />
          }
        </div>
      </DialogPopup>
    </div>
  );
};

export default View;

