type TranslateString = (key: string, translations: any) => string ;

const translateString: TranslateString = (key: any, translations: any) => {
  const translatedKey = translations[key] || key
  return translatedKey
}

export default translateString