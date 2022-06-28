import React from 'react';

import Typography from 'app/components/CustomComponents/Typography';
import CustomInput from 'app/components/CustomComponents/CustomInput'
import CustomButton from 'app/components/CustomComponents/CustomButton'
import CustomLoading from 'app/components/CustomComponents/CustomLoading';
import styles from './styles.module.scss';
import { Trads } from 'app/types/global';

type Props = {
    loginBeingProcessed: boolean,
    errorLogin: boolean,
    loginValue: string,
    passwordValue: string,
    trads: Trads,
    onChangeLogin: (e: any) => void,
    onChangePassword: (e: any) => void,
    onSubmitForm: () => void,
    errorLoginValue: boolean,
    errorPassword: boolean,
    handleForgottenPassword: () => void
    checkEnter: (e: any) => void,
    handleClickCreateAccount: () => void
}

const View: React.FC<Props> = ({
    loginBeingProcessed,
    errorLogin,
    loginValue,
    passwordValue,
    trads,
    onChangeLogin,
    onChangePassword,
    onSubmitForm,
    errorLoginValue,
    errorPassword,
    handleForgottenPassword,
    checkEnter,
    handleClickCreateAccount
}) => (
    <div className={styles.loginContainer}>
        { loginBeingProcessed ? (
            <CustomLoading
                customTop={150}
                size="large"
            />
        ) : (
            <>
                <div className={styles.title}>
                    <Typography
                    type={'h2'}
                    bold={true}
                    >
                        {trads.title}
                    </Typography>
                    <div 
                        className={styles.register}
                        onClick={handleClickCreateAccount}    
                    >
                        {trads.createAccount}
                    </div>
                </div>
                <form className={styles.loginFormContainer} onSubmit={onSubmitForm}>
                    <CustomInput
                        value={loginValue}
                        onChange={onChangeLogin}
                        placeholder={trads.mailAddress}
                        error={errorLoginValue}
                        onKeyDown={checkEnter}
                    />
                    <CustomInput
                        value={passwordValue}
                        onChange={onChangePassword}
                        placeholder={trads.password}
                        error={errorPassword}
                        type={'password'}
                        onKeyDown={checkEnter}
                    />
                    { errorLogin &&
                        <span className={styles.errorLogin}>
                            {trads.errorOccured}
                        </span>
                    }
                </form>
                <div className={styles.buttonContainer}>
                    <div onClick={handleForgottenPassword} className={styles.forgotPassword}>
                        {trads.forgottenPassword}
                    </div>
                    <CustomButton
                        type={'next'}
                        content={trads.connexion}
                        onClick={onSubmitForm}
                        disabled={loginBeingProcessed}
                    />
                </div>
            </>
        )
        }
    </div>
);

export default View;
