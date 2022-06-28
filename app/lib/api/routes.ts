const routes = {
	// those two routes are default ones for all standard APIs
	API_AUTHENTICATION: '/api/authentication_token',
	API_AUTHENTICATION_REFRESH: '/api/token/refresh',
	PUSHOVER: '/api/pushover',
	
	// SECURITY
	POST_SEND_EMAIL_CHECK_CODE_AGAIN: "/api/auth/email/resend-code",
	POST_LOGIN_REINIT_PASSWORD: '/api/auth/reinit-password/request',
	POST_RESET_PASSWORD_VALIDATE: '/api/auth/reinit-password/validate',
	POST_EMAIL_CHECK_CODE: '/api/auth/email/check-code',

	// put your own API routes here
	
	
}

export default routes