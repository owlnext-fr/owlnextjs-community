import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import CustomButton from '../CustomButton';
import CustomCheckbox from '../CustomCheckbox';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean,
  title: string,
  message: string,
  content: any,
  cancelFunction: (e: any) => void,
  validateFunction: () => void,
  parentElement: any,
  className: string,
  alignWindow: boolean;
  isCheckBox: boolean;
  checkboxText: string;
  checkboxValue: boolean;
  changeCheckboxValue: (arg?:boolean) => void;
}

const View: React.FC<Props> = ({
  children,
  isOpen,
  cancelFunction,
  title,
  message,
  content,
  validateFunction,
  parentElement,
  className,
  alignWindow,
  isCheckBox,
  checkboxText,
  checkboxValue,
  changeCheckboxValue
}) => {
  
  return (
    <div className={[styles.dialogPopupContainer, className].join(' ')}>
      { children }
      <Dialog
        open={isOpen}
        onClose={cancelFunction}
        container={() => parentElement.current}
        disablePortal={true}
        ref={(node) => {
          parentElement.current = node
        }}
        className={[styles.dialog, (alignWindow ? styles.alignWindow : undefined)].join(' ')}
      >
        <div className={styles.topLine}>
          
        </div>
        <DialogTitle className={styles.title}>{ title }</DialogTitle>
        <DialogContent>
            <DialogContentText className={styles.message}>
                { message }
            </DialogContentText>
            <DialogContentText className={styles.content}>
                { content }
            </DialogContentText>
            {isCheckBox && (
              <DialogContentText className={styles.content}>
                  <CustomCheckbox
                    isChecked={checkboxValue}
                    label={checkboxText}
                    setIsChecked={changeCheckboxValue}
                  />
              </DialogContentText>
            )}
        </DialogContent>
        <DialogActions className={styles.actions}>
          <CustomButton
            content={'Retour'}
            type='tertiaryCancel'
            onClick={cancelFunction}
          />
          <CustomButton
            content={'Confirmer'}
            type='tertiaryValidate'
            onClick={validateFunction}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default View;

