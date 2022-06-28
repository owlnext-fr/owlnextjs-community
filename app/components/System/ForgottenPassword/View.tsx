import { Trads } from 'app/types/global'
import Typography from 'app/components/CustomComponents/Typography'
import CustomInput from 'app/components/CustomComponents/CustomInput';
import CustomButton from 'app/components/CustomComponents/CustomButton';
import Digits from 'app/components/System/Digits'
import styles from './styles.module.scss';
import { Alert } from '@mui/material';

type Props = {
  handleForgottenPassword: () => void,
  trads: Trads,
  loginValue: string,
  onChangeLogin: (value: string) => void,
  errorLoginValue: boolean,
  onSubmitForm: () => void,
  errorSubmit: boolean,
  currentStep: number,
  digitValue: string,
  onChangeDigits: (newValue: string) => void,
  isUppercase: any,
  isNumber: any,
  isHeightMin: any,
  isSpecial: any,
  email: any,
  password: any,
  confirmPassword: any,
  errorEmail: any,
  errorPassword: any,
  errorConfirmPassword: any,
  setIsUppercase: any,
  setIsNumber: any,
  setIsHeightMin: any,
  setIsSpecial: any,
  setPassword: any,
  setConfirmPassword: any,
  setErrorEmail: any,
  setErrorPassword: any,
  setEmail: any,
  setErrorConfirmPassword: any,
  handlePreviousStep: () => void,
  handleValidateReset: () => void,
  errorValidate: boolean,
  errorWrongCode: boolean
}
  
const View: React.FC<Props> = ({
  handleForgottenPassword,
  trads,
  loginValue,
  onChangeLogin,
  errorLoginValue,
  onSubmitForm,
  errorSubmit,
  currentStep,
  digitValue,
  onChangeDigits,
  isUppercase,
  isNumber,
  isHeightMin,
  isSpecial,
  email,
  password,
  confirmPassword,
  errorEmail,
  errorPassword,
  errorConfirmPassword,
  setIsUppercase,
  setIsNumber,
  setIsHeightMin,
  setIsSpecial,
  setPassword,
  setConfirmPassword,
  setErrorEmail,
  setErrorPassword,
  setEmail,
  setErrorConfirmPassword,
  handlePreviousStep,
  handleValidateReset,
  errorValidate,
  errorWrongCode
}) => {
  
  return (
    <div className={styles.forgottenPasswordContainer}>
      { currentStep == 1 &&
        <>
          <Typography
            type={'h2'}
            bold={true}
          >
              {trads.title}
          </Typography>
          <div className={styles.text}>
            {trads.text}
          </div>
          <form className={styles.passwordFormContainer} onSubmit={onSubmitForm}>
            { errorSubmit &&
              <div className={styles.error}>
                {trads.errorLoginNotFound}
              </div>
            }
            { errorLoginValue &&
              <div className={styles.error}>
                {trads.errorLogin}
              </div>
            }
            <CustomInput
              value={loginValue}
              onChange={(e: any) => onChangeLogin(e.target.value)}
              placeholder={trads.mailAddress}
              error={errorLoginValue}
            />
          </form>
          <div className={styles.buttonContainer}>
            <div onClick={handleForgottenPassword} className={styles.forgotPassword}>
                {trads.previous}
            </div>
            <CustomButton
              type={'validate'}
              content={trads.validate}
              onClick={onSubmitForm}
            />
          </div>
        </>
      }
      { currentStep == 2 &&
        <div className={styles.stepTwoContainer}>
          <Typography
            type={'p'}
            bold={true}
          >
            {trads.code}
          </Typography>
          <Digits
            value={digitValue}
            onChange={onChangeDigits}
          />
          <br></br>
          <Typography
            type={'p'}
            bold={true}
          >
            {trads.passwordReset}
          </Typography>
          <div className={styles.text}>
            {trads.explicationText}
          </div>
          { errorValidate &&
            <Alert className={styles.error} severity='error'>
              { trads.errorValidate}
            </Alert>
          }
          { errorWrongCode &&
            <Alert className={styles.error} severity='error'>
              { trads.errorWrongCode}
            </Alert>
          }
          <div className={styles.buttonContainer}>
            <div onClick={handlePreviousStep} className={styles.forgotPassword}>
                {trads.previous}
            </div>
            <CustomButton
              type={'validate'}
              content={trads.validate}
              onClick={handleValidateReset}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default View;

