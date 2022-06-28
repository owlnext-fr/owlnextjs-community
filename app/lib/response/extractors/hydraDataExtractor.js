/**
 * Extracts data from response in JSON+LD format
 * @param {AxiosResponse} response The response to treat
 * @returns {*} The real content of the response
 */
export default function hydraDataExtractor(response) {
	return response.data['hydra:member']
}