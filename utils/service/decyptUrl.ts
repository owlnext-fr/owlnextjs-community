const decryptUri:(query: string | string[], isId?: boolean) => string = (query, isId = false) => {

  const decrypt = atob(query.toString())
  if (!isId)   return decrypt.replace(process.env.INTERNAL_CRYPTO_KEY || '', '')
  return (Number(decrypt) - Number(process.env.INTERNAL_CRYPTO_KEY)).toString()
}

export default decryptUri;
