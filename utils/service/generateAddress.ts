const generateAddress: (address: any) => string = (address) => {
  const result = [''];
  if (address.numberStreetCoordStructure.length > 0 ) result.push(address.numberStreetCoordStructure)
  if (address.labelTypeStreetCoordStructure.length > 0) result.push(address.labelTypeStreetCoordStructure)
  if (address.repetitionIndexStreetCoordStructure.length > 0) result.push(address.repetitionIndexStreetCoordStructure)
  if (address.labelStreetCoordStructure.length > 0) result.push(address.labelStreetCoordStructure)
  return result.join(' ')
}

export default generateAddress