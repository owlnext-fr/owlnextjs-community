import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";
import {getCookie, setCookie} from "./cookies";

/**
 * Get all needed properties from cookie for the application.
 */
export const getJWTInfosFromCookie = (): { jwtToken: string, refreshToken: string } => {
	return {
		jwtToken: getCookie('jwtToken'),
		refreshToken: getCookie('refreshToken'),
		// here you may add custom property stored in setJWTInfosIntoCookie
		// for example userEmail: getCookie('userEmail'),
	}
}

/**
 * Simple accessor to JWT token stored into the cookie.
 */
export const getJWTTokenFromCookie = (): string => {
	return getCookie('jwtToken')
}

/**
 * Simple accessor to JWT refresh token stored into the cookie.
 */
export const getJWTRefreshTokenFromCookie = (): string => {
	return getCookie('refreshToken')
}

/**
 * Sets data from the JWT token and JWT refresh token into cookies.
 * You can use this function to sture custom data from the JWT to cookies for further use.
 */
export const setJWTInfosIntoCookie = (jwtToken: string, refreshToken: string): void => {
	const decodedToken = decodeJWTToken(jwtToken)

	setCookie(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`, jwtToken)
	setCookie(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`, refreshToken)

	// here you can set custom data extracted from the JWT token
	// example : setCookie('userEmail', decodedToken.email)
}

/**
 * Helper to only refresh JWT related data in cookies.
 */
export const refreshJWTInfosIntoSession = (jwtToken: string, refreshToken: string): void => {
	const decodedToken = decodeJWTToken(jwtToken)

	sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`, jwtToken)
	sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`, refreshToken)
	sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`, JSON.stringify(decodedToken.role))
}

/**
 * Calculates if the JWT token given is still valid regarding it's expiration date.
 */
export const isJWTValid = (jwtToken: string): boolean => {
	const decodedToken: any = decodeJWTToken(jwtToken)
	const now = parseInt(Date.now().toString().slice(0, -3))
	return (now < decodedToken.exp)
}

/**
 * Interface method to decode JWT token.
 */
export const decodeJWTToken = (jwtToken: string | null): any => {
	let final = ''

	if (jwtToken !== null) {
		try {
			final = jwt_decode(jwtToken)
		} catch {
			console.dir('Can\'t parse JWT')
		}
	}
	
	return final
}

/**
 * Method to write and check all JWT data
 */
export const checkJWTToken = (jwtToken: string | null, refreshToken: string | null): { success: boolean, flag: string } => {
	const decodedToken = decodeJWTToken(jwtToken)
	let final = {
		success: true,
		flag: ''
	}

	if (jwtToken && refreshToken) {
		sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`, jwtToken)
		sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_refreshToken`, refreshToken)
		sessionStorage.setItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`, JSON.stringify(decodedToken.role))
	} else {
		final.success = false
		final.flag = 'noJWTToken'
	}

	return final
}
