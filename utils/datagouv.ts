import axios from 'axios'

export const searchSiret = async (value: string) => {
    return axios.get(`https://entreprise.data.gouv.fr/api/sirene/v1/siret/${value}`).then((response) => {
        return response
      }).catch((error) => {
          return error
      })
}

export const searchCompanyName = async (value: string) => {
    return axios.get(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${value}?etat_administratif=A`).then((response) => {   
            return response  
        }).catch((error) => {
            return error
        })
}

export const searchSiren = async (value: string) => {
    return axios.get(`https://entreprise.data.gouv.fr/api/sirene/v1/siren/${value}`).then((response) => {
        return response
      }).catch((error) => {
          return error
      })
}