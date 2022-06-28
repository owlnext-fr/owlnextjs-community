import frTranslation from '../../../public/locales/fr/common.json'

type Translation = {
  [key: string]: string
}

const getTranslation: (locale?: string) => Translation = (locale: string = 'fr') => {
  switch(locale) {
    case 'fr': 
      return frTranslation
    default : 
    return {}
  }
}

export default getTranslation