import React, { useEffect, useState, useCallback } from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router'
import Logo from 'public/assets/images/owlnext.png'

import container from 'app/containers/login'
import Image from 'next/image'
import styles from 'styles/login.module.scss'
import LoginForm from 'app/components/System/LoginForm'
import ForgottenPassword from 'app/components/System/ForgottenPassword'

type Props = {
    userDisconnect: () => void,
    isLoggedIn: boolean
}

const Login: NextPage<Props> = ({
    userDisconnect,
    isLoggedIn
}) => {
    const [isForgottenPassword, setIsForgottenPassword] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
        if (isLoggedIn) {
            router.push('/home')
        }
    }, [isLoggedIn, router])

    useEffect(() => {
        userDisconnect()
    }, [userDisconnect])

    const mediaQueries = {
        isSmallScreen: useMediaQuery('(max-width:813px)')
    }

    const handleForgottenPassword = useCallback(() => {
        setIsForgottenPassword((prev) => !prev)
    }, [])

    const handleClickCreateAccount = useCallback(() => {
        router.push('/register')
    }, [router])

    return (
        <div className={styles.loginContainer}>
            <div className={styles.body}>            
                <div className={styles.login}>
                    <div className={styles.contentContainer}>
                        <div className={styles.left}>
                            <div className={styles.logo}>
                                <Image
                                    src={Logo}
                                    width={340}
                                    height={70}
                                    alt='logo'
                                />
                            </div>
                            { isForgottenPassword ?
                                <ForgottenPassword 
                                    handleForgottenPassword={handleForgottenPassword}
                                />
                            :   
                                <LoginForm
                                    handleForgottenPassword={handleForgottenPassword}
                                    handleClickCreateAccount={handleClickCreateAccount}
                                />
                            }
                        </div>
                        <div className={styles.right}>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default container(Login)