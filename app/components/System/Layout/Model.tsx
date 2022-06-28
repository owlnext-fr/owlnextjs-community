import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';

import View from './View';

type Props = {
    children: JSX.Element[],
    setSpecificAboveObject: (object: any) => void,
    clearAboveSideblock: () => void,
    clearSelectedItem: () => void,
    selectedItem: string,
    isSearchScreen: boolean,
    triggerClearAboveSideblock: boolean,
    setAppFields: (field: string, value: any) => void,
    historyUrl: Array<any>,
    triggerSpecificAboveObject: boolean,
    currentDetailsAboveObject: any,
};

const Layout: React.FC<Props> = ({
    children,
    setSpecificAboveObject,
    clearAboveSideblock,
    selectedItem,
    clearSelectedItem,
    isSearchScreen,
    triggerClearAboveSideblock,
    setAppFields,
    historyUrl,
    triggerSpecificAboveObject,
    currentDetailsAboveObject,
}) => {
    const [currentHistory, setCurrentHistory] = useState<Array<any>>([])
    const [isSideblockHistoryTrigger, setIsSideblockHistoryTrigger] = useState(false)
    const [isAboveTriggered, setIsAboveTriggered] = useState(false)
    const router = useRouter()
    const { t } = useTranslation();
    
    useEffect(() => {
        setCurrentHistory(historyUrl)
    }, [historyUrl])
    
    const isKyc = useMemo(() => {
        const apiRoles = JSON.parse(sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`) || '[]')
        return apiRoles.includes('ROLE_KYCTOCHECK')
      }, [])
    // useEffect(() => {
    //     return () => {
    //         clearAboveSideblock()
    //     }
    // }, [clearAboveSideblock])

    useEffect(() => {
        clearSelectedItem()
    }, [clearSelectedItem, router.pathname])

    useEffect(() => {
        if (typeof(router) !== 'undefined' && typeof(router.query.sideBlock) !== 'undefined' && router.query.sideBlock) {
            const decodedQuery = atob(router.query.sideBlock.toString())
            const parsedQuery = JSON.parse(decodedQuery)
            let temp = { ...currentDetailsAboveObject }
            temp.type = parsedQuery.type

            if (!temp.parent) {
                temp.parent = {
                    id: parsedQuery.id
                }
            } else {
                temp.parent.id = parsedQuery.id
            }
            
            setSpecificAboveObject({...temp})
        } else {
            setAppFields('currentDetailsAboveObject', {})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (currentDetailsAboveObject.type) {
            setIsAboveTriggered(true)
        } else {
            setIsAboveTriggered(false)
        }
    }, [currentDetailsAboveObject])

    const isHideSideBlock = useMemo(() => {
        return window.screen.width < 1450

        // return router.pathname === '/planning'
    }, [])

    const onClickShadow = useCallback(() => {
        setSpecificAboveObject({})
    }, [setSpecificAboveObject])

    return (
        <View
            isSearchScreen={isSearchScreen}
            isAboveTriggered={isAboveTriggered}
            isKyc={isKyc}
            isHideSideBlock={isHideSideBlock}
            onClickShadow={onClickShadow}
        >
            {children}
        </View>
    );
};

export default Layout;

  