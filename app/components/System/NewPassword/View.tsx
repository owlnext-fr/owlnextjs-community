
import styles from './styles.module.scss';
import CustomInput from 'app/components/CustomComponents/CustomInput'
import Typography from 'app/components/CustomComponents/Typography'
import React from 'react';
import useTranslation from 'hooks/useTranslation';
import CustomLoading from 'app/components/CustomComponents/CustomLoading';
import { TextfieldSetter, Trads } from 'app/types/global'
import CustomButton from 'app/components/CustomComponents/CustomButton'


type Props = {
  password: string;
  errorPassword: boolean;
  confirmPassword: string;
  errorConfirmPassword: boolean;
  onChangePassword: TextfieldSetter;
  onChangeConfirmPassword: TextfieldSetter;
  isUppercase: boolean;
  isNumber: boolean;
  isHeightMin: boolean;
  isSpecial: boolean;
  loadingNewPassword: boolean;
  trads: Trads,
  handleConfirm: () => void
}
  
const View: React.FC<Props> = ({
  password,
  errorPassword,
  confirmPassword,
  errorConfirmPassword,
  onChangePassword,
  onChangeConfirmPassword,
  isUppercase,
  isNumber,
  isHeightMin,
  isSpecial,
  loadingNewPassword,
  trads,
  handleConfirm
}) => {
  const {t} = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.borders}>
        <div className={styles.createaccount}>
          {loadingNewPassword ? (
            <div className={styles.loader}>
              <CustomLoading size="small"/>
            </div>
          ) : (
            <>
              <Typography type="h1" className={styles.explain}>
                {trads.title}
              </Typography>
              <form className={styles.form}>
                <CustomInput
                  className={styles.passwordField}
                  type='password'
                  placeholder={trads.passwordPlaceholder}
                  value={password}
                  onChange={onChangePassword}
                  error={errorPassword}
                />
                <div className={styles.errorBox}>
                  <div>
                    <div className={isUppercase ? styles.valid : ''}>1 {trads.caps}</div>
                    <div className={isHeightMin ? styles.valid : ''}>8 {trads.min}</div>
                  </div>
                  <div>
                    <div className={isNumber ? styles.valid : ''}>1 {trads.number}</div>
                    <div className={isSpecial ? styles.valid : ''}>1 {trads.special}</div>
                  </div>
                </div>
                <CustomInput
                  type='password'
                  placeholder={trads.confirmPasswordPlaceholder}
                  className={styles.confirm}
                  value={confirmPassword}
                  error={errorConfirmPassword}
                  onChange={onChangeConfirmPassword}
                />
              </form>
            </>
          )}
          <div className={styles.actions}>
            <CustomButton
              content={'Validate'}
              type='validate'
              onClick={handleConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;

