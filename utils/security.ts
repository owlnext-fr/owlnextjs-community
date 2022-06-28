export const checkRoles = (currentRoles: Array<string>, expectedRoles: Array<string>): boolean => {
    let success = false

    for (let i = 0; i < currentRoles.length; i ++) {
        for (let y = 0; y < expectedRoles.length; y ++) {
            if (currentRoles[i] == expectedRoles[y]) {
                success = true
            }
        }
    }

    return success
}

export const getCurrentRole = (): 'ONLINE' | 'DATAADMIN' | 'FREEMIUM' => {
    let currentValue = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`)

    if (currentValue) {
        let array = JSON.parse(currentValue)
        
        for (const role of array) {
        if (role === 'ROLE_ONLINE') {
            return 'ONLINE'
        } else if (role === 'ROLE_DATA_ADMINISTRATION') {
            return 'DATAADMIN'
        }
        }

        return 'FREEMIUM'
    }

    return 'DATAADMIN'
}