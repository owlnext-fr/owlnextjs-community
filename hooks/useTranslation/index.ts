import { UseTranslationFunction } from "app/types/global";
import getTranslation from "./translations";
import translateString from "./utils/translateString";

type UseTranslation = () => {
  t: UseTranslationFunction
}

const useTranslation: UseTranslation = () => {
  let locale = ''
  if (typeof window !== 'undefined') {
    locale = sessionStorage?.getItem('locale') || 'fr'
  }

  const translations = getTranslation(locale)

  let isTest = false
  const query = window.location.search.substring(1).split('&')

  for (const param of query) {
    let splitted = param.split('=')
    if (splitted[0] == 'noTrads' && splitted[1] == 'true') {
      isTest = true
    }
  }

  if (isTest) {
    return { t: (key: string, object?: {
      [key: string]: string
    }) => {
      return key
    }}
  } else {
    return { t: (key: string, object?: {
      [key: string]: string
    }) => {
      if (typeof(object) !== 'undefined') {
        let final = ''
        const reg: RegExp = /{{(.[^}]*)}}/gm
        const regLink: RegExp = /{\/(.[^}]*)\/}/gm
        const str = translateString(key, translations)
  
        if (str !== null && reg !== null) {
          final = str
          let array
  
          while ((array = reg.exec(str)) !== null) {
            if (typeof(object[array[1]]) !== 'undefined') {
              final = final.replace('{{' + array[1] + '}}', object[array[1]])
            } else {
              final = final.replace('{{' + array[1] + '}}', array[1])
            }
          }
        }
  
        return final
      } else {
        return translateString(key, translations)
      }
    }}
  }
  
}

export default useTranslation;