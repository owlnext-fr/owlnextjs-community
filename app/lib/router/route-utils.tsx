import { serializeQuery } from "../../../utils/url-utils";

/**
 * Generates a proper URI with given parameters
 * @param route {string} The route to generate, can be with or without parameters
 * @param routeParams {Object} If route has parameters, you must specify an object with parameters matching route parameters
 * @param queryParams {Object} Query parameters to be encoded
 * @param fragment {null|string} Fragment component for the URI
 * @returns {string} A properly formatted URI
 */
export const generateURI = ({route, routeParams= {}, queryParams = {}, fragment = null}: any) : string => {
	let finalRoute = route

	if(Object.keys(routeParams).length !== 0) {
		for (const key in routeParams) {
			if(-1 !== finalRoute.indexOf(key)) {
				finalRoute = finalRoute.replace('{'+key+'}', routeParams[key])
			}
		}
	}

	// if after route params treatment there is still param string, error !
	if(-1 !== finalRoute.indexOf('{')) {
		const beginParamStr = finalRoute.indexOf('{')+1;
		const endParamStr = finalRoute.indexOf('}');
		const missingParam = finalRoute.substring(beginParamStr, endParamStr)
		const givenParams = JSON.stringify(routeParams)
		throw new Error(`Missing parameter ${missingParam} in parameters given for route ${route} ; parameters given : ${givenParams}`)
	}

	if(Object.keys(queryParams).length !== 0) {
		finalRoute += serializeQuery(queryParams)
	}

	if(null !== fragment) {
		finalRoute += `#${fragment}`
	}

	return finalRoute
}

