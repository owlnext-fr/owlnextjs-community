/**
 * Extracts data from response in standard JSON format
 * @param {AxiosResponse} response The response to treat
 * @returns {*} The real content of the response
 */
export default function objectDataExtractor(response) {
	return response.data
}
