import { useState, useEffect } from 'react'
import React from 'react'

import SideBlockTypeResolver from './SideBlockTypeResolver'
import SideBlockAboveTypeResolver from '../SideBlockAboveTypeResolver'

import styles from './styles.module.scss'

type Props = {
    currentDetailsObject: any,
    currentDetailsAboveObject: any,
}

export const ViewModel: React.FC<Props> = ({
    currentDetailsObject,
    currentDetailsAboveObject,
}) => {
    const [currentType, setCurrentType] = useState('Generic')
    const [currentAboveType, setCurrentAboveType] = useState('')

    useEffect(() => {
        setCurrentType(currentDetailsObject.type)
    }, [currentDetailsObject])

    useEffect(() => {
        if (typeof(currentDetailsAboveObject.type) !== 'undefined') {
            setCurrentAboveType(currentDetailsAboveObject.type)
        } else {
            setCurrentAboveType('')
        }
        
    }, [currentDetailsAboveObject])

    return (
        <div className={styles.sideblockContainer}>
            { typeof(currentType) !== 'undefined' &&
                <SideBlockTypeResolver
                    type={currentType}
                />
            }
            { currentAboveType !== '' &&
                <SideBlockAboveTypeResolver
                    type={currentAboveType}
                />
            }
        </div>
    )
}

export default ViewModel
