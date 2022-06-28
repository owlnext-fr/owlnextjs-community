import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { checkIsLoggedIn } from 'app/lib/api/actions/security/checkIsLoggedIn';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useCallback } from 'react';
import appRoutesRoles from 'utils/appRoutesRoles';
import dynamic from 'next/dynamic'
import { unsecuredRoutes } from 'utils/routeTypes'
import { ReduxUniversalSetter } from 'app/types/global';

const Layout = dynamic(() => import('app/components/System/Layout'))
const SideBlock = dynamic(() => import('app/components/System/Resolvers/SideBlock'))

interface UserParameters {
    [key: string]: string
}

type Props = {
    children: ReactJSXElement,
    currentRoles: Array<any>,
    setSpecificAboveObject: (object: any) => void,
    setSecurityFields: (field: string, value: any) => void,
    isLoggedIn: boolean;
    userDisconnect: () => void;
    setAppfields: ReduxUniversalSetter;
}

export const SecurityWrapper: React.FC<Props> = ({
    children,
    currentRoles,
    setSpecificAboveObject,
    setSecurityFields,
    userDisconnect,
    isLoggedIn,
    setAppfields,
}) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [isValidRole, setIsValidRole] = useState<null | boolean>(null)
    const [isInOpenPage, setIsInOpenPage] = useState(false)
    const [checkLoginSuccess, setCheckLoginSuccess] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
        if (router.query.transactionId) {
            setAppfields('transactionId', router.query.transactionId)
        }
    }, [router, setAppfields])

    useEffect(() => {
        if (checkLoginSuccess) {
            setCheckLoginSuccess(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.pathname])

    const checkRoles = useCallback(() => {
        const JSONRoles = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`)
        let found = false
        
        for (let i = 0; i < appRoutesRoles.length; i ++) {
            if (router.pathname === appRoutesRoles[i].path && !found) {
                // CORRECT ROUTE
                found = true
                if (!unsecuredRoutes.includes(router.pathname)) {
                    if (JSONRoles) {
                        try {
                            const currentRoles = JSON.parse(JSONRoles)
                            if (appRoutesRoles[i].roles.includes('*')) {
                                setIsValidRole(true)
                            } else {
                                let foundRole = false
                            
                                for (let y = 0; y < currentRoles.length; y ++) {
                                    if (appRoutesRoles[i].roles.includes(currentRoles[y])) {
                                        foundRole = true
                                    }
                                }

                                if (foundRole) {
                                    setIsValidRole(true)
                                } else {
                                    setIsValidRole(false)
                                }
                            }
                        } catch (error) {
                            setIsValidRole(false)
                        }
                    } else {
                        setIsValidRole(false)
                    }
                } else {
                    setIsValidRole(true)
                }   
            }
        }
    }, [router.pathname])

    const checkLogin = useCallback(() => {
        let found = false;

        for (let i = 0; i < unsecuredRoutes.length; i ++) {
            if (unsecuredRoutes[i] == router.pathname) {
                found = true
            }
        }

        if (!found) {
            checkIsLoggedIn().then((res: any) => {
                if (res.response && res.response.status && res?.response?.status == 401) {
                    router.push('/logout')
                    setAuthenticated(false)
                } else {
                    setCheckLoginSuccess(true)
                    if (!unsecuredRoutes.includes(router.pathname)) {
                        setIsInOpenPage(false)
                    } else {
                        setIsInOpenPage(true)
                    }

                    checkRoles()
                    setAuthenticated(true)
                }
            }).catch((error) => {
                setAuthenticated(false)
                if (error?.response?.status == 401) {
                    router.push('/logout')
                }
                userDisconnect()
            })
        } else {
            setIsValidRole(true)
            setIsInOpenPage(true)
            setAuthenticated(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkRoles, router, userDisconnect])


    useEffect(() => {
        checkLogin()
    }, [checkLogin, router.pathname])

    useEffect(() => {
        setSpecificAboveObject({})
    }, [router.pathname, setSpecificAboveObject])
    
    useEffect(() => {
        if (isValidRole === false) {
            setSecurityFields('isLoggedIn', false)
            userDisconnect()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isValidRole, router])

    /**
     * DUMPS TO UNCOMMENT TO EASYLY CONTROL THE SECURITY PROCESSES
     */
    // console.log('pathname : ' + router.pathname)
    // console.log('authenticated : ' + authenticated)
    // console.log('isInOpenPage : ' + isInOpenPage)
    // console.log('isValidRole : ' + isValidRole)
    // console.log('checkLoginSuccess', checkLoginSuccess)

    return (
        <>
            { (authenticated || isInOpenPage) && isValidRole && (isInOpenPage || checkLoginSuccess) &&
                <>
                    { !isInOpenPage ?
                        <Layout>
                            {children}
                            <SideBlock>
                            </SideBlock>
                        </Layout>
                    :
                        <>
                            {children}
                        </>
                    }
                </>

            }
        </>
    )
}


export default SecurityWrapper;