/**
 * Extracts data as string fro mresponse
 * @param {AxiosResponse} response The response to treat
 * @returns {*} The real content of the response
 */
export default function rawDataExtractor(response) {
	return response.data.toString()
}
