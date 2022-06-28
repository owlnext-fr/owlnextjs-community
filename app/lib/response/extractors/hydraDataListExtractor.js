/**
 * Extracts data from response in JSON+LD format
 * @param {AxiosResponse} response The response to treat
 * @returns {*} The real content of the response
 */
 export default function hydraDataListExtractor(response) {
	return response.data.list['hydra:member']
}