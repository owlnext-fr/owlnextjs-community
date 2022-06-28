import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Components from './ResolverTable'

type Props = {
    type: string,
    currentDetailsAboveObject: any
}

export const SideBlockAboveTypeResolver: React.FC<Props> = ({
    type,
    currentDetailsAboveObject
}) => {
    const router = useRouter()
    if (typeof(Components[type]) !== 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            let query = { ... router.query }
            
            if (Components[type].sideblockHistory) {
                const data = {
                    type,
                    id: currentDetailsAboveObject?.parent?.id
                }
    
                const encrypted = btoa(JSON.stringify(data))
    
                query.sideBlock = encrypted
            }
            
            router.query = query
            router.push({
                pathname: router.pathname,
                query: { ...router.query }
            }, undefined, {})
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [type, currentDetailsAboveObject.parent?.id])

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            return () => {
               router.push('?sideBlock=', undefined, { shallow: true })
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        return (
            <div className={styles.sideblockAboveContainer}>
                { React.createElement(Components[type].render, {
                    
                })}
            </div>
        )
    } else {
        return (
            <>
                {console.dir(type + ' Component is not yet created')}
            </>
        )
    }
}

export default SideBlockAboveTypeResolver