const encryptUri:(query: string, isId?: boolean) => string = (query, isId = false) => {

  const stringToEncode = isId
    ? Number(query) + Number(process.env.NEXT_PUBLIC_CRYPTO_KEY)
    : `${query}${process.env.NEXT_PUBLIC_CRYPTO_KEY}`
    
  return btoa(stringToEncode.toString())
}

export default encryptUri;
