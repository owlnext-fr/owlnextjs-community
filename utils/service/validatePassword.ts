const validatePassword: (testString: string) => boolean = (testString) => {
  return !!testString
    .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@.#&+\-%;\/?!:)(={}*+$€~])[A-Za-z\d_@.#&+\-%;\/?!:)(={}*+$€~]{8,}$/)
}

export default validatePassword