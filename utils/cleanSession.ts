const cleanSession = (): boolean => {
    try {
        sessionStorage.removeItem(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`)
        sessionStorage.removeItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`)
        sessionStorage.removeItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`)
        return true
    }
    catch {
        return false
    }
}

export default cleanSession