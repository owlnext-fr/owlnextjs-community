/**
 * Serializes a query object to render a query string properly formatted.
 * @param params {Object} An object containing query parameters
 * @param prefix {string} Used only for recursion calls.
 * @returns {string} The query string properly formatted.
 */
export const serializeQuery = (params: any, prefix = ''): string => {
	const query: any = Object.keys(params).map((key) => {
		const value  = params[key];

		if (params.constructor === Array)
			key = `${prefix}[]`;
		else if (params.constructor === Object)
			key = (prefix ? `${prefix}[${key}]` : key);

		if (typeof value === 'object')
			return serializeQuery(value, key);
		else
			return `${key}=${encodeURIComponent(value)}`;
	});

	const queryString = [].concat.apply([], query).join('&');

	if(0 !== queryString.length) {
		return '?'+queryString
	}
	return ''
}