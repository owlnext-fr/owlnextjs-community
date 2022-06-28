const checkLuhn = (testString: string): boolean => {
    const testRegex = /^[0-9].*$/
    if (!testString.match(testRegex)) return false
    let sum = 0
    for (let i = 0 ; i < testString.length; i++ ) {
      const digit = Number(testString[(testString.length - 1) - i])
      if (i%2 === 0) {
        sum+= digit
      }
      else {
        const number = digit * 2 
        if (number > 9) {
          sum+= number - 9
        } else {
          sum+= number
        }
      }
    }
    if (sum%10 !== 0) return false
    return true
  }
  
  export default checkLuhn