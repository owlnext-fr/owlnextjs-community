import objectDataExtractor from '../../../response/extractors/objectDataExtractor'
import axios from 'axios'

const getAddressApi = async (address: string): Promise<any> => {
    return new Promise((async (resolve, reject) => {
        axios.get(`https://api-adresse.data.gouv.fr/search/?q=${address}&type=housenumber&limit=10&autocomplete=1`).then((res) => {
            resolve(objectDataExtractor(res))
        }).catch((error) => {
            reject(error)
        })
    }))
}

export default getAddressApi