const normalizeFirstname = (firstName: string): string => {
    if (firstName && firstName !== '') {
        return firstName
        .replace(' ', '-')
        .split('-')
        .map((firstname) => `${firstname.charAt(0).toUpperCase()}${firstname.toLowerCase().substring(1)}`)
        .join('-')
    } else {
        return ''
    }
}

export default normalizeFirstname