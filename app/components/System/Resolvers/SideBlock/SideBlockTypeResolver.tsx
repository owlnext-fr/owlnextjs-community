import React from 'react'
import styles from './styles.module.scss'

import Stats from 'app/components/System/Resolvers/SideBlock/SideBlockTypes/Stats'

const Components: any = {
    Stats: Stats
}

type Props = {
    type: string
}

export const SideBlockAboveTypeResolver: React.FC<Props> = ({
    type
}) => {
    if (typeof(Components[type]) !== 'undefined') {
        return (
            <div className={styles.sideblockContainer}>
                { React.createElement(Components[type], {
                    
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
